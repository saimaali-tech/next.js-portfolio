"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle, Clock, Linkedin, Mail, Phone } from "lucide-react";
import { SERVICES } from "@/lib/data";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
};

const initialForm: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
};

const topics = [
  "CI/CD Pipelines",
  "AWS Infrastructure",
  "Kubernetes Deployments",
  "Docker Strategy",
  "Infrastructure Automation",
  "Monitoring & Observability",
  "Cloud Migration",
  "DevOps Roadmap",
];

export function ConsultationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handle = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        {submitted ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={30} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1E293B] mb-3">
              Consultation Scheduled!
            </h2>
            <p className="text-slate-500">
              Thank you for reaching out. I&apos;ll review your details and respond within
              24 hours to confirm a time that works.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-5"
          >
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Your Project Details</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {(
                [
                  { id: "fullName", label: "Full Name", ph: "Jane Smith", req: true },
                  { id: "company", label: "Company Name", ph: "Acme Corp", req: false },
                ] as const
              ).map((f) => (
                <div key={f.id}>
                  <label
                    className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                    htmlFor={f.id}
                  >
                    {f.label} {f.req && "*"}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    required={f.req}
                    value={form[f.id]}
                    onChange={handle}
                    placeholder={f.ph}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]"
                  />
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                  htmlFor="email"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handle}
                  placeholder="jane@acmecorp.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handle}
                  placeholder="+1 (555) 000-0000"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                  htmlFor="projectType"
                >
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={form.projectType}
                  onChange={handle}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Other / Multiple Services</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                  htmlFor="budget"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handle}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]"
                >
                  <option value="">Prefer not to say</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 – $15,000</option>
                  <option value="15k-30k">$15,000 – $30,000</option>
                  <option value="30k-plus">$30,000+</option>
                  <option value="retainer">Monthly Retainer</option>
                </select>
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                htmlFor="timeline"
              >
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={form.timeline}
                onChange={handle}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]"
              >
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="1month">Within 1 month</option>
                <option value="3months">Within 3 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                htmlFor="description"
              >
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                value={form.description}
                onChange={handle}
                placeholder="Describe your infrastructure challenges, current stack, team size, and what you'd like to achieve..."
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Schedule Consultation <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>

      <div className="space-y-5">
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h2 className="font-bold text-[#1E293B] mb-4">What We Can Discuss</h2>
          <ul className="space-y-2">
            {topics.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-slate-500">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shrink-0" />{" "}
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h2 className="font-bold text-[#1E293B] mb-4">Contact Directly</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:hello@devopspro.dev"
                className="text-slate-500 text-sm hover:text-blue-600 flex items-center gap-2 transition-colors"
              >
                <Mail size={14} className="text-blue-500" /> hello@devopspro.dev
              </a>
            </li>
            <li>
              <a
                href="tel:+15551234567"
                className="text-slate-500 text-sm hover:text-blue-600 flex items-center gap-2 transition-colors"
              >
                <Phone size={14} className="text-blue-500" /> +1 (555) 123-4567
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                className="text-slate-500 text-sm hover:text-blue-600 flex items-center gap-2 transition-colors"
              >
                <Linkedin size={14} className="text-blue-500" /> LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={16} className="opacity-80" />
            <span className="font-semibold text-sm">Free 30-Minute Call</span>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            No commitment required. We&apos;ll discuss your challenges and I&apos;ll share my
            initial recommendations — completely free.
          </p>
        </div>
      </div>
    </div>
  );
}
