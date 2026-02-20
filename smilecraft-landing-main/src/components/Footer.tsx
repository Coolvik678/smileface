import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-display font-bold text-primary mb-2">SmileCraft</p>
            <p className="text-sm text-muted-foreground">
              Modern dental care by Dr. Arjun Mehta. Quality treatments in a calm, comfortable environment.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Quick Links</p>
            <div className="flex flex-col gap-2">
              {["Services", "About", "Testimonials", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                Andheri West, Mumbai, Maharashtra
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                hello@smilecraft.in
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 SmileCraft Dental Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
