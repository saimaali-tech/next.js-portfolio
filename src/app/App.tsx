import { useState } from "react";
import {
  Menu, X, ArrowRight, CheckCircle, ChevronDown,
  Github, Linkedin, Mail, Phone, Server, Cloud,
  GitBranch, Box, Shield, BarChart2, Terminal,
  Settings, Layers, Activity, Zap, TrendingUp,
  Clock, DollarSign, Lock, Headphones,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

type Page = "home" | "services" | "about" | "consultation";

// ─── SVG Illustrations ────────────────────────────────────────────────────────

function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl">
      {/* Glow blobs */}
      <ellipse cx="260" cy="210" rx="200" ry="160" fill="url(#heroBlob)" opacity="0.18" />
      <defs>
        <radialGradient id="heroBlob" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gradBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="gradCyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="gradGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* Central cloud node */}
      <rect x="185" y="155" width="150" height="90" rx="16" fill="url(#gradBlue)" opacity="0.9" />
      <text x="260" y="194" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="600">AWS Cloud</text>
      <text x="260" y="212" textAnchor="middle" fill="#BFDBFE" fontSize="9" fontFamily="Inter,sans-serif">Infrastructure</text>
      <rect x="200" y="220" width="120" height="16" rx="4" fill="white" opacity="0.12" />
      <rect x="204" y="224" width="60" height="8" rx="2" fill="#10B981" opacity="0.9" />

      {/* CI/CD node top-left */}
      <rect x="30" y="60" width="120" height="76" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(99,102,241,0.4)" strokeWidth="1" />
      <text x="90" y="92" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600">CI/CD Pipeline</text>
      <text x="90" y="108" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter,sans-serif">GitHub Actions</text>
      {/* pipeline dots */}
      {[0,1,2,3].map(i => (
        <circle key={i} cx={58 + i * 20} cy="122" r="5" fill={i < 3 ? "url(#gradCyan)" : "rgba(255,255,255,0.15)"} />
      ))}
      {[0,1,2].map(i => (
        <line key={i} x1={63 + i * 20} y1="122" x2={73 + i * 20} y2="122" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3 2" />
      ))}

      {/* Kubernetes node top-right */}
      <rect x="370" y="50" width="120" height="90" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
      <text x="430" y="82" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600">Kubernetes</text>
      <text x="430" y="97" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter,sans-serif">Orchestration</text>
      {/* k8s pods */}
      {[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]].map(([col, row], i) => (
        <rect key={i} x={390 + col * 30} y={108 + row * 18} width="22" height="12" rx="3"
          fill={i % 3 === 0 ? "url(#gradCyan)" : "rgba(255,255,255,0.12)"} />
      ))}

      {/* Monitoring node bottom-right */}
      <rect x="370" y="280" width="120" height="90" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
      <text x="430" y="308" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600">Monitoring</text>
      <text x="430" y="323" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter,sans-serif">Grafana · Prometheus</text>
      {/* sparkline */}
      <polyline points="390,355 403,345 416,352 429,338 442,348 455,333 468,340" stroke="url(#gradGreen)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Terraform node bottom-left */}
      <rect x="30" y="280" width="120" height="76" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />
      <text x="90" y="312" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600">Terraform IaC</text>
      <text x="90" y="327" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter,sans-serif">Infrastructure as Code</text>
      <rect x="46" y="336" width="88" height="8" rx="2" fill="url(#gradBlue)" opacity="0.6" />

      {/* Connecting lines */}
      <line x1="150" y1="98" x2="185" y2="185" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="370" y1="95" x2="335" y2="185" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="370" y1="325" x2="335" y2="245" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="150" y1="318" x2="185" y2="245" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* Floating stat badges */}
      <rect x="208" y="90" width="104" height="30" rx="8" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
      <circle cx="222" cy="105" r="4" fill="#10B981" />
      <text x="230" y="109" fill="#10B981" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="600">99.9% Uptime</text>

      <rect x="208" y="300" width="104" height="30" rx="8" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
      <circle cx="222" cy="315" r="4" fill="#06B6D4" />
      <text x="230" y="319" fill="#06B6D4" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="600">Auto-scaled</text>
    </svg>
  );
}

