import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Loader2, Circle } from "lucide-react";
import { processingStages } from "../data/mockData";

function ProcessingStatus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeIndex >= processingStages.length) {
      const timeout = setTimeout(() => navigate("/candidates"), 800);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setActiveIndex((prev) => prev + 1), 700);
    return () => clearTimeout(timeout);
  }, [activeIndex, navigate]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Processing Resumes</h1>
        <p className="text-gray-500 text-sm mt-1">Your resumes are moving through the AI pipeline</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <ul className="space-y-1">
          {processingStages.map((stage, i) => {
            const isDone = i < activeIndex;
            const isActive = i === activeIndex;
            return (
              <li key={stage.id} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
                {isDone && <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />}
                {isActive && <Loader2 size={20} className="text-indigo-600 shrink-0 animate-spin" />}
                {!isDone && !isActive && <Circle size={20} className="text-gray-300 shrink-0" />}
                <span className={`text-sm ${isDone ? "text-gray-500" : isActive ? "text-gray-800 font-medium" : "text-gray-400"}`}>
                  {stage.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProcessingStatus;