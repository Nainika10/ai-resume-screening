import { useState } from "react";
import { Briefcase } from "lucide-react";

function CreateJob() {
  const [form, setForm] = useState({
    title: "",
    department: "",
    description: "",
    requiredSkills: "",
    preferredSkills: "",
    minExperience: "",
    education: "",
    weights: { skillsMatch: 40, experienceMatch: 30, projectRelevance: 20, education: 10 },
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWeightChange = (key, value) => {
    setForm({ ...form, weights: { ...form.weights, [key]: Number(value) } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mock job submission:", form);
    alert("Job created (mock only — not sent to backend yet).");
  };

  const totalWeight = Object.values(form.weights).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
          <Briefcase size={20} className="text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Create Job</h1>
          <p className="text-gray-500 text-sm">Define a role to start screening resumes against it</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input
              name="title" value={form.title} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              placeholder="e.g. Senior Frontend Developer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <input
              name="department" value={form.department} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              placeholder="e.g. Engineering"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
          <textarea
            name="description" value={form.description} onChange={handleChange} rows={4} required
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
            placeholder="Describe the role, responsibilities, and expectations..."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills</label>
            <input
              name="requiredSkills" value={form.requiredSkills} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              placeholder="Comma separated, e.g. React, Node.js, AWS"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Skills</label>
            <input
              name="preferredSkills" value={form.preferredSkills} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              placeholder="Comma separated, e.g. GraphQL, Docker"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Experience (years)</label>
            <input
              type="number" min="0" name="minExperience" value={form.minExperience} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              placeholder="e.g. 3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Education Requirement</label>
            <input
              name="education" value={form.education} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              placeholder="e.g. Bachelor's in Computer Science"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Scoring Weight Configuration <span className={totalWeight === 100 ? "text-emerald-600" : "text-red-500"}>({totalWeight}% / 100%)</span>
          </label>
          <div className="space-y-3">
            {Object.entries(form.weights).map(([key, value]) => (
              <div key={key} className="flex items-center gap-3">
                <span className="w-40 text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                <input
                  type="range" min="0" max="100" value={value}
                  onChange={(e) => handleWeightChange(key, e.target.value)}
                  className="flex-1 accent-indigo-600"
                />
                <span className="w-10 text-sm text-gray-700 text-right">{value}%</span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Create Job
        </button>
      </form>
    </div>
  );
}

export default CreateJob;