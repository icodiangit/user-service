import {
  LayoutDashboard,
  User,
  Target,
  FileText,
  Briefcase,
  BookOpen,
  Sparkles,
} from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Sidebar() {
  return (
    <div className="w-[300px] bg-[#f8fafc] p-4">
      {/* SIDEBAR CARD */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm h-[calc(100vh-32px)] flex flex-col overflow-hidden">
        {/* LOGO SECTION */}
        <div className="px-6 py-8 border-b border-gray-100">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-3xl bg-[#0f172a] border border-white/10 shadow-sm flex items-center justify-center p-3">
                <img
                  src={logo}
                  alt="CareerVia Logo"
                  className="w-full h-full object-cover scale-125"
                />
              </div>
            </a>

            {/* Text */}
            <div>
              <h1 className="text-2xl font-extrabold text-[#0f172a] leading-none">
                CareerVia
              </h1>

              <p className="text-gray-500 text-sm mt-2">Candidate Portal</p>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <SidebarItem
            icon={<LayoutDashboard size={22} />}
            label="Dashboard"
            active
          />

          <SidebarItem icon={<User size={22} />} label="Profile" />

          <SidebarItem icon={<Target size={22} />} label="Skills" />

          <SidebarItem icon={<FileText size={22} />} label="Resume" />

          <SidebarItem icon={<Briefcase size={22} />} label="Jobs" />

          <SidebarItem icon={<BookOpen size={22} />} label="Applications" />

          <SidebarItem icon={<Sparkles size={22} />} label="Intelligence" />

          <SidebarItem icon={<BookOpen size={22} />} label="Courses" />
        </div>
      </div>
    </div>
  );
}

/* REUSABLE SIDEBAR ITEM */
function SidebarItem({ icon, label, active }) {
  return (
    <button-sb
      className={`
    w-full
    flex
    items-center
    gap-4
    px-5
    py-4
    rounded-xl
    text-lg
    font-medium
    transition-all
    duration-300
    ease-in-out
    cursor-pointer

    hover:-translate-y-1
    hover:scale-[1.02]

    ${
      active
        ? "bg-[#0096FF] text-white shadow-lg"
        : "text-[#475569] hover:bg-gray-100"
    }
  `}
    >
      {icon}
      {label}
    </button-sb>
  );
}
