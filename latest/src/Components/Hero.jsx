import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90";

export default function Hero() {
  return (
    <section className="px-4 pt-28 md:px-6 md:pt-32">
      <div className="relative mx-auto min-h-[680px] max-w-[1400px] overflow-hidden rounded-[28px] border border-white/10 md:min-h-[760px]">
        <img
          src={heroImage}
          alt="Athlete training inside a modern fitness studio"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2421]/50 via-[#0F2421]/55 to-[#0F2421]/95" />

        <div className="relative flex min-h-[680px] items-center justify-center px-5 py-24 text-center md:min-h-[760px]">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#C5CFC8] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EAFB7B]" />
                Train Strong. Live Better.
              </div>

              <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.92] tracking-[-0.045em] text-[#F4F4EE]">
                Build a body
                <br />
                <span className="text-[#EAFB7B]">built for life.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#C5CFC8] md:text-lg"
            >
              Personal training, smarter workouts and a community that keeps
              you moving toward the strongest version of yourself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="lime-button inline-flex items-center gap-3 rounded-full bg-[#EAFB7B] px-7 py-4 text-sm font-medium text-[#0F2421]"
              >
                Start Your Journey
                <ArrowRight size={17} />
              </a>

              <a
                href="#programs"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm text-white backdrop-blur-md transition hover:bg-white/10"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0F2421]">
                  <Play size={12} fill="currentColor" />
                </span>
                Explore Programs
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 hidden rounded-2xl border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-md md:block">
          <p className="text-xs text-[#C5CFC8]">MEMBERS TRAINING</p>
          <p className="mt-1 font-display text-2xl text-white">500+</p>
        </div>

        <div className="absolute bottom-6 right-6 hidden rounded-2xl border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-md md:block">
          <p className="text-xs text-[#C5CFC8]">PROGRAMS</p>
          <p className="mt-1 font-display text-2xl text-[#EAFB7B]">12+</p>
        </div>
      </div>
    </section>
  );
}