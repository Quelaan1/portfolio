export const resumeData = {
  personalInfo: {
    name: "Tilak Kumar",
    role: "Senior Software Engineer",
    tagline: "The Digital Architect",
    location: "Bangalore, India",
    coordinates: "12.9716° N, 77.5946° E",
    email: "mailtotilak@icloud.com",
    phone: "+91-8660312110",
    github: "https://github.com/Quelaan1",
    linkedin: "https://linkedin.com/in/tilakkumarg",
    summary:
      "Engineering high-performance distributed systems and machine learning pipelines with a focus on scale, security, and computational efficiency.",
  },
  stats: {
    batchInserts: "100K+",
    efficiencyGain: "40%",
    productionSystems: "3",
    backendTechnologies: "15+",
    yearsEngineering: "3+",
  },
  skills: {
    backend: [
      "Python",
      "Node.js (TypeScript)",
      "GoLang",
      "PostgreSQL",
      "ClickHouse",
      "StarRocks",
      "MongoDB",
      "Neo4j",
      "Redis",
      "DragonflyDB",
      "Kafka",
      "RabbitMQ",
      "REST",
      "gRPC",
      "WebSocket",
    ],
    frontend: [
      "TypeScript",
      "Jest",
      "TailwindCSS",
      "Redux Toolkit",
      "React Native",
      "Next.js",
      "React.js",
      "Figma",
    ],
    infrastructure: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "FluxCD",
      "Trivy",
      "GCP",
      "AWS",
      "Cloudflare",
      "SentenceTransformers",
      "Pinecone",
    ],
  },
  experience: [
    {
      company: "Avacend Inc",
      role: "Senior Software Engineer",
      subtitle: "Contract",
      period: "Dec 2024 - Present",
      periodShort: "2024 — Present",
      location: "Remote",
      tags: ["CLICKHOUSE", "GPT-4O", "ML PIPELINES"],
      sections: [
        {
          title: "Data Engineering at Scale",
          description:
            "Architecting high-throughput analytics engines using ClickHouse. Focused on real-time data ingestion and processing for large-scale enterprise monitoring.",
          stat: { value: "100K+", label: "batch inserts/sec" },
        },
        {
          title: "LLM & Intelligence",
          description:
            "Pioneered a proprietary text-to-SQL engine leveraging GPT-4o, enabling non-technical stakeholders to query multi-petabyte datasets via natural language.",
          stack: [
            "Distributed ML Pipelines",
            "OpenAI API Optimization",
            "Real-time Query Translation",
          ],
        },
      ],
      description: [
        "Built Python data pipelines with OAuth2-authenticated WorxHub API integration, automatic token refresh, and three-tier extraction strategy for incremental data synchronization",
        "Designed ClickHouse analytics schema with ReplacingMergeTree engine, 100K-row batch inserts across 8 parallel threads with exponential backoff retry logic",
        "Implemented text-to-SQL generation pipeline using GPT-4o converting natural language queries to ClickHouse SQL, with AI-powered result interpretation",
        "Built ML pipeline using SentenceTransformer embeddings, HDBSCAN clustering, and UMAP dimensionality reduction with Pinecone vector database integration",
        "Developed 4 production dashboards with 10+ KPIs including SLA compliance tracking and DragonflyDB caching with extraction-date-aware invalidation",
        "Architected multi-tenant FastAPI backend with three-tier RBAC, JWT authentication, and async ClickHouse operations",
      ],
    },
    {
      company: "Constient Global Solutions",
      role: "Founding Engineer",
      subtitle: "Senior Software Engineer",
      period: "Nov 2022 - Dec 2024",
      periodShort: "2022 — 2024",
      location: "",
      tags: ["GOLANG", "GRPC", "DISTRIBUTED SYSTEMS"],
      sections: [
        {
          title: "Core Infrastructure Design",
          description:
            "As a founding engineer, spearheaded the transition from monolithic architecture to high-performance GoLang microservices. Developed a custom distributed log management system processing millions of events daily.",
        },
      ],
      featureGrid: [
        { icon: "GitBranch", label: "gRPC Layers" },
        { icon: "Terminal", label: "Log Orchestration" },
        { icon: "Server", label: "Microservices" },
      ],
      description: [
        "Founding engineer of the startup project; designed and implemented scalable REST API backend microservices using GoLang",
        "Architected a distributed log management system using StarRocks DB and Kafka, improving troubleshooting efficiency by 40%",
        "Implemented high-performance gRPC communication protocols between services using Python and GoLang",
        "Created SDKs and integrated OpenAI APIs for advanced AI-driven backend features",
        "Managed deployment infrastructure using Docker and Kubernetes for microservices architecture",
        "Optimized database performance across PostgreSQL, ClickHouse, and StarRocks implementations",
        "Architected responsive front-end for the log management system using Next.js and TailwindCSS",
        "Established frontend testing practices using Jest, achieving 90% test coverage",
      ],
    },
  ],
  projects: [
    {
      title: "Amour - High-Trust Dating App",
      slug: "amour",
      type: "Flagship System",
      image: "/images/amour-showcase.jpg",
      icon: "/images/amour-icon.png",
      tech: [
        "React Native",
        "NestJS",
        "TypeScript",
        "gRPC",
        "Prisma",
        "RabbitMQ",
        "Redis",
        "Socket.io",
        "Kubernetes",
      ],
      summary:
        "A highly secure, microservices-based social infrastructure designed for ultra-low latency and verifiable user trust. Built to handle million-scale concurrent connections with gRPC efficiency.",
      highlights: [
        {
          label: "Microservices",
          detail:
            "16 gRPC proto services with hexagonal architecture across 68+ NestJS services",
        },
        {
          label: "Database",
          detail:
            "68-model Prisma schema with 141 BTREE indexes and denormalized chat caching for 50x faster rendering",
        },
        {
          label: "Auth",
          detail:
            "Dual strategy — GatewayHelper (10-30x faster) + SuperTokens with AES-256-GCM encryption",
        },
        {
          label: "Notifications",
          detail:
            "4-tier priority queuing with presence-aware routing and circuit breaker pattern across 16 RabbitMQ exchanges",
        },
        {
          label: "Real-time",
          detail:
            "Horizontally-scalable WebSocket gateway with Redis pub/sub and Agora RTM messaging",
        },
        {
          label: "DevOps",
          detail:
            "FluxCD GitOps pipeline with multi-arch Docker builds, Kubernetes rolling updates, and Trivy scanning",
        },
      ],
      sidebar: {
        title: "NestJS Microservices",
        description:
          "Modular architecture utilizing independent services for Auth, Matching, and Messaging, orchestrated via containerization for elastic scaling.",
      },
      detailCards: [
        { label: "Transport", value: "gRPC Protocol" },
        { label: "Queueing", value: "4-Tier Priority" },
      ],
      link: "#",
    },
    {
      title: "Distributed Log Management",
      slug: "log-management",
      type: "Production System",
      tech: ["StarRocks", "Kafka", "Kubernetes"],
      summary:
        "High-volume telemetry ingestion system utilizing StarRocks for real-time analytics and Kafka as the resilient message backbone.",
      stat: { value: "40%", label: "Efficiency Gain" },
      link: "#",
    },
    {
      title: "ML Pattern Analysis",
      slug: "ml-analysis",
      type: "Production System",
      tech: ["PyTorch", "Pinecone", "FastAPI"],
      summary:
        "Neural search engine leveraging SentenceTransformers for semantic embedding and Pinecone for high-dimensional vector storage.",
      link: "#",
    },
  ],
  education: {
    institution: "Dayananda Sagar Institution",
    degree: "Diploma in Computer Science",
    description:
      "Focused on Systems Architecture and Computational Logic. Graduated with high honors in Core Programming.",
  },
};
