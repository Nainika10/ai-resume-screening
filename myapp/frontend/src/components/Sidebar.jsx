import { NavLink } from "react-router-dom";
import { LayoutDashboard, Briefcase, UploadCloud, Users, Settings, Sparkles } from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/jobs/create", label: "Create Job", icon: Briefcase },
  { to: "/resumes/upload", label: "Upload Resumes", icon: UploadCloud },
  { to: "/candidates", label: "Candidate Ranking", icon: Users },
  { to: "/settings", label: "Settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-100 h-screen sticky top-0">
      <div className="flex items-center gap-2 px-6 h-16 border-b border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
          <Sparkles size={18} className="text-white" />
        </div>
        <span className="font-bold text-gray-800">ResumeAI</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;