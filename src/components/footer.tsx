import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Book Consultation", href: "/consultation" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#060D1A] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-3">
              DevOps
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Pro
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Helping businesses build reliable, scalable, and automated infrastructure
              through modern DevOps practices.
            </p>
            <div className="flex gap-4 mt-6">
              {(
                [
                  { icon: Github, href: "https://github.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Mail, href: "mailto:hello@devopspro.dev" },
                ] as const
              ).map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@devopspro.dev"
                  className="text-slate-400 text-sm hover:text-white flex items-center gap-2"
                >
                  <Mail size={13} /> hello@devopspro.dev
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-slate-400 text-sm hover:text-white flex items-center gap-2"
                >
                  <Linkedin size={13} /> LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="text-slate-400 text-sm hover:text-white flex items-center gap-2"
                >
                  <Github size={13} /> GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 mt-12 pt-6 text-slate-600 text-xs">
          © {new Date().getFullYear()} DevOpsPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
