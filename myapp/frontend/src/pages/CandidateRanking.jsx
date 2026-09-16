import { useNavigate } from "react-router-dom";
import { candidates } from "../data/mockData";

const recommendationStyles = {
  "Highly Recommended": "bg-emerald-50 text-emerald-700",
  Recommended: "bg-indigo-50 text-indigo-700",
  Consider: "bg-amber-50 text-amber-700",
  "Not Recommended": "bg-red-50 text-red-700",
};

function CandidateRanking() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Candidate Ranking</h1>
        <p className="text-gray-500 text-sm mt-1">Candidates ranked by AI-generated match score</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-100">
              <th className="px-5 py-3 font-medium">Rank</th>
              <th className="px-5 py-3 font-medium">Candidate</th>
              <th className="px-5 py-3 font-medium">Match Score</th>
              <th className="px-5 py-3 font-medium">Skills Match</th>
              <th className="px-5 py-3 font-medium">Experience Match</th>
              <th className="px-5 py-3 font-medium">Project Relevance</th>
              <th className="px-5 py-3 font-medium">Recommendation</th>
              <th className="px-5 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                <td className="px-5 py-4 font-semibold text-gray-800">#{c.rank}</td>
                <td className="px-5 py-4">
                  <p className="font-medium text-gray-800">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.email}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="font-semibold text-indigo-600">{c.matchScore}%</span>
                </td>
                <td className="px-5 py-4 text-gray-600">{c.requiredSkillsMatch}%</td>
                <td className="px-5 py-4 text-gray-600">{c.experienceMatch}%</td>
                <td className="px-5 py-4 text-gray-600">{c.projectRelevance}%</td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${recommendationStyles[c.recommendation]}`}>
                    {c.recommendation}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => navigate(`/candidates/${c.id}`)}
                    className="text-indigo-600 text-sm font-medium hover:underline"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateRanking;