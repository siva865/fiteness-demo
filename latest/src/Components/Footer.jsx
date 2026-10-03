import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import {
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-14 md:px-6">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAFB7B] text-[#0F2421]">
                <span className="text-sm">K</span>
              </span>

              <div>
                <p className="font-display text-lg text-white">KALKI</p>
                <p className="text-[8px] tracking-[0.25em] text-[#C5CFC8]">
                  FITNESS STUDIO
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#C5CFC8]">
              A modern fitness studio built around better training, better
              movement and a stronger life.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-widest text-[#EAFB7B]">
              Explore
            </p>

            <div className="space-y-3 text-sm text-[#C5CFC8]">
              <a href="#about" className="block hover:text-white">
                About
              </a>
              <a href="#programs" className="block hover:text-white">
                Programs
              </a>
              <a href="#how-it-works" className="block hover:text-white">
                How It Works
              </a>
              <a href="#testimonials" className="block hover:text-white">
                Results
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-widest text-[#EAFB7B]">
              Contact
            </p>

            <div className="space-y-3 text-sm leading-7 text-[#C5CFC8]">
              <p>+91 98765 43210</p>
              <p>hello@kalkifitness.com</p>
              <p>
                Kalki Fitness Studio
                <br />
                Your City, Tamil Nadu
                <br />
                India
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-widest text-[#EAFB7B]">
              Follow
            </p>

            <div className="flex gap-2">
              {[FaInstagramSquare , FaFacebook, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social media"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#C5CFC8] transition hover:border-[#EAFB7B]/40 hover:text-[#EAFB7B]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm text-white"
            >
              Start training
              <ArrowUpRight size={16} className="text-[#EAFB7B]" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#7F918B] md:flex-row">
          <p>© 2026 Kalki Fitness Studio. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}