import {
  GitBranch,
  Settings,
  Box,
  Layers,
  Cloud,
  Server,
  Terminal,
  BarChart2,
  Activity,
  Shield,
  Zap,
  Lock,
  DollarSign,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export const TECH_STACK = [
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

export type Service = {
  icon: LucideIcon;
  title: string;
  slug: string;
  grad: string;
  short: string;
  overview: string;
  benefits: string[];
  deliverables: string[];
  tech: string[];
};

export const SERVICES: Service[] = [
  {
    icon: GitBranch,
    title: "GitHub Actions Automation",
    slug: "github-actions",
    grad: "from-blue-600 to-violet-600",
    short:
      "Automate your entire software delivery lifecycle with production-grade GitHub Actions workflows.",
    overview:
      "Design and implement robust GitHub Actions workflows that automate testing, building, and deploying on every commit — eliminating manual handoffs and deployment errors.",
    benefits: [
      "Eliminate manual deployment errors",
      "Accelerate release cycles",
      "Enforce code quality automatically",
      "Reduce time to production",
    ],
    deliverables: [
      "Complete CI/CD workflow files",
      "Reusable composite actions",
      "Environment-specific pipelines",
      "Secrets management setup",
      "Documentation",
    ],
    tech: ["GitHub Actions", "YAML", "Docker", "AWS", "Node.js", "Python"],
  },
  {
    icon: Settings,
    title: "CI/CD Pipeline Development",
    slug: "cicd",
    grad: "from-cyan-500 to-blue-600",
    short:
      "End-to-end continuous delivery pipelines that ship code safely from commit to production.",
    overview:
      "Architect and implement complete CI/CD pipelines covering build automation, test orchestration, artifact management, environment promotion, and rollback strategies.",
    benefits: [
      "Ship faster with confidence",
      "Reduce deployment risk",
      "Maintain audit trails",
      "Enable zero-downtime releases",
    ],
    deliverables: [
      "Pipeline architecture design",
      "Build and test stages",
      "Multi-environment promotion",
      "Rollback procedures",
      "Runbooks",
    ],
    tech: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "AWS CodePipeline"],
  },
  {
    icon: Box,
    title: "Docker Containerization",
    slug: "docker",
    grad: "from-cyan-400 to-blue-500",
    short:
      "Package applications into portable, reproducible containers that run consistently everywhere.",
    overview:
      "Containerize your applications with optimized multi-stage Dockerfiles, minimal base images, proper layer caching, and security hardening — from single services to complex multi-container systems.",
    benefits: [
      "Consistent dev-to-prod environments",
      "Smaller, faster image builds",
      "Simplified dependency management",
      "Easier scaling and portability",
    ],
    deliverables: [
      "Optimized Dockerfiles",
      "Docker Compose configurations",
      "Private registry setup",
      "Security hardening",
      "Pipeline integration",
    ],
    tech: ["Docker", "Docker Compose", "ECR", "GitHub Actions", "Linux"],
  },
  {
    icon: Layers,
    title: "Kubernetes Orchestration",
    slug: "kubernetes",
    grad: "from-violet-600 to-purple-700",
    short:
      "Orchestrate containers at scale with self-healing, intelligent scheduling, and automated rollouts.",
    overview:
      "Deploy, manage, and optimize Kubernetes clusters for production workloads — covering provisioning, workload configuration, ingress, autoscaling, RBAC, and operational support.",
    benefits: [
      "High availability by default",
      "Automated self-healing",
      "Horizontal scaling on demand",
      "Centralized workload management",
    ],
    deliverables: [
      "Cluster setup and configuration",
      "Helm charts and manifests",
      "Ingress and networking",
      "HPA/VPA autoscaling",
      "Monitoring integration",
    ],
    tech: ["Kubernetes", "Helm", "EKS", "ArgoCD", "Prometheus", "Grafana"],
  },
  {
    icon: Cloud,
    title: "AWS Infrastructure Setup",
    slug: "aws",
    grad: "from-amber-500 to-orange-600",
    short:
      "Design and provision secure, scalable AWS environments aligned with the Well-Architected Framework.",
    overview:
      "Architect and deploy AWS environments using cloud-native services — networking, compute, storage, identity, security, and cost optimization for startups to enterprise workloads.",
    benefits: [
      "Secure multi-account setup",
      "Cost-optimized resources",
      "High availability architecture",
      "Compliance-ready environments",
    ],
    deliverables: [
      "VPC and networking design",
      "EC2/ECS/EKS compute",
      "IAM roles and policies",
      "S3 and RDS configuration",
      "Cost tagging and budgets",
    ],
    tech: ["AWS", "EC2", "EKS", "RDS", "S3", "IAM", "CloudWatch", "Route 53"],
  },
  {
    icon: Server,
    title: "Terraform Infrastructure as Code",
    slug: "terraform",
    grad: "from-violet-500 to-indigo-600",
    short:
      "Manage your entire cloud infrastructure as version-controlled, reusable Terraform modules.",
    overview:
      "Write modular, DRY Terraform code provisioning cloud resources consistently across environments — with state management, workspace strategy, and CI integration.",
    benefits: [
      "Reproducible infrastructure",
      "Version-controlled changes",
      "Multi-environment parity",
      "Zero configuration drift",
    ],
    deliverables: [
      "Terraform module library",
      "Remote state configuration",
      "CI-integrated plan/apply",
      "Environment workspaces",
      "Full documentation",
    ],
    tech: ["Terraform", "AWS", "GCP", "Azure", "GitHub Actions", "Terragrunt"],
  },
  {
    icon: Terminal,
    title: "Ansible Automation",
    slug: "ansible",
    grad: "from-red-500 to-rose-600",
    short:
      "Automate server provisioning, configuration management, and deployments with idempotent playbooks.",
    overview:
      "Write agentless Ansible playbooks and roles that configure servers, deploy applications, and enforce system state at scale — without proprietary tooling.",
    benefits: [
      "Agentless configuration management",
      "Idempotent, repeatable runs",
      "Multi-host operations",
      "Reduced manual toil",
    ],
    deliverables: [
      "Modular playbooks and roles",
      "Inventory management",
      "Vault-encrypted secrets",
      "AWX integration",
      "Documentation",
    ],
    tech: ["Ansible", "Ansible Vault", "AWX", "Linux", "Python", "YAML"],
  },
  {
    icon: BarChart2,
    title: "Grafana Dashboards",
    slug: "grafana",
    grad: "from-orange-500 to-amber-500",
    short:
      "Build beautiful, actionable monitoring dashboards that surface the metrics your team needs.",
    overview:
      "Design and deploy Grafana dashboards visualizing infrastructure health, application performance, and business KPIs — with alerts, provisioning-as-code, and multi-team access.",
    benefits: [
      "Real-time infrastructure visibility",
      "Proactive issue detection",
      "Executive and ops-level views",
      "Reproducible dashboard configs",
    ],
    deliverables: [
      "Custom dashboard designs",
      "Data source configuration",
      "Alert rules and channels",
      "Grafana provisioning code",
      "User access setup",
    ],
    tech: ["Grafana", "Prometheus", "Loki", "InfluxDB", "CloudWatch", "Elasticsearch"],
  },
  {
    icon: Activity,
    title: "Prometheus Monitoring",
    slug: "prometheus",
    grad: "from-red-500 to-orange-500",
    short:
      "Instrument your systems with pull-based Prometheus metrics, exporters, and reliable alerting.",
    overview:
      "Deploy and configure Prometheus to scrape metrics from infrastructure, containers, and applications — with exporters, PromQL queries, alert rules, and Alertmanager routing.",
    benefits: [
      "Pull-based metrics at scale",
      "Powerful PromQL querying",
      "Reliable alert delivery",
      "Kubernetes-native monitoring",
    ],
    deliverables: [
      "Prometheus deployment and config",
      "Exporters setup",
      "Recording and alert rules",
      "Alertmanager routing",
      "Runbooks",
    ],
    tech: [
      "Prometheus",
      "Alertmanager",
      "Node Exporter",
      "kube-state-metrics",
      "Grafana",
    ],
  },
  {
    icon: Shield,
    title: "DevOps Consulting",
    slug: "consulting",
    grad: "from-emerald-500 to-teal-600",
    short:
      "Strategic DevOps advisory — assess your current state, close gaps, and build a clear roadmap.",
    overview:
      "Engage as a strategic advisor to assess DevOps maturity, identify bottlenecks in your delivery pipeline, and build a prioritized roadmap with measurable outcomes.",
    benefits: [
      "Objective third-party assessment",
      "Prioritized, actionable roadmap",
      "Knowledge transfer to your team",
      "Measurable delivery outcomes",
    ],
    deliverables: [
      "Current-state assessment",
      "DevOps maturity scorecard",
      "Improvement roadmap",
      "Tool recommendations",
      "Executive summary",
    ],
    tech: ["CI/CD", "AWS", "Kubernetes", "Terraform", "Monitoring", "Security"],
  },
];

export const WHY_ITEMS = [
  {
    icon: Zap,
    title: "Faster Releases",
    desc: "Automated pipelines cut release cycles from days to minutes.",
    grad: "from-blue-600 to-violet-600",
  },
  {
    icon: Shield,
    title: "Reduced Downtime",
    desc: "Self-healing infrastructure and proactive monitoring keep systems up.",
    grad: "from-violet-600 to-purple-700",
  },
  {
    icon: Settings,
    title: "Infrastructure Automation",
    desc: "Eliminate manual toil with version-controlled automation.",
    grad: "from-cyan-500 to-blue-600",
  },
  {
    icon: Cloud,
    title: "Cloud Scalability",
    desc: "Architecture that grows with your users — no rewrites.",
    grad: "from-emerald-500 to-cyan-500",
  },
  {
    icon: Activity,
    title: "Monitoring & Alerting",
    desc: "Know about issues before your users do.",
    grad: "from-orange-500 to-rose-500",
  },
  {
    icon: Lock,
    title: "Security Best Practices",
    desc: "Least-privilege IAM, secrets management, vulnerability scanning.",
    grad: "from-red-500 to-rose-600",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    desc: "Right-sized resources and reserved capacity cut cloud spend.",
    grad: "from-emerald-500 to-teal-600",
  },
  {
    icon: Headphones,
    title: "Reliable Deployments",
    desc: "Zero-downtime strategies with automated rollback on failure.",
    grad: "from-blue-600 to-cyan-500",
  },
];

export const WORKFLOW_STEPS = [
  { label: "Discovery", desc: "Understand your stack, goals, and constraints" },
  { label: "Architecture Design", desc: "Design the right solution for your scale" },
  { label: "Automation", desc: "Build pipelines and infrastructure as code" },
  { label: "Deployment", desc: "Ship to production with zero downtime" },
  { label: "Monitoring", desc: "Full observability from day one" },
  { label: "Optimization", desc: "Continuous improvement and cost tuning" },
];

export const CASE_STUDIES = [
  {
    title: "CI/CD Transformation",
    client: "FinTech Startup",
    tag: "CI/CD",
    color: "#2563EB",
    desc: "Replaced a manual, error-prone release process with a fully automated GitHub Actions pipeline.",
    metrics: [
      { label: "Deploy Time", before: "4 hours", after: "8 minutes" },
      { label: "Releases/Week", before: "2", after: "14+" },
      { label: "Errors", before: "~30%", after: "<1%" },
    ],
  },
  {
    title: "Cloud Migration",
    client: "SaaS Platform",
    tag: "AWS",
    color: "#7C3AED",
    desc: "Migrated a monolithic on-premise application to AWS EKS with zero downtime and 40% lower infra cost.",
    metrics: [
      { label: "Infra Cost", before: "$18k/mo", after: "$10.8k/mo" },
      { label: "Availability", before: "97.2%", after: "99.95%" },
      { label: "Provisioning", before: "3 days", after: "12 minutes" },
    ],
  },
  {
    title: "Infrastructure Automation",
    client: "E-commerce Company",
    tag: "Terraform",
    color: "#10B981",
    desc: "Built a complete Terraform module library to manage 120+ AWS resources across 3 environments.",
    metrics: [
      { label: "Drift Incidents", before: "12/month", after: "0" },
      { label: "Env Setup", before: "8 hours", after: "25 minutes" },
      { label: "Engineer Hours", before: "40 hrs/wk", after: "4 hrs/wk" },
    ],
  },
  {
    title: "Kubernetes Deployment",
    client: "Data Analytics SaaS",
    tag: "Kubernetes",
    color: "#06B6D4",
    desc: "Migrated 22 microservices to EKS with Helm, ArgoCD, and auto-scaling across multiple availability zones.",
    metrics: [
      { label: "Scale Time", before: "20 minutes", after: "45 seconds" },
      { label: "Incidents/Month", before: "8", after: "1" },
      { label: "Team Velocity", before: "Baseline", after: "+60%" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Jons_11",
    initials: "J",
    role: "South Africa",
    quote:
      "Saima was a fantastic partner to work with! Their response time was quick, and they were willing to go above and beyond to make sure my task was completed successfully. I'm looking forward to working with them again.",
    color: "#2563EB",
  },
  {
    name: "diesltek710",
    initials: "D",
    role: "Repeat Client • United States",
    quote:
      "Amazing work as always 🤗",
    color: "#7C3AED",
  },
  {
    name: "diesltek710",
    initials: "D",
    role: "Repeat Client • United States",
    quote:
      "Great quick work! Looking forward to doing future work with her 💪",
    color: "#06B6D4",
  },
];

export const FAQS = [
  {
    q: "What does a freelance DevOps Engineer do?",
    a: "A freelance DevOps Engineer designs and implements automation for software delivery and cloud infrastructure — CI/CD pipelines, containerization, cloud architecture, monitoring, and security. I work as an embedded expert without the overhead of a full-time hire.",
  },
  {
    q: "How can DevOps improve deployment speed?",
    a: "By automating build, test, and deployment workflows with GitHub Actions, Docker, and Kubernetes, manual handoffs and human errors disappear. With proper CI/CD, code changes move from commit to production in minutes, not days.",
  },
  {
    q: "Do you work with AWS cloud infrastructure?",
    a: "Yes — AWS is my primary cloud platform. I design and deploy VPCs, EC2, EKS, RDS, S3, IAM, and cost management structures, all provisioned with Terraform for repeatability and auditability.",
  },
  {
    q: "Can you automate our deployment process?",
    a: "Absolutely. I build pipelines that automatically test, build, and deploy on every pull request or merge — with environment promotion, approval gates, and automatic rollback built in.",
  },
  {
    q: "Do you provide monitoring and alerting solutions?",
    a: "Yes. I implement full observability stacks using Prometheus for metrics, Grafana for visualization, and Alertmanager for alert routing. You get dashboards covering infra health, app performance, and business KPIs.",
  },
  {
    q: "Can you optimize an existing DevOps pipeline?",
    a: "Yes. Many engagements start with an audit. I identify bottlenecks, flaky tests, slow build stages, and security gaps, then deliver a prioritized roadmap and implement improvements with measurable outcomes.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
] as const;
