import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const programs = [
  {
    title: "Personal Training",
    label: "1 — 1",
    description:
      "Focused coaching designed around your goals, ability and schedule.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85",
    features: ["Personal trainer", "Custom workouts", "Progress tracking"],
  },
  {
    title: "Strength & Conditioning",
    label: "GROUP",
    description:
      "Build strength, stamina and athletic performance in structured sessions.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    features: ["Coach-led sessions", "Strength training", "Conditioning"],
  },
  {
    title: "Mobility & Recovery",
    label: "BALANCE",
    description:
      "Move better, recover smarter and keep your body ready for life.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
    features: ["Mobility work", "Recovery", "Movement coaching"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="px-4 py-24 md:px-6 md:py-36">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#EAFB7B]">
              Programs
            </p>

            <h2 className="font-display text-4xl font-light text-white md:text-6xl">
              Find your
              <br />
              <span className="text-[#C5CFC8]">way to move.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#C5CFC8]">
            Choose a training experience that fits your lifestyle and helps
            you stay consistent.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#1A2E2B]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E2B] via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-[#EAFB7B] px-3 py-1.5 text-[10px] font-medium tracking-widest text-[#0F2421]">
                  {program.label}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-3xl font-light text-white">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#C5CFC8]">
                  {program.description}
                </p>

                <div className="mt-6 space-y-3">
                  {program.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAFB7B] text-[#0F2421]">
                        <Check size={12} />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-[#EAFB7B]"
                >
                  Learn more
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}