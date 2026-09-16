import { Search, Bell } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 w-full max-w-xs">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search jobs, candidates..."
          className="bg-transparent text-sm outline-none w-full text-gray-700 placeholder:text-gray-400"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative text-gray-500 hover:text-gray-700">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold">
          RS
        </div>
      </div>
    </header>
  );
}

export default Navbar;