import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, Award, Quote } from "lucide-react";
import { candidates } from "../data/mockData";
import ScoreBar from "../components/ScoreBar";
import SkillTag from "../components/SkillTag";
import EmptyState from "../components/EmptyState";

function CandidateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const candidate = candidates.find((c) => String(c.id) === id);

  if (!candidate) {
    return (
      <EmptyState
        icon={Quote}
        title="Candidate not found"
        description="This candidate may have been removed or the link is incorrect."
        action={
          <button onClick={() => navigate("/candidates")} className="text-indigo-600 text-sm font-medium hover:underline">
            Back to Ranking
          </button>
        }
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={() => navigate("/candidates")} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft size={16} /> Back to Ranking
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-800">{candidate.name}</h1>
          <p className="text-gray-500 text-sm">{candidate.email}</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-indigo-600">{candidate.matchScore}%</p>
          <p className="text-xs text-gray-400">Overall Match Score</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-semibold text-gray-800 mb-4">Score Breakdown</h2>
          <ScoreBar label="Required Skills Match" score={candidate.requiredSkillsMatch} />
          <ScoreBar label="Experience Match" score={candidate.experienceMatch} />
          <ScoreBar label="Project Relevance" score={candidate.projectRelevance} />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-semibold text-gray-800 mb-3">Skills</h2>
          <p className="text-xs text-gray-400 mb-2">Matched Skills</p>
          <div className="flex flex-wrap mb-3">
            {candidate.matchedSkills.map((s) => <SkillTag key={s} skill={s} variant="matched" />)}
          </div>
          <p className="text-xs text-gray-400 mb-2">Missing Skills</p>
          <div className="flex flex-wrap">
            {candidate.missingSkills.length > 0 ? (
              candidate.missingSkills.map((s) => <SkillTag key={s} skill={s} variant="missing" />)
            ) : (
              <p className="text-sm text-gray-400">None</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="font-semibold text-gray-800 mb-3">Candidate Strengths</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
          {candidate.strengths.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-semibold text-gray-800 mb-3">Relevant Experience</h2>
          <div className="space-y-3">
            {candidate.experience.map((exp, i) => (
              <div key={i} className="border-l-2 border-indigo-200 pl-3">
                <p className="text-sm font-medium text-gray-800">{exp.role}</p>
                <p className="text-xs text-gray-500">{exp.company} · {exp.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-semibold text-gray-800 mb-3">Relevant Projects</h2>
          <div className="space-y-3">
            {candidate.projects.map((proj, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-gray-800">{proj.name}</p>
                <p className="text-xs text-gray-500">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <GraduationCap size={18} className="text-indigo-600" /> Education & Certifications
        </h2>
        <p className="text-sm text-gray-600">{candidate.education}</p>
        {candidate.certifications.length > 0 && (
          <div className="flex items-center gap-2 mt-2">
            <Award size={16} className="text-amber-500" />
            <p className="text-sm text-gray-600">{candidate.certifications.join(", ")}</p>
          </div>
        )}
      </div>

      <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-5">
        <h2 className="font-semibold text-gray-800 mb-2">AI-Generated Explanation</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{candidate.aiExplanation}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Quote size={18} className="text-indigo-600" /> Retrieved Resume Evidence
        </h2>
        <div className="space-y-3">
          {candidate.evidence.map((line, i) => (
            <p key={i} className="text-sm text-gray-600 italic border-l-2 border-gray-200 pl-3">{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CandidateDetails;