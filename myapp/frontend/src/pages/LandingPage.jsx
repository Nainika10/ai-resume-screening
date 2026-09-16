import { useNavigate } from "react-router-dom";
import { Sparkles, ScanSearch, Trophy, Target, MessageSquareText } from "lucide-react";

const features = [
  { icon: ScanSearch, title: "RAG Analysis", description: "Retrieves the most relevant resume content using vector search before analysis." },
  { icon: Trophy, title: "AI Candidate Ranking", description: "Automatically ranks candidates based on job fit using LLM-driven scoring." },
  { icon: Target, title: "Skill Matching", description: "Compares required and preferred skills against each candidate's profile." },
  { icon: MessageSquareText, title: "Explainable Results", description: "Every score comes with a clear, human-readable explanation." },
];

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="font-bold text-gray-800">ResumeAI</span>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
        >
          Go to Dashboard
        </button>
      </header>

      <section className="max-w-4xl mx-auto text-center px-6 py-20">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-5">
          AI-Powered Recruitment
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          AI-Powered Resume Screening & Candidate Ranking
        </h1>
        <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
          Using Retrieval-Augmented Generation (RAG) and large language models to screen resumes,
          match skills, and rank candidates — with fully explainable results for every score.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-700 transition-colors"
        >
          Get Started
        </button>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
              <Icon size={22} className="text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-2">{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default LandingPage;