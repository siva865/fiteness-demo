import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun M.",
    role: "Member · 8 months",
    text: "The biggest change wasn't just my strength. I finally became consistent with training.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "Priya R.",
    role: "Member · 1 year",
    text: "The trainers actually understand what you need instead of giving everyone the same workout.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "Rahul K.",
    role: "Member · 6 months",
    text: "I came for fitness and stayed because the environment makes me want to show up.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-24 md:px-6 md:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#EAFB7B]">
              Member Stories
            </p>

            <h2 className="font-display text-4xl font-light text-white md:text-6xl">
              Real people.
              <br />
              <span className="text-[#C5CFC8]">Real journeys.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#C5CFC8]">
            Everyone starts somewhere. What matters is deciding to keep
            moving.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1A2E2B]"
            >
              <div className="relative h-72">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E2B] to-transparent" />

                <button
                  aria-label={`Play testimonial from ${item.name}`}
                  className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAFB7B] text-[#0F2421] transition hover:scale-105"
                >
                  <Play size={15} fill="currentColor" />
                </button>
              </div>

              <div className="relative p-6 pt-2">
                <Quote
                  size={28}
                  className="mb-5 text-[#7FB5A4]"
                  strokeWidth={1.5}
                />

                <p className="font-display text-xl font-light leading-relaxed text-white">
                  “{item.text}”
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-sm text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-[#C5CFC8]">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}