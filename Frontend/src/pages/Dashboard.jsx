import {
  Briefcase,
  Bookmark,
  Trophy,
  Sparkles,
  ArrowRight,
  Brain,
} from "lucide-react";

import Sidebar from "../components/SideBar";

export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f8fafc]">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="w-[96.8%] mt-6 bg-white rounded-3xl border border-gray-100 shadow-sm px-8 py-3 flex items-center justify-between">
          {/* LEFT */}
          <div>
            <h1 className="text-3xl font-bold text-[#0f172a]">Dashboard</h1>

            <p className="text-gray-500 mt-1">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* Notification */}
            <button className="relative w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">
              <span className="text-lg">🔔</span>

              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>

            {/* Avatar */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
              JD
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* HERO SECTION */}
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div>
                  <p className="text-cyan-500 text-sm font-semibold mb-2">
                    Candidate Dashboard
                  </p>

                  <h1 className="text-5xl font-extrabold leading-tight text-[#0f172a]">
                    Welcome back, Achiever! 👋
                  </h1>

                  <p className="text-gray-500 mt-4 text-lg">
                    Ready to explore new opportunities and grow your career?
                  </p>

                  <div className="flex gap-4 mt-8">
                    <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                      Explore Jobs
                    </button>

                    <button className="px-6 py-3 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition text-[#0f172a] font-medium">
                      Complete Profile
                    </button>
                  </div>
                </div>

                {/* STREAK CARD */}
                <div className="flex gap-4">
                  <div className="bg-[#1e293b] border border-white/10 rounded-3xl p-6 text-center min-w-[140px] shadow-xl">
                    <div className="flex justify-center mb-3">
                      <Trophy className="text-orange-400" size={30} />
                    </div>

                    <h2 className="text-4xl font-bold text-white">12</h2>

                    <p className="text-gray-400 text-sm mt-2">Day Streak</p>
                  </div>
                </div>
              </div>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* JOBS APPLIED */}
              <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.08)]">
                <div className="flex justify-between items-center">
                  <div className="bg-cyan-500/20 p-3 rounded-2xl">
                    <Briefcase className="text-cyan-400" />
                  </div>

                  <span className="text-green-400 text-sm">+4 this week</span>
                </div>

                <h2 className="text-4xl font-bold mt-6 text-white">12</h2>

                <p className="text-gray-400 mt-2">Jobs Applied</p>
              </div>

              {/* PROFILE */}
              <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.08)]">
                <div className="flex justify-between items-center">
                  <div className="bg-purple-500/20 p-3 rounded-2xl">
                    <Sparkles className="text-purple-400" />
                  </div>

                  <span className="text-purple-400 text-sm">Almost Done</span>
                </div>

                <h2 className="text-4xl font-bold mt-6 text-white">80%</h2>

                <p className="text-gray-400 mt-2">Profile Completion</p>
              </div>

              {/* SAVED JOBS */}
              <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.08)]">
                <div className="flex justify-between items-center">
                  <div className="bg-green-500/20 p-3 rounded-2xl">
                    <Bookmark className="text-green-400" />
                  </div>

                  <span className="text-cyan-400 text-sm">Active</span>
                </div>

                <h2 className="text-4xl font-bold mt-6 text-white">5</h2>

                <p className="text-gray-400 mt-2">Saved Jobs</p>
              </div>
            </div>

            {/* AI SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* LEFT */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#172554] to-[#0f172a] p-8 shadow-[0_0_50px_rgba(59,130,246,0.12)]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-cyan-500/20 p-4 rounded-2xl">
                    <Brain className="text-cyan-400" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      AI Career Readiness
                    </h2>

                    <p className="text-gray-400">Powered by AI analysis</p>
                  </div>
                </div>

                {/* SCORE */}
                <div className="flex justify-center">
                  <div className="w-52 h-52 rounded-full border-[12px] border-cyan-400 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.2)]">
                    <div className="text-center">
                      <h1 className="text-6xl font-extrabold text-cyan-400">
                        78
                      </h1>

                      <p className="text-gray-400 mt-2">out of 100</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  AI Insights
                </h2>

                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                    <p className="text-gray-300">
                      Your profile is 85% complete.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                    <p className="text-gray-300">
                      Add backend projects to stand out.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                    <p className="text-gray-300">
                      Add portfolio links for recruiters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RECOMMENDED ACTIONS */}
            <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-2xl">
                  <Sparkles className="text-white" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Recommended Actions
                  </h2>

                  <p className="text-gray-400">Improve your career readiness</p>
                </div>
              </div>

              <div className="space-y-5">
                <ActionCard
                  title="Complete Advanced React Course"
                  description="Strengthen your frontend skills."
                  buttonText="Start Learning"
                  color="text-purple-400"
                />

                <ActionCard
                  title="Add Portfolio Projects"
                  description="Showcase your work to recruiters."
                  buttonText="Add Projects"
                  color="text-cyan-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ACTION CARD */
function ActionCard({ title, description, buttonText, color }) {
  return (
    <div className="bg-[#0f172a] border border-white/5 rounded-2xl p-6 hover:border-cyan-500/20 transition">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="text-gray-400 mt-2">{description}</p>

      <button
        className={`flex items-center gap-2 mt-4 font-semibold hover:translate-x-1 transition ${color}`}
      >
        {buttonText}

        <ArrowRight size={18} />
      </button>
    </div>
  );
}
