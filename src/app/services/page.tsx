import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — DevOpsPro",
  description:
    "Comprehensive DevOps solutions designed to automate infrastructure, streamline deployments, and improve system reliability.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0B1120] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
            Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            DevOps Services
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl">
            Comprehensive DevOps solutions designed to automate infrastructure, streamline
            deployments, and improve system reliability.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={svc.slug} className="grid md:grid-cols-2 gap-12 items-start">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.grad} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-3">{svc.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">{svc.overview}</p>
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {svc.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${svc.grad} text-white`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/consultation"
                    className={`inline-block bg-gradient-to-r ${svc.grad} text-white font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg`}
                  >
                    Book Consultation
                  </Link>
                </div>
                <div className={`space-y-4 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100">
                    <h3 className="font-semibold text-[#1E293B] text-sm mb-3">
                      Business Benefits
                    </h3>
                    <ul className="space-y-2">
                      {svc.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-slate-500"
                        >
                          <CheckCircle
                            size={14}
                            className="text-emerald-500 shrink-0 mt-0.5"
                          />{" "}
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100">
                    <h3 className="font-semibold text-[#1E293B] text-sm mb-3">
                      Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {svc.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-slate-500"
                        >
                          <ArrowRight
                            size={13}
                            className="text-blue-500 shrink-0 mt-0.5"
                          />{" "}
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
