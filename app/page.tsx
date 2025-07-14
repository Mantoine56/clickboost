import { SplineSceneBasic, MenuBarDemo } from "@/components/ui/demo";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Full Screen Spline Scene Component */}
      <SplineSceneBasic />
      
      {/* Floating Menu Bar Demo - positioned over the scene */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <MenuBarDemo />
      </div>
    </div>
  );
}
