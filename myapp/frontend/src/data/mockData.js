export const stats = {
  totalJobs: 12,
  totalResumes: 248,
  shortlisted: 34,
  avgMatchScore: 76,
};

export const recentJobs = [
  { id: 1, title: "Senior Frontend Developer", department: "Engineering", resumes: 45, status: "Active", posted: "2026-06-20" },
  { id: 2, title: "Data Scientist", department: "Data & Analytics", resumes: 62, status: "Active", posted: "2026-06-18" },
  { id: 3, title: "Product Manager", department: "Product", resumes: 28, status: "Closed", posted: "2026-06-10" },
  { id: 4, title: "DevOps Engineer", department: "Infrastructure", resumes: 33, status: "Active", posted: "2026-06-05" },
  { id: 5, title: "UI/UX Designer", department: "Design", resumes: 19, status: "Draft", posted: "2026-06-02" },
];

export const scoreDistribution = [
  { range: "0-20", count: 8 },
  { range: "21-40", count: 22 },
  { range: "41-60", count: 51 },
  { range: "61-80", count: 89 },
  { range: "81-100", count: 78 },
];

export const topSkills = [
  { skill: "React", count: 38 },
  { skill: "Python", count: 34 },
  { skill: "SQL", count: 29 },
  { skill: "AWS", count: 25 },
  { skill: "Node.js", count: 21 },
  { skill: "Docker", count: 18 },
];

export const processingStages = [
  { id: 1, label: "Uploading Resumes" },
  { id: 2, label: "Extracting Text" },
  { id: 3, label: "Cleaning Text" },
  { id: 4, label: "Creating Chunks" },
  { id: 5, label: "Generating Embeddings" },
  { id: 6, label: "Storing Vectors" },
  { id: 7, label: "RAG Retrieval" },
  { id: 8, label: "LLM Analysis" },
  { id: 9, label: "Candidate Scoring" },
  { id: 10, label: "Ranking Complete" },
];

export const candidates = [
  {
    id: 1,
    rank: 1,
    name: "Ananya Sharma",
    email: "ananya.sharma@email.com",
    matchScore: 92,
    requiredSkillsMatch: 95,
    experienceMatch: 88,
    projectRelevance: 90,
    recommendation: "Highly Recommended",
    matchedSkills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
    missingSkills: ["Kubernetes"],
    strengths: [
      "5+ years building production React applications",
      "Strong system design fundamentals",
      "Led a team of 4 engineers on a customer-facing platform",
    ],
    experience: [
      { role: "Senior Frontend Engineer", company: "TechNova", duration: "2022 - Present" },
      { role: "Frontend Engineer", company: "PixelWorks", duration: "2019 - 2022" },
    ],
    projects: [
      { name: "Real-time Analytics Dashboard", description: "Built a dashboard processing 1M+ events/day using React and WebSockets." },
      { name: "Design System Migration", description: "Led migration of legacy UI to a component-based design system." },
    ],
    education: "B.Tech in Computer Science, IIT Bombay",
    certifications: ["AWS Certified Developer – Associate"],
    aiExplanation:
      "This candidate shows strong alignment with the job's core requirements, particularly in frontend architecture and cloud deployment. Their leadership experience and relevant certifications further strengthen their profile relative to peer candidates.",
    evidence: [
      "\"Led migration of a monolithic frontend to a micro-frontend architecture using React and Module Federation.\"",
      "\"Deployed and maintained services on AWS (EC2, S3, Lambda) supporting 200K+ daily active users.\"",
    ],
  },
  {
    id: 2,
    rank: 2,
    name: "Rahul Verma",
    email: "rahul.verma@email.com",
    matchScore: 85,
    requiredSkillsMatch: 88,
    experienceMatch: 80,
    projectRelevance: 82,
    recommendation: "Recommended",
    matchedSkills: ["React", "JavaScript", "Node.js", "MongoDB"],
    missingSkills: ["AWS", "GraphQL"],
    strengths: ["Solid full-stack development background", "Good communication in prior interviews"],
    experience: [{ role: "Full Stack Developer", company: "CloudBridge", duration: "2020 - Present" }],
    projects: [{ name: "Inventory Management System", description: "Built an internal tool used by 50+ warehouse staff." }],
    education: "B.E. in Information Technology, VJTI Mumbai",
    certifications: [],
    aiExplanation:
      "This candidate meets most core requirements with solid full-stack experience, though lacks direct cloud infrastructure exposure mentioned in the job description.",
    evidence: ["\"Developed and maintained a MERN stack application handling inventory for 12 warehouses.\""],
  },
  {
    id: 3,
    rank: 3,
    name: "Priya Nair",
    email: "priya.nair@email.com",
    matchScore: 71,
    requiredSkillsMatch: 70,
    experienceMatch: 68,
    projectRelevance: 75,
    recommendation: "Consider",
    matchedSkills: ["React", "CSS", "JavaScript"],
    missingSkills: ["Node.js", "AWS", "TypeScript"],
    strengths: ["Strong UI/visual design sense", "Fast learner based on project variety"],
    experience: [{ role: "Frontend Developer", company: "Studio9", duration: "2021 - Present" }],
    projects: [{ name: "Marketing Site Revamp", description: "Rebuilt company marketing site improving load time by 40%." }],
    education: "B.Sc in Computer Applications, Mumbai University",
    certifications: [],
    aiExplanation:
      "This candidate has relevant frontend experience but limited exposure to backend and cloud technologies listed as required skills.",
    evidence: ["\"Rebuilt the marketing website using React, improving Lighthouse performance score from 61 to 94.\""],
  },
  {
    id: 4,
    rank: 4,
    name: "Karan Mehta",
    email: "karan.mehta@email.com",
    matchScore: 58,
    requiredSkillsMatch: 55,
    experienceMatch: 60,
    projectRelevance: 58,
    recommendation: "Not Recommended",
    matchedSkills: ["JavaScript", "HTML/CSS"],
    missingSkills: ["React", "Node.js", "AWS", "TypeScript"],
    strengths: ["Willingness to learn new frameworks"],
    experience: [{ role: "Junior Web Developer", company: "WebCrafters", duration: "2023 - Present" }],
    projects: [{ name: "Portfolio Website Builder", description: "Built a static site generator for personal portfolios." }],
    education: "Diploma in Web Development",
    certifications: [],
    aiExplanation:
      "This candidate's experience is primarily in vanilla JavaScript with limited exposure to the specific frameworks required for this role.",
    evidence: ["\"Built a static site generator using vanilla JavaScript and Handlebars templates.\""],
  },
];

export const settingsData = {
  llmProviders: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Local (Ollama)"],
  currentLLMProvider: "Anthropic Claude",
  embeddingModel: "text-embedding-3-large",
  vectorDatabase: "ChromaDB",
  defaultWeights: {
    skillsMatch: 40,
    experienceMatch: 30,
    projectRelevance: 20,
    education: 10,
  },
};