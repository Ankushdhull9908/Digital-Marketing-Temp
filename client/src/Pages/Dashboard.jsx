import { useNavigate } from "react-router-dom";
// Optional: Install lucide-react for professional icons
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  LogOut, 
  Plus, 
  ExternalLink, 
  Edit3, 
  Layers 
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const pages = [
    { name: "Gym Landing Page", url: "/page/gym", date: "12 Apr 2026", status: "Published" },
    { name: "Marketing Campaign", url: "/page/marketing", date: "10 Apr 2026", status: "Draft" }
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">

      {/* 🔹 Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">W</div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            WebTech
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 font-semibold transition-all">
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all font-medium">
            <FileText size={18} />
            My Pages
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all font-medium">
            <BarChart3 size={18} />
            Analytics
          </button>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* 🔹 Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* 🔸 Top Navbar */}
        <header className="h-18 bg-white border-b border-slate-200 flex justify-between items-center px-8 py-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Overview</h2>
            <p className="text-xs text-slate-500">Welcome back, here is what's happening.</p>
          </div>

          <button
            onClick={() => navigate("/create")}
            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
          >
            <Plus size={18} />
            Create New Page
          </button>
        </header>

        {/* 🔸 Content Area */}
        <main className="p-8 overflow-y-auto">

          {/* 🔹 Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Layers size={48} className="text-indigo-600" />
               </div>
              <h3 className="text-slate-500 text-sm font-medium">Total Pages</h3>
              <p className="text-3xl font-bold mt-2 text-slate-800">12</p>
              <span className="text-xs text-green-600 font-medium mt-2 block">+2 from last month</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BarChart3 size={48} className="text-blue-600" />
               </div>
              <h3 className="text-slate-500 text-sm font-medium">Total Views</h3>
              <p className="text-3xl font-bold mt-2 text-slate-800">3,240</p>
              <span className="text-xs text-green-600 font-medium mt-2 block">+12.5% increase</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FileText size={48} className="text-purple-600" />
               </div>
              <h3 className="text-slate-500 text-sm font-medium">Conversions</h3>
              <p className="text-3xl font-bold mt-2 text-slate-800">320</p>
              <span className="text-xs text-slate-400 font-medium mt-2 block">Avg. 9.8% rate</span>
            </div>
          </div>

          {/* 🔹 Pages Table Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">Your Landing Pages</h3>
              <button className="text-sm text-indigo-600 font-semibold hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 text-xs uppercase tracking-wider bg-slate-50/50">
                    <th className="px-6 py-4 font-semibold">Page Name</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Created Date</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {pages.map((page, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-700">{page.name}</span>
                          <span className="text-xs text-slate-400 truncate w-48">{page.url}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                          page.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {page.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        {page.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 hover:bg-indigo-50 text-indigo-600 rounded-lg transition-colors" title="View">
                            <ExternalLink size={18} />
                          </button>
                          <button className="p-2 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors" title="Edit">
                            <Edit3 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;