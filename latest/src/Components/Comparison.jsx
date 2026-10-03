import { Check, X } from "lucide-react";

const rows = [
  "Personalized training",
  "Progress tracking",
  "Expert coaching",
  "Flexible programs",
  "Community support",
];

export default function Comparison() {
  return (
    <section className="px-4 py-24 md:px-6 md:py-36">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#EAFB7B]">
            The Difference
          </p>

          <h2 className="font-display text-4xl font-light text-white md:text-6xl">
            Stop guessing.
            <br />
            <span className="text-[#C5CFC8]">Start progressing.</span>
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-[24px] border border-white/10 bg-[#1A2E2B]">
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="p-5 md:p-7">
              <span className="text-xs uppercase tracking-widest text-[#C5CFC8]">
                Approach
              </span>
            </div>

            <div className="border-l border-white/10 p-5 text-center md:p-7">
              <span className="text-xs uppercase tracking-widest text-[#C5CFC8]">
                Typical Gym
              </span>
            </div>

            <div className="border-l border-white/10 bg-[#EAFB7B] p-5 text-center md:p-7">
              <span className="text-xs font-medium uppercase tracking-widest text-[#0F2421]">
                Kalki
              </span>
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row}
              className="grid grid-cols-3 border-b border-white/10 last:border-b-0"
            >
              <div className="p-5 text-sm text-white md:p-7">{row}</div>

              <div className="flex items-center justify-center border-l border-white/10 p-5 md:p-7">
                <X size={18} className="text-white/30" />
              </div>

              <div className="flex items-center justify-center border-l border-white/10 bg-[#EAFB7B]/5 p-5 md:p-7">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAFB7B] text-[#0F2421]">
                  <Check size={15} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}