import { motion } from "framer-motion";
import { Sparkles, Shield, Wrench, Scissors, Crown, Sun, AlignCenter } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Cleaning & Polishing",
    description: "Professional scaling and polishing for a brighter, healthier smile.",
  },
  {
    icon: Shield,
    title: "Root Canal Treatment",
    description: "Painless root canal procedures using advanced rotary technology.",
  },
  {
    icon: Wrench,
    title: "Dental Fillings",
    description: "Tooth-colored composite fillings for a natural, seamless look.",
  },
  {
    icon: Scissors,
    title: "Tooth Extraction",
    description: "Safe and gentle extraction with minimal discomfort and quick recovery.",
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    description: "Custom-crafted restorations to restore your smile's form and function.",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description: "Professional whitening that delivers visible results in one session.",
  },
  {
    icon: AlignCenter,
    title: "Aligners",
    description: "Clear, comfortable aligners for discreet teeth straightening.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Comprehensive Dental Care
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From routine cleanings to advanced cosmetic procedures — everything your smile needs, under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
