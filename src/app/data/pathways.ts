export interface PathwayLesson {
  title: string;
  type: "video" | "quiz" | "activity";
  duration: string;
}

export interface PathwayModule {
  title: string;
  lessons: PathwayLesson[];
}

export interface PathwayInstructor {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface PathwayDetail {
  id: number;
  title: string;
  instructor: PathwayInstructor;
  image: string;
  rating: number;
  students: number;
  duration: string;
  xp: number;
  difficulty: string;
  overview: string;
  objectives: string[];
  modules: PathwayModule[];
  aiInsights: string[];
}

const defaultModules: PathwayModule[] = [
  {
    title: "Foundations",
    lessons: [
      { title: "Introduction and Key Concepts", type: "video", duration: "12 min" },
      { title: "Core Skills Overview", type: "video", duration: "15 min" },
      { title: "Self-Assessment", type: "quiz", duration: "10 min" },
    ],
  },
  {
    title: "Core Competencies",
    lessons: [
      { title: "Essential Techniques", type: "video", duration: "18 min" },
      { title: "Best Practices", type: "video", duration: "14 min" },
      { title: "Practical Exercise", type: "activity", duration: "30 min" },
    ],
  },
  {
    title: "Application",
    lessons: [
      { title: "Real-World Scenarios", type: "video", duration: "16 min" },
      { title: "Case Studies", type: "video", duration: "22 min" },
      { title: "Assignment", type: "activity", duration: "45 min" },
    ],
  },
  {
    title: "Final Module & Certification",
    lessons: [
      { title: "Course Review", type: "video", duration: "10 min" },
      { title: "Final Project", type: "activity", duration: "60 min" },
      { title: "Feedback", type: "quiz", duration: "5 min" },
    ],
  },
];

export const PATHWAYS: PathwayDetail[] = [
  {
    id: 1,
    title: "Business Analyst",
    instructor: {
      name: "Sarah Johnson",
      title: "Business Analysis Expert",
      bio: "15+ years guiding requirements and process improvement across industries.",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.9,
    students: 1876,
    duration: "8 weeks",
    xp: 750,
    difficulty: "Intermediate",
    overview: "Analyze requirements, model processes, and bridge business needs with solutions. This pathway builds the core skills to gather and document requirements, model processes, and support delivery as a Business Analyst.",
    objectives: [
      "Elicit and document clear requirements from stakeholders",
      "Model processes using standard techniques",
      "Support solution design and delivery",
      "Communicate findings to technical and non-technical audiences",
      "Use common BA tools and frameworks",
    ],
    modules: defaultModules,
    aiInsights: ["Analysis", "Requirements", "Process"],
  },
  {
    id: 2,
    title: "Market Research Analyst",
    instructor: {
      name: "Dr. Emily Rodriguez",
      title: "Research & Insights Lead",
      bio: "Expert in quantitative and qualitative research and strategy.",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.8,
    students: 1542,
    duration: "6 weeks",
    xp: 600,
    difficulty: "Intermediate",
    overview: "Gather data, run analysis, and deliver insights that drive strategy. Learn how to design studies, analyze data, and present actionable insights as a Market Research Analyst.",
    objectives: [
      "Design and run surveys and research studies",
      "Analyze quantitative and qualitative data",
      "Synthesize findings into clear reports",
      "Present insights to stakeholders",
      "Apply ethics and best practices in research",
    ],
    modules: defaultModules,
    aiInsights: ["Research", "Data", "Insights"],
  },
  {
    id: 3,
    title: "Technical Sales Representative",
    instructor: {
      name: "Michael Chen",
      title: "Technical Sales Director",
      bio: "Former solutions engineer and sales leader in tech.",
      image: "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.7,
    students: 1234,
    duration: "6 weeks",
    xp: 650,
    difficulty: "Intermediate",
    overview: "Sell technical products and services while building lasting client relationships. This pathway covers discovery, demos, objection handling, and closing in technical sales.",
    objectives: [
      "Conduct discovery and qualify opportunities",
      "Deliver compelling technical demos",
      "Handle objections and negotiate",
      "Build long-term client relationships",
      "Use CRM and sales tools effectively",
    ],
    modules: defaultModules,
    aiInsights: ["Sales", "Technical", "Relationships"],
  },
  {
    id: 4,
    title: "Project / Operations Coordinator",
    instructor: {
      name: "Lisa Anderson",
      title: "Operations & PMO Lead",
      bio: "20+ years in project coordination and operations.",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.8,
    students: 1654,
    duration: "7 weeks",
    xp: 700,
    difficulty: "Beginner",
    overview: "Coordinate projects and day-to-day operations for smooth delivery. Learn planning, tracking, reporting, and cross-team coordination as a Project or Operations Coordinator.",
    objectives: [
      "Plan and track tasks and timelines",
      "Run status updates and reporting",
      "Coordinate across teams and stakeholders",
      "Manage risks and issues",
      "Use common project and ops tools",
    ],
    modules: defaultModules,
    aiInsights: ["Coordination", "Operations", "Project"],
  },
  {
    id: 5,
    title: "Marketing Coordinator",
    instructor: {
      name: "David Park",
      title: "Marketing Operations Expert",
      bio: "Specialist in campaigns, content, and marketing ops.",
      image: "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.7,
    students: 1420,
    duration: "5 weeks",
    xp: 550,
    difficulty: "Beginner",
    overview: "Support campaigns, content, and marketing operations from planning to execution. Build skills in campaign support, content coordination, and marketing tools.",
    objectives: [
      "Support campaign planning and execution",
      "Coordinate content and assets",
      "Use marketing and analytics tools",
      "Report on campaign performance",
      "Work with internal and external partners",
    ],
    modules: defaultModules,
    aiInsights: ["Marketing", "Campaigns", "Content"],
  },
];

export function getPathwayById(id: number): PathwayDetail | undefined {
  return PATHWAYS.find((p) => p.id === id);
}

export function getSuggestedPathways(currentId: number): PathwayDetail[] {
  return PATHWAYS.filter((p) => p.id !== currentId).slice(0, 3);
}
