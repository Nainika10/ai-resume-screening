import { Briefcase, FileText, UserCheck, Percent } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import StatCard from "../components/StatCard";
import { stats, recentJobs, scoreDistribution, topSkills } from "../data/mockData";

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-700",
  Closed: "bg-gray-100 text-gray-600",
  Draft: "bg-amber-50 text-amber-700",
};

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Recruiter Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Overview of your hiring pipeline</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Jobs" value={stats.totalJobs} icon={Briefcase} accent="indigo" />
        <StatCard label="Total Resumes" value={stats.totalResumes} icon={FileText} accent="blue" />
        <StatCard label="Shortlisted Candidates" value={stats.shortlisted} icon={UserCheck} accent="green" />
        <StatCard label="Avg. Match Score" value={`${stats.avgMatchScore}%`} icon={Percent} accent="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-semibold text-gray-800 mb-4">Candidate Score Distribution</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={scoreDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="range" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-semibold text-gray-800 mb-4">Top Skills Across Resumes</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={topSkills} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis dataKey="skill" type="category" tick={{ fontSize: 12 }} stroke="#94a3b8" width={70} />
              <Tooltip />
              <Bar dataKey="count" fill="#818cf8" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="font-semibold text-gray-800 mb-4">Recent Job Openings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="pb-3 font-medium">Job Title</th>
                <th className="pb-3 font-medium">Department</th>
                <th className="pb-3 font-medium">Resumes</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Posted</th>
              </tr>
            </thead>
            <tbody>
              {recentJobs.map((job) => (
                <tr key={job.id} className="border-b border-gray-50 last:border-0">
                  <td className="py-3 text-gray-800 font-medium">{job.title}</td>
                  <td className="py-3 text-gray-600">{job.department}</td>
                  <td className="py-3 text-gray-600">{job.resumes}</td>
                  <td className="py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[job.status]}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="py-3 text-gray-500">{job.posted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;