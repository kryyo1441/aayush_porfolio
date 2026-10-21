export type Shot = {
  src: string
  alt: string
  width: number
  height: number
}

export type Project = {
  slug: string
  name: string
  year: string
  tag?: string
  summary: string
  details: string[]
  stack: string[]
  repo: string
  live?: string
  shots: Shot[]
}

export type Role = {
  period: string
  title: string
  company: string
  place: string
  note: string
}

const gh = (repo: string) => `https://github.com/kryyo1441/${repo}`

export const profile = {
  name: "Aayush Nair",
  handle: "kryyo1441",
  role: "full stack developer",
  location: "Thane, India",
  email: "aayushnair321@gmail.com",
  github: "https://github.com/kryyo1441",
  linkedin: "https://www.linkedin.com/in/aayushnair",
}

export const projects: Project[] = [
  {
    slug: "aether-vault",
    name: "aether-vault",
    year: "2026",
    tag: "solo",
    summary: "Student elections where the vote is private and the count is publicly checkable.",
    details: [
      "Voters get an anonymous credential through blind issuance (RFC 9497 POPRF over ristretto255), so the server never learns which credential belongs to whom.",
      "Each ballot carries a Chaum-Pedersen proof generated in the browser. One vote per person is enforced by a unique index on the nullifier in Postgres, not by app code.",
      "Ballots go into a hash-chained ledger with a Merkle root that's anchored on Sepolia. A standalone script with zero imports from the app rebuilds the root from the public API and checks it against the chain.",
    ],
    stack: ["next.js", "postgres", "prisma", "@noble/curves", "solidity"],
    repo: gh("aether-vault"),
    live: "https://aether-vault-pi.vercel.app",
    shots: [
      {
        src: "/projects/aether-vault-ballot.gif",
        alt: "Casting a ballot end to end: one-time code login, credential issuance, proof generation, receipt",
        width: 854,
        height: 480,
      },
    ],
  },
  {
    slug: "cascade-reserve",
    name: "cascade-reserve",
    year: "2026",
    summary: "A tiered DeFi credit protocol with a repo market on top.",
    details: [
      "Capital pools across ERC-4626 vaults into senior (L1) and junior (L2) notes. Juniors absorb losses first, and new vaults start at zero weight and earn trust over an observation window.",
      "L1 notes can be posted as repo collateral. The clearing rate across real fills becomes the Reserve Rate, a transaction-based benchmark.",
      "Six verified contracts on Sepolia with a real Aave V3 integration, a deliberately drained vault to exercise the loss waterfall, and 36 unit, fuzz and invariant tests.",
    ],
    stack: ["solidity", "foundry", "aave v3", "next.js"],
    repo: gh("cascade-reserve"),
    shots: [
      {
        src: "/projects/cascade-reserve-dashboard.jpg",
        alt: "Read-only dashboard showing L1/L2 note balances, pool composition, vaults and the repo market",
        width: 1568,
        height: 775,
      },
    ],
  },
  {
    slug: "mailshield",
    name: "mailshield",
    year: "2026",
    tag: "team",
    summary: "Passive TLS posture assessment for SMTP, IMAP and POP3, straight from a pcap.",
    details: [
      "Reassembles TCP streams, walks TLS handshakes by hand and fingerprints them with JA3/JA3S. Flags STARTTLS stripping and cleartext credentials, with the password redacted and the byte offset cited.",
      "The rules engine and the ML side are kept apart on purpose. Verdicts are deterministic and cite NIST SP 800-52r2; an IsolationForest only flags sessions that look unlike the rest of the capture.",
    ],
    stack: ["python", "fastapi", "scikit-learn", "next.js", "shadcn/ui"],
    repo: gh("mailshield"),
    shots: [
      {
        src: "/projects/mailshield-scan.png",
        alt: "Scan overview with session counts, findings by severity and a per-session triage table",
        width: 1917,
        height: 991,
      },
      {
        src: "/projects/mailshield-upload.png",
        alt: "Upload screen asking for a .pcap file",
        width: 1911,
        height: 992,
      },
    ],
  },
  {
    slug: "vasptrace",
    name: "vasptrace",
    year: "2026",
    tag: "team",
    summary: "Traces a suspect wallet to the nearest exchange that can actually be served a legal request.",
    details: [
      "Live tracing over Ethereum, Bitcoin and Tron using public explorer APIs, matched against a seeded registry of labelled addresses and VASPs.",
      "Ranks exchanges by legal actionability with the arithmetic shown, flags peel chains and fan-out patterns, and exports the persisted trace as a PDF report.",
      "n8n sits beside the pipeline as an optional observer. Every trace completes and is saved before n8n is notified, so it can never block a case.",
    ],
    stack: ["next.js", "prisma", "react-force-graph", "n8n"],
    repo: gh("vasptrace"),
    shots: [
      {
        src: "/projects/vasptrace-graph.png",
        alt: "Case page with a trace graph of 60 addresses and typology flags for fan-out and peel chain",
        width: 1917,
        height: 948,
      },
    ],
  },
]

export const otherWork = [
  {
    name: "meshsearch",
    note: "Private web search for AI agents, shipped as an MCP server with x402 payments. Team project.",
  },
  {
    name: "passit",
    note: "Remote co-op game streaming, written in Go. In progress.",
  },
]

export const roles: Role[] = [
  {
    period: "jul 2025 - aug 2025",
    title: "Full Stack Developer Intern",
    company: "Xangars",
    place: "Vashi",
    note: "Shipped features across the frontend and backend of a production codebase. Designed schemas and REST APIs and wired them into the UI.",
  },
  {
    period: "jun 2023 - jul 2023",
    title: "Web Developer Intern",
    company: "Devsongo",
    place: "Seawoods",
    note: "Built responsive pages and reusable components for client sites, and cleaned up layouts and assets to make them faster.",
  },
]

export const education = [
  { period: "2025 - now", what: "B.Tech, Information Technology", where: "Pillai College of Engineering, Panvel" },
  { period: "2022 - 2024", what: "Diploma, AI & Machine Learning", where: "Agnel Polytechnic, Vashi" },
]

export const stack = {
  languages: ["typescript", "go", "solidity", "python", "sql"],
  web: ["next.js", "react", "node", "tailwind"],
  data: ["postgres", "prisma"],
  crypto: ["nizk", "foundry", "erc-4626"],
}
