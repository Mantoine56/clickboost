export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 ClickBoost - Ottawa's Web Development & SEO Experts. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a> | 
          <a href="#" className="hover:text-primary-foreground transition-colors ml-2">Terms of Service</a>
        </p>
        <p className="mt-2">Contact: <a href="mailto:antoine@clickboost.ca" className="hover:text-primary-foreground transition-colors">antoine@clickboost.ca</a></p>
        <p className="mt-4">Affordable Web Development Services in Ottawa | Best SEO Services for Small Businesses in Ottawa | Custom Web Applications Development in Ottawa</p>
      </div>
    </footer>
  );
}