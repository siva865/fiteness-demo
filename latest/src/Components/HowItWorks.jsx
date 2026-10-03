import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Dumbbell,
  LineChart,
  Trophy,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell us your goal",
    text: "Share where you are now and where you want to go.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Build your plan",
    text: "Our trainers create a practical plan around your needs.",
    icon: Dumbbell,
  },
  {
    number: "03",
    title: "Train consistently",
    text: "Follow your workouts with expert guidance and support.",
    icon: LineChart,
  },
  {
    number: "04",
    title: "See the change",
    text: "Track your progress and keep raising your standard.",
    icon: Trophy,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden px-4 py-24 md:px-6 md:py-36"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#EAFB7B]">
            Your Journey
          </p>

          <h2 className="font-display text-4xl font-light text-white md:text-6xl">
            Simple steps.
            <br />
            <span className="text-[#C5CFC8]">Real progress.</span>
          </h2>
        </div>

        {/* Flight path */}
        <svg
          className="pointer-events-none absolute left-[5%] top-[48%] hidden w-[90%] lg:block"
          viewBox="0 0 1000 180"
          fill="none"
        >
          <path
            d="M10 140 C200 20 280 170 470 85 C650 0 760 160 990 35"
            stroke="#7FB5A4"
            strokeOpacity=".25"
            strokeWidth="2"
            strokeDasharray="8 10"
            className="flight-path"
          />
        </svg>

        <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group rounded-[24px] border border-white/10 bg-[#1A2E2B] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7FB5A4]/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3E5450] text-sm text-white">
                    {step.number}
                  </span>

                  <Icon
                    size={48}
                    strokeWidth={1}
                    className="text-[#7FB5A4] transition group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-12 font-display text-2xl font-light text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#C5CFC8]">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}