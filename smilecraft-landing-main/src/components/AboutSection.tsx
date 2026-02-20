import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Clock } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";

const highlights = [
  { icon: GraduationCap, label: "BDS Qualified" },
  { icon: Award, label: "12+ Years Experience" },
  { icon: Heart, label: "Patient-First Approach" },
  { icon: Clock, label: "Flexible Timings" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src={doctorImage}
                alt="Dr. Arjun Mehta"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-lg">
              <p className="text-2xl font-bold">12+</p>
              <p className="text-sm opacity-90">Years of Practice</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Meet Your Dentist
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Dr. Arjun Mehta
            </h2>
            <p className="text-muted-foreground mb-3 font-medium">
              BDS — General & Cosmetic Dentist
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dr. Mehta believes every patient deserves a comfortable, judgment-free dental experience. With over 12 years of practice in Mumbai, he combines clinical precision with genuine compassion — ensuring your visit is as relaxed as it is effective.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From routine check-ups to complex cosmetic transformations, Dr. Mehta stays at the forefront of modern dentistry, using the latest techniques and technology to deliver results that last.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-secondary-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
