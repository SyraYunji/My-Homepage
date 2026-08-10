export const PROJECT_CATEGORIES = {
  RESEARCH: "Research",
  ROBOTICS: "Physical AI & Robotics",
  MACHINE_LEARNING: "AI & Machine Learning",
  SOFTWARE: "Software & AI",
  LEADERSHIP: "Leadership & Strategy",
};

export const projects = [
  {
    id: "kim-lab",
    title: "Undergraduate Research — Physical AI Lab",
    subtitle: "Prof. Yuseong Kim, Sungkyunkwan University",
    description:
      "Exploring embodied intelligence and robotics systems at the intersection of perception and physical interaction.",
    date: "2025 — Present",
    category: PROJECT_CATEGORIES.RESEARCH,
    tags: ["Robotics", "Physical AI", "Research"],
    link: "/project/kim-lab",
    thumbnail: null,
    featured: true,
    authors: ["Yunji Lee"],
    badge: "Ongoing",
    detail: {
      role: "Undergraduate Researcher",
      period: "2025 — Present",
      team: "Physical AI Lab, Sungkyunkwan University",
      overview:
        "Undergraduate researcher in Prof. Yuseong Kim's lab, focusing on robotics and Physical AI — building systems where perception, reasoning, and physical embodiment interact.",
      responsibilities: [
        "Conduct literature review on embodied intelligence and robot perception",
        "Support hardware/software integration for lab robotics experiments",
        "Participate in research discussions on Physical AI system design",
        "Bridge humanities-trained analytical thinking with engineering implementation",
      ],
      outcomes: [
        "Ongoing research in Physical AI and robotics",
        "Hands-on experience with lab research workflow and experimentation",
      ],
      images: [],
    },
  },
  {
    id: "rise-living-lab",
    title: "AI Expansion Living Lab",
    subtitle: "SKKU Rise × LX Korea × Toyota",
    description:
      "International collaboration analyzing Toyota innovation cases to design AI solutions for urban challenges in Seoul.",
    date: "2024",
    category: PROJECT_CATEGORIES.RESEARCH,
    tags: ["Python", "AI/ML", "Data Analysis"],
    link: "/project/rise-living-lab",
    thumbnail: "/images/main.jpg",
    authors: ["Yunji Lee"],
    detail: {
      role: "Research Developer",
      period: "2024",
      team: "SKKU Rise Program",
      overview:
        "Participated in an international Living Lab project with LX Korea and Toyota, translating field observations from Toyota's innovation ecosystem into AI-driven urban solution proposals for Seoul.",
      responsibilities: [
        "Analyzed Toyota enterprise visit insights and structured findings into research data",
        "Collaborated with LX Korea on urban AI solution design",
        "Conducted data analysis for Seoul urban challenge proposals",
        "Managed cross-institutional communication across international partners",
      ],
      outcomes: [
        "Delivered AI urban solution research based on Toyota case studies",
        "Gained international collaboration and field research experience",
      ],
      images: [],
    },
  },
  {
    id: "sw-agent-action",
    title: "AI Agent Next-Action Prediction",
    subtitle:
      "SW중심대학 디지털 경진대회 — Macro-F1 0.7923049787, 31st of 269",
    description:
      "Group-weighted residual ensemble of ExtraTrees, a GBDT meta-stack, RoBERTa, and symbolic rules, deployed under a 10-minute offline inference budget.",
    date: "2026.07",
    category: PROJECT_CATEGORIES.MACHINE_LEARNING,
    tags: ["RoBERTa", "Ensemble", "scikit-learn", "Macro-F1"],
    link: "/project/sw-agent-action",
    thumbnail: null,
    featured: true,
    authors: ["Yunji Lee", "4-member team"],
    badge: "31 / 269",
    detail: {
      role: "Ensemble & Submission Strategy",
      period: "2026.07",
      team: "4 members",
      overview:
        "Predicted the next action of an AI coding agent across 14 classes from conversation history and workspace state, finishing 31st of 269 with a final Macro-F1 of 0.7923049787.",
      responsibilities: [
        "Designed class-group-specific encoder weighting for the final ensemble",
        "Ran nested session-grouped validation as the gate for every submission",
        "Made the final Explore 0.48 submission call that produced the winning score",
      ],
      outcomes: [
        "Public (= Private) Macro-F1 0.7923049787, 31st of 269 participants",
        "+0.00165 improvement over three days without a single wasted submission slot",
      ],
      images: [],
    },
  },
  {
    id: "kurtaincall",
    title: "KurtainCall",
    subtitle: "Context-aware wearable glove for personalized place recommendation",
    description:
      "Wearable IoT glove sensing user state to recommend tailored venues through an integrated platform.",
    date: "2025",
    category: PROJECT_CATEGORIES.ROBOTICS,
    tags: ["ESP32", "Arduino", "C++", "IoT"],
    link: "/project/kurtaincall",
    thumbnail: "/images/hardware1.jpg",
    featured: true,
    authors: ["Yunji Lee"],
    detail: {
      role: "Hardware Developer",
      period: "2025",
      team: "SIOR Robotics Club",
      overview:
        "Developed a wearable IoT glove that reads user context and recommends personalized places. Built the embedded sensing and communication stack from Arduino/ESP32 hardware up to platform integration.",
      responsibilities: [
        "Designed and wired Arduino/ESP32 circuits with environmental and motion sensors",
        "Implemented C++ firmware for real-time sensor data collection",
        "Built WiFi/Bluetooth connectivity for mobile platform integration",
        "Soldered components and debugged hardware-software integration issues",
      ],
      outcomes: [
        "Functional wearable prototype with context-aware recommendation pipeline",
        "First end-to-end hardware project from circuit design to embedded control",
      ],
      images: [
        { src: "/images/hardware1.jpg", caption: "Hardware assembly" },
        { src: "/images/hardware2.jpg", caption: "Circuit design" },
        { src: "/images/hardware3.jpg", caption: "Control system" },
      ],
    },
  },
  {
    id: "hanium",
    title: "Ala — Sleep Companion Robot",
    subtitle: "AI-powered sleep robot with Flutter mobile integration",
    description:
      "IoT sleep robot controlling LED, speaker, and voice interaction via a Flutter app. Apple beta test completed.",
    date: "2025",
    category: PROJECT_CATEGORIES.ROBOTICS,
    tags: ["Flutter", "IoT", "LLM", "Hardware"],
    link: "/project/hanium",
    thumbnail: "/sleep_report1.png",
    featured: true,
    authors: ["Yunji Lee"],
    badge: "Beta Released",
    github: "https://github.com/Ko-o-ala/NewFrontend",
    detail: {
      role: "Sole Frontend Developer",
      period: "2025.03 — 2025.10",
      team: "Kooala (Hanium Dream-up)",
      overview:
        "Built the complete Flutter mobile app for 'Ala', an IoT sleep companion robot. Connected LLM-driven sleep analysis, real-time robot dialogue, and hardware control (LED, speaker, voice) into one user-facing product.",
      responsibilities: [
        "Developed the entire Flutter frontend solo from scratch in one week of intensive learning",
        "Integrated LLM-based sleep pattern analysis and personalized insights",
        "Built real-time dialogue interface between user and sleep robot 'Ala'",
        "Implemented IoT control for LED, speaker, and voice hardware modules",
        "Completed Apple beta test distribution",
      ],
      outcomes: [
        "Apple beta test successfully released",
        "End-to-end mobile + IoT robot integration delivered as sole frontend developer",
      ],
      images: [
        { src: "/sleep_report1.png", caption: "Sleep analysis report" },
        { src: "/sleep_speech1.png", caption: "Dialogue with Ala" },
        { src: "/images/sleep_sound1.png", caption: "Sleep sound recommendations" },
        { src: "/sleep_report2.png", caption: "Monthly sleep calendar" },
      ],
    },
  },
  {
    id: "co-deep",
    title: "Co-Deep Learning Project",
    subtitle: "AI-driven political orientation analysis platform",
    description:
      "React-based platform delivering personalized political information through data analysis and visualization.",
    date: "2025",
    category: PROJECT_CATEGORIES.SOFTWARE,
    tags: ["React.js", "Next.js", "Python"],
    link: "/project/co-deep",
    thumbnail: "/images/main-page.png",
    authors: ["Yunji Lee", "Co-Deep Team"],
    badge: "Grand Prize",
    github: "https://github.com/Co-Deep-Project/Backend.git",
    detail: {
      role: "Frontend Developer",
      period: "2024.09 — 2025.01",
      team: "Co-Deep Project",
      overview:
        "Developed PoliTracker, a political tracking platform that analyzes user orientation and delivers personalized political information through data visualization — awarded Grand Prize at SKKU.",
      responsibilities: [
        "Built React.js frontend for political orientation test and results",
        "Implemented regional politician tracking and news visualization pages",
        "Collaborated on data pipeline integration with backend team",
        "Designed user-facing data visualizations for political information",
      ],
      outcomes: [
        "Grand Prize, Co-Deep Learning Project (SKKU Center for Teaching and Learning)",
        "Delivered production-ready political information platform in 5 months from first learning to code",
      ],
      images: [
        { src: "/images/main-page.png", caption: "Main platform" },
        { src: "/images/result-screen.png", caption: "Orientation test results" },
        { src: "/images/district.png", caption: "District tracking" },
      ],
    },
  },
  {
    id: "re-local",
    title: "Re-local",
    subtitle: "Multilingual platform breaking language barriers in theater",
    description:
      "STT → translation → TTS pipeline for Hyehwa small-theater audiences. Led full-stack development and team onboarding.",
    date: "2025",
    category: PROJECT_CATEGORIES.SOFTWARE,
    tags: ["React.js", "Node.js", "MongoDB", "STT/TTS"],
    link: "/project/re-local",
    thumbnail: "/relocal1.png",
    authors: ["Yunji Lee"],
    github: "https://github.com/Re-Local",
    detail: {
      role: "Team Lead & Full-Stack Developer",
      period: "2025",
      team: "3 members (Likelion SKKU)",
      overview:
        "Led development of a multilingual theater platform for foreign audiences at Hyehwa small theaters. Built the full STT → translation → TTS pipeline and onboarded first-time developers on the team.",
      responsibilities: [
        "Led project planning, architecture, and sprint coordination",
        "Built Node.js/Express/MongoDB backend with REST API and WebSocket",
        "Implemented STT → translation → TTS real-time voice pipeline",
        "Developed React.js frontend optimized for in-theater use",
        "Taught GitHub workflow and frontend basics to beginner teammates",
        "Built web crawling system for automatic play information collection",
      ],
      outcomes: [
        "Full-stack platform with real-time multilingual voice pipeline",
        "Team successfully onboarded from zero development experience",
      ],
      images: [
        { src: "/relocal1.png", caption: "Foreign audience onboarding" },
        { src: "/relocal2.png", caption: "Play info crawling" },
        { src: "/relocal3.png", caption: "STT-TTS pipeline" },
      ],
    },
  },
  {
    id: "timi",
    title: "Timi",
    subtitle: "Group scheduling coordination service",
    description:
      "Web platform for efficiently coordinating meeting times across group members.",
    date: "2024",
    category: PROJECT_CATEGORIES.SOFTWARE,
    tags: ["React.js", "JavaScript", "REST API"],
    link: "/project/timi",
    thumbnail: "/images/main.jpg",
    authors: ["Yunji Lee"],
    detail: {
      role: "Frontend Developer",
      period: "2024",
      team: "Likelion SKKU",
      overview:
        "Built the frontend for Timi, a group scheduling tool that lets teams find optimal meeting times through visual time-slot coordination.",
      responsibilities: [
        "Developed React.js UI for time input and schedule visualization",
        "Implemented login/authentication flow",
        "Built per-time-slot comment and schedule confirmation features",
        "Optimized mobile-responsive layout for on-the-go scheduling",
      ],
      outcomes: [
        "Functional group scheduling web service",
        "First team project experience in Likelion",
      ],
      images: [
        { src: "/images/main.jpg", caption: "Main screen" },
        { src: "/month_calender.png", caption: "Calendar view" },
        { src: "/time_picker.png", caption: "Time picker" },
      ],
    },
  },
  {
    id: "lachu",
    title: "Sungsullang",
    subtitle: "Campus restaurant recommendation platform & startup",
    description:
      "CTO of campus community platform built with Next.js and Firebase — feeds, boards, and notifications.",
    date: "2025",
    category: PROJECT_CATEGORIES.SOFTWARE,
    tags: ["Next.js", "Firebase", "TypeScript"],
    link: "/project/lachu",
    thumbnail: "/lachu1.png",
    authors: ["Yunji Lee"],
    github: "https://github.com/sungsullang-project",
    detail: {
      role: "CTO & Full-Stack Developer",
      period: "2024.08 — Present",
      team: "Lachu Startup Team, SKKU",
      overview:
        "Serving as CTO of a campus community startup, building a student platform with restaurant recommendations, mentorship matching, and social features using Next.js and Firebase.",
      responsibilities: [
        "Architected and developed Next.js frontend with TypeScript",
        "Built Firebase backend for auth, database, and push notifications",
        "Implemented feed, bulletin board, and notification systems for MVP",
        "Aligned technical roadmap with business goals as sole technical lead",
      ],
      outcomes: [
        "MVP in development with core community features",
        "Sole technical owner across frontend, backend, and infrastructure",
      ],
      images: [
        { src: "/lachu1.png", caption: "Main screen" },
        { src: "/lachu2.png", caption: "Restaurant exploration" },
        { src: "/lachu3.png", caption: "Mentor matching" },
      ],
    },
  },
  {
    id: "aiesec-ogx",
    title: "AIESEC oGX Director",
    subtitle: "International exchange department leadership",
    description:
      "Led outbound exchange programs; achieved 1000% revenue growth through data-driven recruitment strategy.",
    date: "2023 — 2024",
    category: PROJECT_CATEGORIES.LEADERSHIP,
    tags: ["Strategy", "Data Analysis", "Leadership"],
    link: "/project/aiesec-ogx",
    thumbnail: "/images/conference1.png",
    authors: ["Yunji Lee"],
    detail: {
      role: "Outgoing Global Exchange (oGX) Director",
      period: "2023.08 — 2024.02",
      team: "AIESEC in HUFS",
      overview:
        "Led the outbound exchange department at AIESEC, connecting Korean students with international internships and volunteer programs through data-driven recruitment and operations.",
      responsibilities: [
        "Managed weekly department meetings and project progress tracking",
        "Analyzed MRS data to design participant recruitment strategies",
        "Organized 2-day open booth events for program recruitment",
        "Conducted IR calls with overseas branches to source programs",
        "Built custom Excel tracking tools for participant management",
      ],
      outcomes: [
        "Recruited 17 participants for outbound programs",
        "Achieved 1000% revenue growth through data-driven strategy",
        "Outgoing Global Volunteer Excellence Award",
      ],
      images: [
        { src: "/images/conference1.png", caption: "Department activities" },
        { src: "/images/contact.png", caption: "Custom tracking tool" },
      ],
    },
  },
  {
    id: "aiesec-nldc",
    title: "NLDC Conference President",
    subtitle: "National Leaders Development Conference",
    description:
      "Directed a 2-day conference for 129 participants — full program management, logistics, and team coordination.",
    date: "2023 — 2024",
    category: PROJECT_CATEGORIES.LEADERSHIP,
    tags: ["Project Management", "Leadership"],
    link: "/project/aiesec-nldc",
    thumbnail: "/images/conference2.png",
    authors: ["Yunji Lee"],
    detail: {
      role: "Conference President",
      period: "2023.10 — 2024.01",
      team: "AIESEC in Korea",
      overview:
        "Served as overall president for the National Leaders Development Conference, managing a 2-night 3-day event for 129 participants including operations, budget, logistics, and staff coordination.",
      responsibilities: [
        "Built operational tools for room allocation, quotas, and budget tracking",
        "Created meeting agendas and task assignment frameworks for staff",
        "Managed participant registration and fee settlement via Google Forms",
        "Resolved on-site logistics issues (accommodation, supplies, vendor coordination)",
        "Led post-event retrospective and documentation",
      ],
      outcomes: [
        "Successfully hosted conference for 129 participants",
        "Demonstrated large-scale project management and crisis resolution",
      ],
      images: [
        { src: "/images/conference2.png", caption: "Conference leadership" },
        { src: "/images/conference3.png", caption: "On-site operations" },
      ],
    },
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);

export const researchProjects = projects.filter(
  (p) => p.category === PROJECT_CATEGORIES.RESEARCH
);

export const roboticsProjects = projects.filter(
  (p) => p.category === PROJECT_CATEGORIES.ROBOTICS
);

export const mlProjects = projects.filter(
  (p) => p.category === PROJECT_CATEGORIES.MACHINE_LEARNING
);

export const otherProjects = projects.filter(
  (p) =>
    p.category === PROJECT_CATEGORIES.SOFTWARE ||
    p.category === PROJECT_CATEGORIES.LEADERSHIP
);

export const projectsByCategory = [
  PROJECT_CATEGORIES.RESEARCH,
  PROJECT_CATEGORIES.ROBOTICS,
  PROJECT_CATEGORIES.MACHINE_LEARNING,
  PROJECT_CATEGORIES.SOFTWARE,
  PROJECT_CATEGORIES.LEADERSHIP,
].map((category) => ({
  category,
  items: projects.filter((p) => p.category === category),
}));
