import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { HeroIllustration, PipelineDiagram } from "@/components/illustrations";
import { HomeFaq } from "@/components/home-faq";
import {
  CASE_STUDIES,
  SERVICES,
  TECH_STACK,
  TESTIMONIALS,
  WHY_ITEMS,
  WORKFLOW_STEPS,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="bg-[#0B1120] pt-20 pb-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">
                  Available for Projects
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Build Faster.
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Deploy Smarter.
                </span>
                <br />
                Scale Confidently.
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                I help startups and growing businesses automate infrastructure, build
                scalable cloud environments, implement CI/CD pipelines, and improve
                deployment reliability using modern DevOps practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/consultation"
                  className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 justify-center shadow-lg shadow-blue-500/20"
                >
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="border border-white/10 text-slate-300 font-semibold px-6 py-3.5 rounded-xl hover:border-white/25 hover:text-white transition-all text-center"
                >
                  Explore Services
                </Link>
              </div>
              <div className="flex items-center gap-8">
                {(
                  [
                    { value: "10+", label: "Projects" },
                    { value: "99.9%", label: "Uptime SLA" },
                    { value: "5+", label: "Years Exp." },
                  ] as const
                ).map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="text-slate-500 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1526] border-y border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Automated Delivery Pipeline
          </p>
          <div className="flex justify-center">
            <PipelineDiagram />
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
              Tech Stack
            </span>
            <h2 className="text-3xl font-bold text-[#0F172A]">Technologies I Work With</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TECH_STACK.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group text-center"
              >
                <div
                  className="w-8 h-8 rounded-lg mx-auto mb-3 flex items-center justify-center text-white text-xs font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div className="font-semibold text-[#1E293B] text-sm group-hover:text-blue-600 transition-colors">
                  {t.name}
                </div>
                <div className="text-slate-400 text-xs mt-0.5">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
              End-to-End DevOps Solutions
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From infrastructure as code to monitoring and observability — every layer of
              your DevOps stack, built right.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.slug}
                  href="/services"
                  className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-blue-500/5 transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${svc.grad} flex items-center justify-center mb-4`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] mb-2 group-hover:text-blue-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.short}</p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block border border-blue-200 text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1120] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
              Why Work With Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What You Can Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/8 rounded-2xl p-5 hover:bg-white/8 transition-colors"
                >
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.grad} flex items-center justify-center mb-4`}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1.5">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              DevOps Workflow
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="relative inline-block mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto text-white font-extrabold text-lg shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-14 w-[calc(100%+1rem)] h-px bg-gradient-to-r from-blue-600/30 to-violet-600/10" />
                  )}
                </div>
                <h3 className="font-semibold text-[#1E293B] text-sm mb-1">{step.label}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Real Results for Real Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.title}
                className="rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all"
              >
                <div
                  className="h-2 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${cs.color}, ${cs.color}99)`,
                  }}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span
                        className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 text-white"
                        style={{ background: cs.color }}
                      >
                        {cs.tag}
                      </span>
                      <h3 className="font-bold text-[#1E293B] text-lg">{cs.title}</h3>
                      <p className="text-slate-400 text-xs">{cs.client}</p>
                    </div>
                    <TrendingUp size={20} className="text-emerald-500 shrink-0 mt-1" />
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{cs.desc}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-slate-50 rounded-xl p-3 text-center">
                        <div className="text-xs text-slate-400 mb-1">{m.label}</div>
                        <div className="text-xs text-slate-400 line-through">{m.before}</div>
                        <div className="font-bold text-sm" style={{ color: cs.color }}>
                          {m.after}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1120] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/8 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Frequently Asked Questions
            </h2>
          </div>
          <HomeFaq />
        </div>
      </section>

      <section className="bg-[#0B1120] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-20"
            style={{ background: "radial-gradient(ellipse, #2563EB, transparent 70%)" }}
          />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Book a free consultation and discover how modern DevOps practices can
            accelerate your business.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-2xl shadow-blue-500/30"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
