import type { Metadata } from "next";
import { ConsultationForm } from "@/components/consultation-form";

export const metadata: Metadata = {
  title: "Book Consultation — DevOpsPro",
  description:
    "Book a free 30-minute consultation to discuss your DevOps challenges — no commitment required.",
};

export default function ConsultationPage() {
  return (
    <>
      <section className="bg-[#0B1120] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #06B6D4, transparent 70%)" }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let&apos;s Discuss Your DevOps Challenges
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl">
            Book a free 30-minute consultation — no commitment, no sales pitch.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20 px-6">
        <ConsultationForm />
      </section>
    </>
  );
}
