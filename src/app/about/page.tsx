import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About — DevOpsPro",
  description:
    "Meet your DevOps infrastructure partner helping startups and businesses build automated, scalable cloud infrastructure.",
};

const timeline = [
  { year: "2019", event: "Started DevOps career, Linux and AWS fundamentals" },
  {
    year: "2020",
    event: "First CI/CD pipeline implementations with Jenkins and GitLab CI",
  },
  {
    year: "2021",
    event: "Kubernetes and containerization — EKS production deployments",
  },
  {
    year: "2022",
    event: "Terraform IaC at scale — 100+ AWS resources under version control",
  },
  { year: "2023", event: "Launched freelance DevOps consulting practice" },
  { year: "2024+", event: "Serving startups and SaaS businesses globally" },
];

const values = [
  {
    title: "Reliability First",
    desc: "Systems should be dependable before they're clever.",
  },
  {
    title: "Automation Over Manual",
    desc: "If you do it twice, it should be automated.",
  },
  {
    title: "Transparent Communication",
    desc: "No black boxes — I explain what I build and why.",
  },
  {
    title: "Continuous Improvement",
    desc: "Every engagement leaves your team more capable.",
  },
];

const expertise = [
  "GitHub Actions",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Grafana",
  "Prometheus",
  "Linux Administration",
  "Infrastructure Automation",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0B1120] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
            About
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Meet Your DevOps Infrastructure Partner
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl">
            I help startups and businesses build automated, scalable, and reliable cloud
            infrastructure using industry-leading DevOps tools and best practices.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-3 space-y-8">
            <p className="text-slate-500 text-lg leading-relaxed">
              I am a DevOps Engineer focused on helping businesses build reliable,
              scalable, and automated infrastructure. My expertise spans cloud platforms,
              CI/CD pipelines, infrastructure automation, containerization, orchestration,
              and monitoring.
            </p>
            <p className="text-slate-500 leading-relaxed">
              I work closely with startups, SaaS companies, and growing businesses to
              improve deployment efficiency, reduce operational overhead, and implement
              modern DevOps best practices tailored to each team&apos;s context and goals.
            </p>

            <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest mb-3 opacity-70">
                Mission Statement
              </div>
              <p className="text-lg font-semibold leading-relaxed">
                &ldquo;To help businesses deploy faster, scale confidently, and operate
                efficiently through automation and modern cloud infrastructure.&rdquo;
              </p>
            </div>

            <div>
              <h2 className="font-bold text-[#0F172A] text-lg mb-6">Experience Timeline</h2>
              <div className="space-y-4">
                {timeline.map((t, i) => (
                  <div key={t.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-slate-100 my-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="text-xs font-semibold text-blue-600 mb-0.5">
                        {t.year}
                      </div>
                      <div className="text-slate-600 text-sm">{t.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/consultation"
              className="inline-flex bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
              <h2 className="font-bold text-[#0F172A] mb-4">Core Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-slate-200 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  { label: "Projects Delivered", value: "10+" },
                  { label: "Technologies", value: "20+" },
                  { label: "Years Experience", value: "5+" },
                  { label: "Client Satisfaction", value: "100%" },
                ] as const
              ).map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-100 text-center"
                >
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
              <h2 className="font-bold text-[#0F172A] mb-4">Core Values</h2>
              <div className="space-y-4">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-3">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#1E293B] text-sm">{v.title}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
