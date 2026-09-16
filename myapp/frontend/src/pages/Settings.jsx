import { useState } from "react";
import { settingsData } from "../data/mockData";
import { Cpu, Database, Sliders, Sun, Moon } from "lucide-react";

function Settings() {
  const [provider, setProvider] = useState(settingsData.currentLLMProvider);
  const [weights, setWeights] = useState(settingsData.defaultWeights);
  const [theme, setTheme] = useState("light");

  const handleWeightChange = (key, value) => setWeights({ ...weights, [key]: Number(value) });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Configure your AI screening pipeline</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Cpu size={18} className="text-indigo-600" /> LLM Provider
        </h2>
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          {settingsData.llmProviders.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <h2 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Database size={18} className="text-indigo-600" /> Embedding Model
          </h2>
          <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{settingsData.embeddingModel}</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Database size={18} className="text-indigo-600" /> Vector Database
          </h2>
          <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{settingsData.vectorDatabase}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Sliders size={18} className="text-indigo-600" /> Default Scoring Weights
        </h2>
        <div className="space-y-3">
          {Object.entries(weights).map(([key, value]) => (
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

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="font-semibold text-gray-800 mb-4">Theme Preference</h2>
        <div className="flex gap-3">
          <button
            onClick={() => setTheme("light")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border ${
              theme === "light" ? "border-indigo-400 bg-indigo-50 text-indigo-600" : "border-gray-200 text-gray-600"
            }`}
          >
            <Sun size={16} /> Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border ${
              theme === "dark" ? "border-indigo-400 bg-indigo-50 text-indigo-600" : "border-gray-200 text-gray-600"
            }`}
          >
            <Moon size={16} /> Dark
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">Dark mode styling isn't implemented yet — this is a preference toggle only.</p>
      </div>
    </div>
  );
}

export default Settings;