function PipelineDiagram() {
  const steps = [
    { label: "Commit", color: "#2563EB", icon: "⬆" },
    { label: "Build", color: "#7C3AED", icon: "⚙" },
    { label: "Test", color: "#06B6D4", icon: "✓" },
    { label: "Stage", color: "#10B981", icon: "▶" },
    { label: "Deploy", color: "#2563EB", icon: "🚀" },
    { label: "Monitor", color: "#7C3AED", icon: "◉" },
  ];
  return (
    <div className="flex items-center gap-0 overflow-x-auto py-2">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
              style={{ background: `linear-gradient(135deg, ${s.color}, ${steps[(i+1)%steps.length].color})` }}
            >
              {s.icon}
            </div>
            <span className="text-[10px] font-semibold text-[#94A3B8] whitespace-nowrap">{s.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="w-8 h-px mx-1" style={{ background: `linear-gradient(90deg, ${s.color}, ${steps[i+1].color})` }} />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TECH_STACK = [
  { name: "GitHub Actions", desc: "CI/CD Automation", color: "#2563EB" },
  { name: "Docker", desc: "Containerization", color: "#06B6D4" },
  { name: "Kubernetes", desc: "Orchestration", color: "#7C3AED" },
  { name: "AWS", desc: "Cloud Platform", color: "#F59E0B" },
  { name: "Terraform", desc: "Infrastructure as Code", color: "#7C3AED" },
  { name: "Ansible", desc: "Config Management", color: "#EF4444" },
  { name: "Grafana", desc: "Dashboards", color: "#F97316" },
  { name: "Prometheus", desc: "Metrics & Alerting", color: "#EF4444" },
  { name: "Linux", desc: "Server Administration", color: "#10B981" },
  { name: "Git", desc: "Version Control", color: "#2563EB" },
];

const SERVICES = [
  { icon: GitBranch, title: "GitHub Actions Automation", slug: "github-actions", grad: "from-blue-600 to-violet-600",
    short: "Automate your entire software delivery lifecycle with production-grade GitHub Actions workflows.",
    overview: "Design and implement robust GitHub Actions workflows that automate testing, building, and deploying on every commit — eliminating manual handoffs and deployment errors.",
    benefits: ["Eliminate manual deployment errors", "Accelerate release cycles", "Enforce code quality automatically", "Reduce time to production"],
    deliverables: ["Complete CI/CD workflow files", "Reusable composite actions", "Environment-specific pipelines", "Secrets management setup", "Documentation"],
    tech: ["GitHub Actions", "YAML", "Docker", "AWS", "Node.js", "Python"],
  },
  { icon: Settings, title: "CI/CD Pipeline Development", slug: "cicd", grad: "from-cyan-500 to-blue-600",
    short: "End-to-end continuous delivery pipelines that ship code safely from commit to production.",
    overview: "Architect and implement complete CI/CD pipelines covering build automation, test orchestration, artifact management, environment promotion, and rollback strategies.",
    benefits: ["Ship faster with confidence", "Reduce deployment risk", "Maintain audit trails", "Enable zero-downtime releases"],
    deliverables: ["Pipeline architecture design", "Build and test stages", "Multi-environment promotion", "Rollback procedures", "Runbooks"],
    tech: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "AWS CodePipeline"],
  },
  { icon: Box, title: "Docker Containerization", slug: "docker", grad: "from-cyan-400 to-blue-500",
    short: "Package applications into portable, reproducible containers that run consistently everywhere.",
    overview: "Containerize your applications with optimized multi-stage Dockerfiles, minimal base images, proper layer caching, and security hardening — from single services to complex multi-container systems.",
    benefits: ["Consistent dev-to-prod environments", "Smaller, faster image builds", "Simplified dependency management", "Easier scaling and portability"],
    deliverables: ["Optimized Dockerfiles", "Docker Compose configurations", "Private registry setup", "Security hardening", "Pipeline integration"],
    tech: ["Docker", "Docker Compose", "ECR", "GitHub Actions", "Linux"],
  },
  { icon: Layers, title: "Kubernetes Orchestration", slug: "kubernetes", grad: "from-violet-600 to-purple-700",
    short: "Orchestrate containers at scale with self-healing, intelligent scheduling, and automated rollouts.",
    overview: "Deploy, manage, and optimize Kubernetes clusters for production workloads — covering provisioning, workload configuration, ingress, autoscaling, RBAC, and operational support.",
    benefits: ["High availability by default", "Automated self-healing", "Horizontal scaling on demand", "Centralized workload management"],
    deliverables: ["Cluster setup and configuration", "Helm charts and manifests", "Ingress and networking", "HPA/VPA autoscaling", "Monitoring integration"],
    tech: ["Kubernetes", "Helm", "EKS", "ArgoCD", "Prometheus", "Grafana"],
  },
  { icon: Cloud, title: "AWS Infrastructure Setup", slug: "aws", grad: "from-amber-500 to-orange-600",
    short: "Design and provision secure, scalable AWS environments aligned with the Well-Architected Framework.",
    overview: "Architect and deploy AWS environments using cloud-native services — networking, compute, storage, identity, security, and cost optimization for startups to enterprise workloads.",
    benefits: ["Secure multi-account setup", "Cost-optimized resources", "High availability architecture", "Compliance-ready environments"],
    deliverables: ["VPC and networking design", "EC2/ECS/EKS compute", "IAM roles and policies", "S3 and RDS configuration", "Cost tagging and budgets"],
    tech: ["AWS", "EC2", "EKS", "RDS", "S3", "IAM", "CloudWatch", "Route 53"],
  },
  { icon: Server, title: "Terraform Infrastructure as Code", slug: "terraform", grad: "from-violet-500 to-indigo-600",
    short: "Manage your entire cloud infrastructure as version-controlled, reusable Terraform modules.",
    overview: "Write modular, DRY Terraform code provisioning cloud resources consistently across environments — with state management, workspace strategy, and CI integration.",
    benefits: ["Reproducible infrastructure", "Version-controlled changes", "Multi-environment parity", "Zero configuration drift"],
    deliverables: ["Terraform module library", "Remote state configuration", "CI-integrated plan/apply", "Environment workspaces", "Full documentation"],
    tech: ["Terraform", "AWS", "GCP", "Azure", "GitHub Actions", "Terragrunt"],
  },
  { icon: Terminal, title: "Ansible Automation", slug: "ansible", grad: "from-red-500 to-rose-600",
    short: "Automate server provisioning, configuration management, and deployments with idempotent playbooks.",
    overview: "Write agentless Ansible playbooks and roles that configure servers, deploy applications, and enforce system state at scale — without proprietary tooling.",
    benefits: ["Agentless configuration management", "Idempotent, repeatable runs", "Multi-host operations", "Reduced manual toil"],
    deliverables: ["Modular playbooks and roles", "Inventory management", "Vault-encrypted secrets", "AWX integration", "Documentation"],
    tech: ["Ansible", "Ansible Vault", "AWX", "Linux", "Python", "YAML"],
  },
  { icon: BarChart2, title: "Grafana Dashboards", slug: "grafana", grad: "from-orange-500 to-amber-500",
    short: "Build beautiful, actionable monitoring dashboards that surface the metrics your team needs.",
    overview: "Design and deploy Grafana dashboards visualizing infrastructure health, application performance, and business KPIs — with alerts, provisioning-as-code, and multi-team access.",
    benefits: ["Real-time infrastructure visibility", "Proactive issue detection", "Executive and ops-level views", "Reproducible dashboard configs"],
    deliverables: ["Custom dashboard designs", "Data source configuration", "Alert rules and channels", "Grafana provisioning code", "User access setup"],
    tech: ["Grafana", "Prometheus", "Loki", "InfluxDB", "CloudWatch", "Elasticsearch"],
  },
  { icon: Activity, title: "Prometheus Monitoring", slug: "prometheus", grad: "from-red-500 to-orange-500",
    short: "Instrument your systems with pull-based Prometheus metrics, exporters, and reliable alerting.",
    overview: "Deploy and configure Prometheus to scrape metrics from infrastructure, containers, and applications — with exporters, PromQL queries, alert rules, and Alertmanager routing.",
    benefits: ["Pull-based metrics at scale", "Powerful PromQL querying", "Reliable alert delivery", "Kubernetes-native monitoring"],
    deliverables: ["Prometheus deployment and config", "Exporters setup", "Recording and alert rules", "Alertmanager routing", "Runbooks"],
    tech: ["Prometheus", "Alertmanager", "Node Exporter", "kube-state-metrics", "Grafana"],
  },
  { icon: Shield, title: "DevOps Consulting", slug: "consulting", grad: "from-emerald-500 to-teal-600",
    short: "Strategic DevOps advisory — assess your current state, close gaps, and build a clear roadmap.",
    overview: "Engage as a strategic advisor to assess DevOps maturity, identify bottlenecks in your delivery pipeline, and build a prioritized roadmap with measurable outcomes.",
    benefits: ["Objective third-party assessment", "Prioritized, actionable roadmap", "Knowledge transfer to your team", "Measurable delivery outcomes"],
    deliverables: ["Current-state assessment", "DevOps maturity scorecard", "Improvement roadmap", "Tool recommendations", "Executive summary"],
    tech: ["CI/CD", "AWS", "Kubernetes", "Terraform", "Monitoring", "Security"],
  },
];

const WHY_ITEMS = [
  { icon: Zap, title: "Faster Releases", desc: "Automated pipelines cut release cycles from days to minutes.", grad: "from-blue-600 to-violet-600" },
  { icon: Shield, title: "Reduced Downtime", desc: "Self-healing infrastructure and proactive monitoring keep systems up.", grad: "from-violet-600 to-purple-700" },
  { icon: Settings, title: "Infrastructure Automation", desc: "Eliminate manual toil with version-controlled automation.", grad: "from-cyan-500 to-blue-600" },
  { icon: Cloud, title: "Cloud Scalability", desc: "Architecture that grows with your users — no rewrites.", grad: "from-emerald-500 to-cyan-500" },
  { icon: Activity, title: "Monitoring & Alerting", desc: "Know about issues before your users do.", grad: "from-orange-500 to-rose-500" },
  { icon: Lock, title: "Security Best Practices", desc: "Least-privilege IAM, secrets management, vulnerability scanning.", grad: "from-red-500 to-rose-600" },
  { icon: DollarSign, title: "Cost Optimization", desc: "Right-sized resources and reserved capacity cut cloud spend.", grad: "from-emerald-500 to-teal-600" },
  { icon: Headphones, title: "Reliable Deployments", desc: "Zero-downtime strategies with automated rollback on failure.", grad: "from-blue-600 to-cyan-500" },
];

const WORKFLOW_STEPS = [
  { label: "Discovery", desc: "Understand your stack, goals, and constraints" },
  { label: "Architecture Design", desc: "Design the right solution for your scale" },
  { label: "Automation", desc: "Build pipelines and infrastructure as code" },
  { label: "Deployment", desc: "Ship to production with zero downtime" },
  { label: "Monitoring", desc: "Full observability from day one" },
  { label: "Optimization", desc: "Continuous improvement and cost tuning" },
];

const CASE_STUDIES = [
  { title: "CI/CD Transformation", client: "FinTech Startup", tag: "CI/CD", color: "#2563EB",
    desc: "Replaced a manual, error-prone release process with a fully automated GitHub Actions pipeline.",
    metrics: [{ label: "Deploy Time", before: "4 hours", after: "8 minutes" }, { label: "Releases/Week", before: "2", after: "14+" }, { label: "Errors", before: "~30%", after: "<1%" }],
  },
  { title: "Cloud Migration", client: "SaaS Platform", tag: "AWS", color: "#7C3AED",
    desc: "Migrated a monolithic on-premise application to AWS EKS with zero downtime and 40% lower infra cost.",
    metrics: [{ label: "Infra Cost", before: "$18k/mo", after: "$10.8k/mo" }, { label: "Availability", before: "97.2%", after: "99.95%" }, { label: "Provisioning", before: "3 days", after: "12 minutes" }],
  },
  { title: "Infrastructure Automation", client: "E-commerce Company", tag: "Terraform", color: "#10B981",
    desc: "Built a complete Terraform module library to manage 120+ AWS resources across 3 environments.",
    metrics: [{ label: "Drift Incidents", before: "12/month", after: "0" }, { label: "Env Setup", before: "8 hours", after: "25 minutes" }, { label: "Engineer Hours", before: "40 hrs/wk", after: "4 hrs/wk" }],
  },
  { title: "Kubernetes Deployment", client: "Data Analytics SaaS", tag: "Kubernetes", color: "#06B6D4",
    desc: "Migrated 22 microservices to EKS with Helm, ArgoCD, and auto-scaling across multiple availability zones.",
    metrics: [{ label: "Scale Time", before: "20 minutes", after: "45 seconds" }, { label: "Incidents/Month", before: "8", after: "1" }, { label: "Team Velocity", before: "Baseline", after: "+60%" }],
  },
];

const TESTIMONIALS = [
  { name: "Sarah Chen", role: "CTO, FinTech Startup", initials: "SC", color: "#2563EB",
    quote: "Our deployment frequency went from twice a week to multiple times per day. The pipelines are rock solid and the team ships with real confidence now." },
  { name: "Marcus Williams", role: "VP Engineering, SaaS Company", initials: "MW", color: "#7C3AED",
    quote: "The Terraform modules reduced infrastructure provisioning from days to under an hour. Exactly the leverage we needed to scale the team without scaling headcount." },
  { name: "Priya Nair", role: "Founder, E-commerce Platform", initials: "PN", color: "#10B981",
    quote: "We had zero monitoring before this engagement. Now we have full visibility into every service with alerts that actually matter. Sleep quality has genuinely improved." },
];

const FAQS = [
  { q: "What does a freelance DevOps Engineer do?",
    a: "A freelance DevOps Engineer designs and implements automation for software delivery and cloud infrastructure — CI/CD pipelines, containerization, cloud architecture, monitoring, and security. I work as an embedded expert without the overhead of a full-time hire." },
  { q: "How can DevOps improve deployment speed?",
    a: "By automating build, test, and deployment workflows with GitHub Actions, Docker, and Kubernetes, manual handoffs and human errors disappear. With proper CI/CD, code changes move from commit to production in minutes, not days." },
  { q: "Do you work with AWS cloud infrastructure?",
    a: "Yes — AWS is my primary cloud platform. I design and deploy VPCs, EC2, EKS, RDS, S3, IAM, and cost management structures, all provisioned with Terraform for repeatability and auditability." },
  { q: "Can you automate our deployment process?",
    a: "Absolutely. I build pipelines that automatically test, build, and deploy on every pull request or merge — with environment promotion, approval gates, and automatic rollback built in." },
  { q: "Do you provide monitoring and alerting solutions?",
    a: "Yes. I implement full observability stacks using Prometheus for metrics, Grafana for visualization, and Alertmanager for alert routing. You get dashboards covering infra health, app performance, and business KPIs." },
  { q: "Can you optimize an existing DevOps pipeline?",
    a: "Yes. Many engagements start with an audit. I identify bottlenecks, flaky tests, slow build stages, and security gaps, then deliver a prioritized roadmap and implement improvements with measurable outcomes." },
];

// ─── Nav ───────────────────────────────────────────────────────────────────────

function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const links: { label: string; p: Page }[] = [
    { label: "Home", p: "home" }, { label: "Services", p: "services" }, { label: "About", p: "about" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-[#0B1120]/90 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => { setPage("home"); setOpen(false); }} className="font-bold text-lg text-white tracking-tight">
          DevOps<span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Pro</span>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, p }) => (
            <button key={p} onClick={() => setPage(p)}
              className={`text-sm font-medium transition-colors ${page === p ? "text-white" : "text-slate-400 hover:text-white"}`}>
              {label}
            </button>
          ))}
          <button onClick={() => setPage("consultation")}
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Book Consultation
          </button>
        </nav>
        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0B1120] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, p }) => (
            <button key={p} onClick={() => { setPage(p); setOpen(false); }}
              className={`text-sm font-medium text-left ${page === p ? "text-white" : "text-slate-400"}`}>{label}</button>
          ))}
          <button onClick={() => { setPage("consultation"); setOpen(false); }}
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-[#060D1A] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-3">
              DevOps<span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Pro</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Helping businesses build reliable, scalable, and automated infrastructure through modern DevOps practices.
            </p>
            <div className="flex gap-4 mt-6">
              {[{ icon: Github, href: "https://github.com" }, { icon: Linkedin, href: "https://linkedin.com" }, { icon: Mail, href: "mailto:hello@devopspro.dev" }].map(({ icon: Icon, href }) => (
                <a key={href} href={href} className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon size={15} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {(["home", "services", "about", "consultation"] as Page[]).map((p) => (
                <li key={p}>
                  <button onClick={() => setPage(p)}
                    className="text-slate-400 text-sm hover:text-white transition-colors capitalize">
                    {p === "consultation" ? "Book Consultation" : p}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:hello@devopspro.dev" className="text-slate-400 text-sm hover:text-white flex items-center gap-2"><Mail size={13} /> hello@devopspro.dev</a></li>
              <li><a href="https://linkedin.com" className="text-slate-400 text-sm hover:text-white flex items-center gap-2"><Linkedin size={13} /> LinkedIn Profile</a></li>
              <li><a href="https://github.com" className="text-slate-400 text-sm hover:text-white flex items-center gap-2"><Github size={13} /> GitHub Profile</a></li>
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

// ─── Home Page ─────────────────────────────────────────────────────────────────

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const [openFaq, setOpenFaq] = useState<string>("");

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1120] pt-20 pb-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Available for Projects</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Build Faster.<br />
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Deploy Smarter.</span><br />
                Scale Confidently.
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                I help startups and growing businesses automate infrastructure, build scalable cloud environments, implement CI/CD pipelines, and improve deployment reliability using modern DevOps practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button onClick={() => setPage("consultation")}
                  className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 justify-center shadow-lg shadow-blue-500/20">
                  Book Free Consultation <ArrowRight size={16} />
                </button>
                <button onClick={() => setPage("services")}
                  className="border border-white/10 text-slate-300 font-semibold px-6 py-3.5 rounded-xl hover:border-white/25 hover:text-white transition-all">
                  Explore Services
                </button>
              </div>
              <div className="flex items-center gap-8">
                {[{ value: "10+", label: "Projects" }, { value: "99.9%", label: "Uptime SLA" }, { value: "5+", label: "Years Exp." }].map(s => (
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

      {/* CI/CD Pipeline Visual */}
      <section className="bg-[#0D1526] border-y border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Automated Delivery Pipeline</p>
          <div className="flex justify-center">
            <PipelineDiagram />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-[#F8FAFC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">Tech Stack</span>
            <h2 className="text-3xl font-bold text-[#0F172A]">Technologies I Work With</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TECH_STACK.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group text-center">
                <div className="w-8 h-8 rounded-lg mx-auto mb-3 flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}>
                  {t.name.charAt(0)}
                </div>
                <div className="font-semibold text-[#1E293B] text-sm group-hover:text-blue-600 transition-colors">{t.name}</div>
                <div className="text-slate-400 text-xs mt-0.5">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">End-to-End DevOps Solutions</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From infrastructure as code to monitoring and observability — every layer of your DevOps stack, built right.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.slug} onClick={() => setPage("services")}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${svc.grad} flex items-center justify-center mb-4`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] mb-2 group-hover:text-blue-600 transition-colors">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.short}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setPage("services")}
              className="border border-blue-200 text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="bg-[#0B1120] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Why Work With Me</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What You Can Expect</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white/5 border border-white/8 rounded-2xl p-5 hover:bg-white/8 transition-colors">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.grad} flex items-center justify-center mb-4`}>
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

      {/* Workflow */}
      <section className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">DevOps Workflow</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto text-white font-extrabold text-lg shadow-lg"
                    style={{ background: `linear-gradient(135deg, #2563EB, #7C3AED)` }}>
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

      {/* Case Studies */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Real Results for Real Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className="rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${cs.color}, ${cs.color}99)` }} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 text-white"
                        style={{ background: cs.color }}>{cs.tag}</span>
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
                        <div className="font-bold text-sm" style={{ color: cs.color }}>{m.after}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0B1120] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}>
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

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
          </div>
          <Accordion.Root type="single" value={openFaq} onValueChange={setOpenFaq} className="space-y-3">
            {FAQS.map((faq, i) => (
              <Accordion.Item key={i} value={`faq-${i}`} className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
                <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left text-[#1E293B] font-semibold text-sm hover:text-blue-600 transition-colors group">
                  {faq.q}
                  <ChevronDown size={15} className="text-slate-400 group-data-[state=open]:rotate-180 transition-transform shrink-0 ml-4" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0B1120] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-20"
            style={{ background: "radial-gradient(ellipse, #2563EB, transparent 70%)" }} />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Book a free consultation and discover how modern DevOps practices can accelerate your business.
          </p>
          <button onClick={() => setPage("consultation")}
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-2xl shadow-blue-500/30">
            Book Free Consultation
          </button>
        </div>
      </section>
    </>
  );
}

// ─── Services Page ─────────────────────────────────────────────────────────────

function ServicesPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <section className="bg-[#0B1120] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">DevOps Services</h1>
          <p className="text-slate-400 text-xl max-w-2xl">
            Comprehensive DevOps solutions designed to automate infrastructure, streamline deployments, and improve system reliability.
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
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.grad} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-3">{svc.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">{svc.overview}</p>
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {svc.tech.map((t) => (
                        <span key={t} className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${svc.grad} text-white`}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => setPage("consultation")}
                    className={`bg-gradient-to-r ${svc.grad} text-white font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg`}>
                    Book Consultation
                  </button>
                </div>
                <div className={`space-y-4 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100">
                    <h3 className="font-semibold text-[#1E293B] text-sm mb-3">Business Benefits</h3>
                    <ul className="space-y-2">
                      {svc.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                          <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100">
                    <h3 className="font-semibold text-[#1E293B] text-sm mb-3">Deliverables</h3>
                    <ul className="space-y-2">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-500">
                          <ArrowRight size={13} className="text-blue-500 shrink-0 mt-0.5" /> {d}
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

// ─── About Page ────────────────────────────────────────────────────────────────

function AboutPage({ setPage }: { setPage: (p: Page) => void }) {
  const timeline = [
    { year: "2019", event: "Started DevOps career, Linux and AWS fundamentals" },
    { year: "2020", event: "First CI/CD pipeline implementations with Jenkins and GitLab CI" },
    { year: "2021", event: "Kubernetes and containerization — EKS production deployments" },
    { year: "2022", event: "Terraform IaC at scale — 100+ AWS resources under version control" },
    { year: "2023", event: "Launched freelance DevOps consulting practice" },
    { year: "2024+", event: "Serving startups and SaaS businesses globally" },
  ];
  const values = [
    { title: "Reliability First", desc: "Systems should be dependable before they're clever." },
    { title: "Automation Over Manual", desc: "If you do it twice, it should be automated." },
    { title: "Transparent Communication", desc: "No black boxes — I explain what I build and why." },
    { title: "Continuous Improvement", desc: "Every engagement leaves your team more capable." },
  ];
  const expertise = ["GitHub Actions", "AWS", "Docker", "Kubernetes", "Terraform", "Ansible", "Grafana", "Prometheus", "Linux Administration", "Infrastructure Automation"];

  return (
    <>
      <section className="bg-[#0B1120] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">About</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Meet Your DevOps Infrastructure Partner</h1>
          <p className="text-slate-400 text-xl max-w-2xl">
            I help startups and businesses build automated, scalable, and reliable cloud infrastructure using industry-leading DevOps tools and best practices.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-3 space-y-8">
            <p className="text-slate-500 text-lg leading-relaxed">
              I am a DevOps Engineer focused on helping businesses build reliable, scalable, and automated infrastructure. My expertise spans cloud platforms, CI/CD pipelines, infrastructure automation, containerization, orchestration, and monitoring.
            </p>
            <p className="text-slate-500 leading-relaxed">
              I work closely with startups, SaaS companies, and growing businesses to improve deployment efficiency, reduce operational overhead, and implement modern DevOps best practices tailored to each team&apos;s context and goals.
            </p>

            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest mb-3 opacity-70">Mission Statement</div>
              <p className="text-lg font-semibold leading-relaxed">
                "To help businesses deploy faster, scale confidently, and operate efficiently through automation and modern cloud infrastructure."
              </p>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="font-bold text-[#0F172A] text-lg mb-6">Experience Timeline</h2>
              <div className="space-y-4">
                {timeline.map((t, i) => (
                  <div key={t.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      {i < timeline.length - 1 && <div className="w-px flex-1 bg-slate-100 my-1" />}
                    </div>
                    <div className="pb-4">
                      <div className="text-xs font-semibold text-blue-600 mb-0.5">{t.year}</div>
                      <div className="text-slate-600 text-sm">{t.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => setPage("consultation")}
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-blue-500/20">
              Start a Project <ArrowRight size={16} />
            </button>
          </div>

          <div className="md:col-span-2 space-y-6">
            {/* Skills */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
              <h2 className="font-bold text-[#0F172A] mb-4">Core Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span key={skill} className="bg-white border border-slate-200 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[{ label: "Projects Delivered", value: "10+" }, { label: "Technologies", value: "20+" }, { label: "Years Experience", value: "5+" }, { label: "Client Satisfaction", value: "100%" }].map((stat) => (
                <div key={stat.label} className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-100 text-center">
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
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

// ─── Consultation Page ─────────────────────────────────────────────────────────

function ConsultationPage() {
  const [form, setForm] = useState({ fullName: "", company: "", email: "", phone: "", projectType: "", budget: "", timeline: "", description: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const topics = ["CI/CD Pipelines", "AWS Infrastructure", "Kubernetes Deployments", "Docker Strategy", "Infrastructure Automation", "Monitoring & Observability", "Cloud Migration", "DevOps Roadmap"];

  return (
    <>
      <section className="bg-[#0B1120] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #06B6D4, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Let&apos;s Discuss Your DevOps Challenges</h1>
          <p className="text-slate-400 text-xl max-w-2xl">Book a free 30-minute consultation — no commitment, no sales pitch.</p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={30} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Consultation Scheduled!</h2>
                <p className="text-slate-500">Thank you for reaching out. I&apos;ll review your details and respond within 24 hours to confirm a time that works.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-5">
                <h2 className="text-xl font-bold text-[#0F172A] mb-2">Your Project Details</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[{ id: "fullName", label: "Full Name", ph: "Jane Smith", req: true }, { id: "company", label: "Company Name", ph: "Acme Corp", req: false }].map((f) => (
                    <div key={f.id}>
                      <label className="block text-sm font-semibold text-[#1E293B] mb-1.5" htmlFor={f.id}>{f.label} {f.req && "*"}</label>
                      <input id={f.id} name={f.id} required={f.req} value={(form as any)[f.id]} onChange={handle} placeholder={f.ph}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]" />
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1E293B] mb-1.5" htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handle} placeholder="jane@acmecorp.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E293B] mb-1.5" htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+1 (555) 000-0000"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1E293B] mb-1.5" htmlFor="projectType">Project Type *</label>
                    <select id="projectType" name="projectType" required value={form.projectType} onChange={handle}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]">
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E293B] mb-1.5" htmlFor="budget">Budget Range</label>
                    <select id="budget" name="budget" value={form.budget} onChange={handle}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]">
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
                  <label className="block text-sm font-semibold text-[#1E293B] mb-1.5" htmlFor="timeline">Project Timeline</label>
                  <select id="timeline" name="timeline" value={form.timeline} onChange={handle}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC]">
                    <option value="">Select timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1month">Within 1 month</option>
                    <option value="3months">Within 3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-1.5" htmlFor="description">Project Description *</label>
                  <textarea id="description" name="description" required rows={5} value={form.description} onChange={handle}
                    placeholder="Describe your infrastructure challenges, current stack, team size, and what you'd like to achieve..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#334155] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 bg-[#F8FAFC] resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-bold text-[#1E293B] mb-4">Contact Directly</h2>
              <ul className="space-y-3">
                <li><a href="mailto:hello@devopspro.dev" className="text-slate-500 text-sm hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail size={14} className="text-blue-500" /> hello@devopspro.dev</a></li>
                <li><a href="tel:+15551234567" className="text-slate-500 text-sm hover:text-blue-600 flex items-center gap-2 transition-colors"><Phone size={14} className="text-blue-500" /> +1 (555) 123-4567</a></li>
                <li><a href="https://linkedin.com" className="text-slate-500 text-sm hover:text-blue-600 flex items-center gap-2 transition-colors"><Linkedin size={14} className="text-blue-500" /> LinkedIn Profile</a></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="opacity-80" />
                <span className="font-semibold text-sm">Free 30-Minute Call</span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                No commitment required. We&apos;ll discuss your challenges and I&apos;ll share my initial recommendations — completely free.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
      <Nav page={page} setPage={navigate} />
      <main className="flex-1">
        {page === "home" && <HomePage setPage={navigate} />}
        {page === "services" && <ServicesPage setPage={navigate} />}
        {page === "about" && <AboutPage setPage={navigate} />}
        {page === "consultation" && <ConsultationPage />}
      </main>
      <Footer setPage={navigate} />
    </div>
  );
}
