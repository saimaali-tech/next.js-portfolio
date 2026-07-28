"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#0B1120]/90 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-bold text-lg text-white tracking-tight"
        >
          DevOps
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Pro
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/consultation"
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Book Consultation
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0B1120] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium text-left ${
                pathname === href ? "text-white" : "text-slate-400"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/consultation"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
