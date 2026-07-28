"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";

export function HomeFaq() {
  const [openFaq, setOpenFaq] = useState("");

  return (
    <Accordion.Root
      type="single"
      value={openFaq}
      onValueChange={setOpenFaq}
      className="space-y-3"
    >
      {FAQS.map((faq, i) => (
        <Accordion.Item
          key={i}
          value={`faq-${i}`}
          className="bg-white border border-slate-100 rounded-2xl overflow-hidden"
        >
          <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left text-[#1E293B] font-semibold text-sm hover:text-blue-600 transition-colors group">
            {faq.q}
            <ChevronDown
              size={15}
              className="text-slate-400 group-data-[state=open]:rotate-180 transition-transform shrink-0 ml-4"
            />
          </Accordion.Trigger>
          <Accordion.Content className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">
            {faq.a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
