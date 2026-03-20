#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: publish_blog_object.py <blog_object.json> <blog-data.ts>")
        return 2

    obj_path = Path(sys.argv[1])
    ts_path = Path(sys.argv[2])

    if not obj_path.exists():
        print(f"ERROR: blog object not found: {obj_path}")
        return 1
    if not ts_path.exists():
        print(f"ERROR: blog data file not found: {ts_path}")
        return 1

    obj = json.loads(obj_path.read_text())
    slug = obj.get("slug")
    if not slug:
        print("ERROR: blog object missing 'slug'")
        return 1

    ts = ts_path.read_text()

    if re.search(rf'slug:\s*"{re.escape(slug)}"', ts):
        print(f"SKIP: slug already exists: {slug}")
        return 0

    marker = "export const blogPosts: BlogPost[] = ["
    marker_idx = ts.find(marker)
    if marker_idx == -1:
        print("ERROR: could not find blogPosts array marker")
        return 1

    close_idx = ts.find("\n];", marker_idx)
    if close_idx == -1:
        print("ERROR: could not find blogPosts array closing '];'")
        return 1

    obj_str = json.dumps(obj, ensure_ascii=False, indent=2)
    obj_lines = ["  " + line if line else line for line in obj_str.splitlines()]
    block = "\n" + "\n".join(obj_lines) + ",\n"

    new_ts = ts[:close_idx] + block + ts[close_idx:]
    ts_path.write_text(new_ts)

    print(f"OK: inserted slug '{slug}' into {ts_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
