import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Dumbbell,
  HeartPulse,
  Sparkles,
  Target,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Train with purpose.",
    text: "Every workout is designed around your goals, your current level and the progress you actually want to see.",
    bullets: [
      "Goal-based training plans",
      "Expert coaching",
      "Progress tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85",
    icon: Target,
  },
  {
    number: "02",
    title: "Strength that lasts.",
    text: "Build functional strength and confidence through carefully structured resistance and conditioning sessions.",
    bullets: [
      "Strength foundations",
      "Functional movement",
      "Smart progression",
    ],
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=85",
    icon: Dumbbell,
  },
  {
    number: "03",
    title: "Move better. Feel better.",
    text: "Mobility, recovery and conditioning work together to help your body perform at its best every day.",
    bullets: [
      "Mobility sessions",
      "Recovery guidance",
      "Better movement",
    ],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85",
    icon: HeartPulse,
  },
  {
    number: "04",
    title: "A community that moves.",
    text: "Train alongside people who are working toward their own goals while motivating each other along the way.",
    bullets: [
      "Supportive community",
      "Group sessions",
      "Positive environment",
    ],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section id="about" className="px-4 py-24 md:px-6 md:py-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#EAFB7B]">
              Why Kalki
            </p>

            <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-[#F4F4EE] md:text-6xl">
              More than a gym.
              <br />
              <span className="text-[#C5CFC8]">
                A place to become stronger.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7 }}
                style={{
                  top: `${100 + index * 18}px`,
                  zIndex: index + 1,
                }}
                className="sticky rounded-[24px] border border-[rgba(140,200,180,.25)] bg-[#1A2E2B] p-5 shadow-2xl md:p-8"
              >
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  <div className={`${index % 2 ? "md:order-2" : ""}`}>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3E5450] text-xs text-white">
                        {feature.number}
                      </span>

                      <Icon
                        size={25}
                        strokeWidth={1.5}
                        className="text-[#7FB5A4]"
                      />
                    </div>

                    <h3 className="font-display text-3xl font-light leading-tight text-white md:text-5xl">
                      {feature.title}
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-[#C5CFC8] md:text-base">
                      {feature.text}
                    </p>

                    <div className="mt-7 space-y-3">
                      {feature.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-center gap-3 text-sm text-[#F4F4EE]"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAFB7B] text-[#0F2421]">
                            <ArrowUpRight size={13} />
                          </span>
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${index % 2 ? "md:order-1" : ""}`}>
                    <div className="group relative overflow-hidden rounded-[20px]">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[500px]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2421]/50 to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}