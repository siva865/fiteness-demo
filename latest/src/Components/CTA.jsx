import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="px-4 py-24 md:px-6 md:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[28px] bg-[#EAFB7B] px-6 py-16 text-[#0F2421] md:px-14 md:py-24">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

          <div className="relative grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] opacity-60">
                Ready when you are
              </p>

              <h2 className="mt-5 font-display text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
                Your stronger
                <br />
                chapter starts now.
              </h2>
            </div>

            <div>
              <p className="max-w-md text-sm leading-7 opacity-70">
                Tell us your goal and we'll help you find the right training
                experience at Kalki Fitness Studio.
              </p>

              <a
                href="mailto:hello@kalkifitness.com"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#0F2421] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1"
              >
                Book a Consultation
                <ArrowRight size={17} />
              </a>

              <div className="mt-8 flex flex-wrap gap-5 text-xs opacity-70">
                <span className="flex items-center gap-2">
                  <Phone size={14} />
                  +91 98765 43210
                </span>

                <span className="flex items-center gap-2">
                  <Mail size={14} />
                  hello@kalkifitness.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}