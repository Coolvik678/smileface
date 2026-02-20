import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Dr. Mehta made my root canal completely painless. I was so nervous going in, but his calm demeanor and gentle approach put me at ease instantly.",
    rating: 5,
  },
  {
    name: "Rahul Desai",
    text: "Best dental experience I've had. The clinic is spotless, modern, and the staff is incredibly friendly. My teeth whitening results were amazing!",
    rating: 5,
  },
  {
    name: "Ananya Kulkarni",
    text: "I've been going to SmileCraft for two years. The quality of care is consistently excellent — from cleanings to my recent crown. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            What Our Patients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-5 right-5" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-5 text-sm">
                "{t.text}"
              </p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">Patient</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
