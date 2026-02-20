import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/5" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-foreground/5" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready for a Healthier Smile?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
              Book your consultation today and take the first step towards the smile you deserve. Walk-ins also welcome.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Call to Book — ₹500
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Andheri West, Mumbai
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Mon – Sat, 10 AM – 8 PM
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
