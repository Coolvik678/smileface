import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SmileCraft Dental Clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.65)]" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6"
          >
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Trusted by 5,000+ patients in Mumbai
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Modern Dentistry,{" "}
            <span style={{ color: "hsl(174 62% 60%)" }}>Gentle Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed mb-8"
            style={{ color: "hsl(0 0% 85%)" }}
          >
            Experience pain-free dental treatments with Dr. Arjun Mehta.
            12+ years of expertise in general & cosmetic dentistry, right in the heart of Andheri West.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Book Consultation — ₹500
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 rounded-lg text-base font-medium hover:bg-primary-foreground/10 transition-colors"
              style={{ color: "hsl(0 0% 95%)" }}
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-6"
            style={{ color: "hsl(0 0% 80%)" }}
          >
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "hsl(0 0% 100%)" }}>12+</p>
              <p className="text-xs">Years Exp.</p>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "hsl(0 0% 100%)" }}>5,000+</p>
              <p className="text-xs">Happy Patients</p>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "hsl(0 0% 100%)" }}>7</p>
              <p className="text-xs">Treatments</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
