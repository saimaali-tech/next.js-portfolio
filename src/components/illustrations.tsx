export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xl"
    >
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

      <rect x="185" y="155" width="150" height="90" rx="16" fill="url(#gradBlue)" opacity="0.9" />
      <text
        x="260"
        y="194"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontFamily="var(--font-inter),sans-serif"
        fontWeight="600"
      >
        AWS Cloud
      </text>
      <text
        x="260"
        y="212"
        textAnchor="middle"
        fill="#BFDBFE"
        fontSize="9"
        fontFamily="var(--font-inter),sans-serif"
      >
        Infrastructure
      </text>
      <rect x="200" y="220" width="120" height="16" rx="4" fill="white" opacity="0.12" />
      <rect x="204" y="224" width="60" height="8" rx="2" fill="#10B981" opacity="0.9" />

      <rect
        x="30"
        y="60"
        width="120"
        height="76"
        rx="12"
        fill="rgba(255,255,255,0.07)"
        stroke="rgba(99,102,241,0.4)"
        strokeWidth="1"
      />
      <text
        x="90"
        y="92"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontFamily="var(--font-inter),sans-serif"
        fontWeight="600"
      >
        CI/CD Pipeline
      </text>
      <text
        x="90"
        y="108"
        textAnchor="middle"
        fill="#94A3B8"
        fontSize="8"
        fontFamily="var(--font-inter),sans-serif"
      >
        GitHub Actions
      </text>
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          cx={58 + i * 20}
          cy="122"
          r="5"
          fill={i < 3 ? "url(#gradCyan)" : "rgba(255,255,255,0.15)"}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <line
          key={i}
          x1={63 + i * 20}
          y1="122"
          x2={73 + i * 20}
          y2="122"
          stroke="#06B6D4"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
      ))}

      <rect
        x="370"
        y="50"
        width="120"
        height="90"
        rx="12"
        fill="rgba(255,255,255,0.07)"
        stroke="rgba(6,182,212,0.4)"
        strokeWidth="1"
      />
      <text
        x="430"
        y="82"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontFamily="var(--font-inter),sans-serif"
        fontWeight="600"
      >
        Kubernetes
      </text>
      <text
        x="430"
        y="97"
        textAnchor="middle"
        fill="#94A3B8"
        fontSize="8"
        fontFamily="var(--font-inter),sans-serif"
      >
        Orchestration
      </text>
      {[
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
      ].map(([col, row], i) => (
        <rect
          key={i}
          x={390 + col * 30}
          y={108 + row * 18}
          width="22"
          height="12"
          rx="3"
          fill={i % 3 === 0 ? "url(#gradCyan)" : "rgba(255,255,255,0.12)"}
        />
      ))}

      <rect
        x="370"
        y="280"
        width="120"
        height="90"
        rx="12"
        fill="rgba(255,255,255,0.07)"
        stroke="rgba(16,185,129,0.4)"
        strokeWidth="1"
      />
      <text
        x="430"
        y="308"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontFamily="var(--font-inter),sans-serif"
        fontWeight="600"
      >
        Monitoring
      </text>
      <text
        x="430"
        y="323"
        textAnchor="middle"
        fill="#94A3B8"
        fontSize="8"
        fontFamily="var(--font-inter),sans-serif"
      >
        Grafana · Prometheus
      </text>
      <polyline
        points="390,355 403,345 416,352 429,338 442,348 455,333 468,340"
        stroke="url(#gradGreen)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      <rect
        x="30"
        y="280"
        width="120"
        height="76"
        rx="12"
        fill="rgba(255,255,255,0.07)"
        stroke="rgba(124,58,237,0.4)"
        strokeWidth="1"
      />
      <text
        x="90"
        y="312"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontFamily="var(--font-inter),sans-serif"
        fontWeight="600"
      >
        Terraform IaC
      </text>
      <text
        x="90"
        y="327"
        textAnchor="middle"
        fill="#94A3B8"
        fontSize="8"
        fontFamily="var(--font-inter),sans-serif"
      >
        Infrastructure as Code
      </text>
      <rect x="46" y="336" width="88" height="8" rx="2" fill="url(#gradBlue)" opacity="0.6" />

      <line
        x1="150"
        y1="98"
        x2="185"
        y2="185"
        stroke="rgba(99,102,241,0.3)"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <line
        x1="370"
        y1="95"
        x2="335"
        y2="185"
        stroke="rgba(6,182,212,0.3)"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <line
        x1="370"
        y1="325"
        x2="335"
        y2="245"
        stroke="rgba(16,185,129,0.3)"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <line
        x1="150"
        y1="318"
        x2="185"
        y2="245"
        stroke="rgba(124,58,237,0.3)"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />

      <rect
        x="208"
        y="90"
        width="104"
        height="30"
        rx="8"
        fill="rgba(16,185,129,0.15)"
        stroke="rgba(16,185,129,0.4)"
        strokeWidth="1"
      />
      <circle cx="222" cy="105" r="4" fill="#10B981" />
      <text
        x="230"
        y="109"
        fill="#10B981"
        fontSize="9"
        fontFamily="var(--font-inter),sans-serif"
        fontWeight="600"
      >
        99.9% Uptime
      </text>

      <rect
        x="208"
        y="300"
        width="104"
        height="30"
        rx="8"
        fill="rgba(6,182,212,0.15)"
        stroke="rgba(6,182,212,0.4)"
        strokeWidth="1"
      />
      <circle cx="222" cy="315" r="4" fill="#06B6D4" />
      <text
        x="230"
        y="319"
        fill="#06B6D4"
        fontSize="9"
        fontFamily="var(--font-inter),sans-serif"
        fontWeight="600"
      >
        Auto-scaled
      </text>
    </svg>
  );
}

export function PipelineDiagram() {
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
              style={{
                background: `linear-gradient(135deg, ${s.color}, ${steps[(i + 1) % steps.length].color})`,
              }}
            >
              {s.icon}
            </div>
            <span className="text-[10px] font-semibold text-[#94A3B8] whitespace-nowrap">
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className="w-8 h-px mx-1"
              style={{
                background: `linear-gradient(90deg, ${s.color}, ${steps[i + 1].color})`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
