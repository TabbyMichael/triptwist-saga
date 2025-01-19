import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About TripTwist</h3>
          <p className="text-sm text-muted-foreground">
            Discover and plan your perfect journey with TripTwist. We make travel planning easy and enjoyable.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#destinations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Destinations
              </a>
            </li>
            <li>
              <a href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Travel Blog
              </a>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TripTwist. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;