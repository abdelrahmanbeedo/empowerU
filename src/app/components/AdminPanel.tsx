import { useState } from "react";
import { 
  BookOpen, Users, BarChart3, MessageSquare, Settings, 
  Plus, Edit, Trash2, Search, TrendingUp, Eye, CheckCircle2,
  XCircle, Clock, Tag, DollarSign
} from "lucide-react";

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState("courses");
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { 
      id: 1, 
      title: "Effective Communication", 
      instructor: "Sarah Johnson", 
      students: 2341, 
      status: "Active",
      xp: 500,
      completion: 78,
    },
    { 
      id: 2, 
      title: "Leadership Essentials", 
      instructor: "Michael Chen", 
      students: 1876, 
      status: "Active",
      xp: 750,
      completion: 82,
    },
    { 
      id: 3, 
      title: "Emotional Intelligence", 
      instructor: "Dr. Emily Rodriguez", 
      students: 1542, 
      status: "Active",
      xp: 600,
      completion: 75,
    },
    { 
      id: 4, 
      title: "Team Collaboration", 
      instructor: "David Park", 
      students: 1234, 
      status: "Draft",
      xp: 450,
      completion: 0,
    },
  ];

  const users = [
    { 
      id: 1, 
      name: "Alex Thompson", 
      email: "alex.t@email.com", 
      courses: 3, 
      xp: 2450,
      joinDate: "2025-11-15",
      status: "Active",
    },
    { 
      id: 2, 
      name: "Emma Wilson", 
      email: "emma.w@email.com", 
      courses: 5, 
      xp: 3240,
      joinDate: "2025-10-22",
      status: "Active",
    },
    { 
      id: 3, 
      name: "John Davis", 
      email: "john.d@email.com", 
      courses: 4, 
      xp: 2890,
      joinDate: "2025-12-01",
      status: "Active",
    },
    { 
      id: 4, 
      name: "Sarah Miller", 
      email: "sarah.m@email.com", 
      courses: 2, 
      xp: 1230,
      joinDate: "2026-01-10",
      status: "Inactive",
    },
  ];

  const analytics = {
    totalUsers: 10234,
    activeUsers: 8456,
    totalCourses: 52,
    completionRate: 76,
    avgEngagement: 4.2,
    revenue: 125430,
  };

  const supportTickets = [
    { 
      id: 1, 
      user: "Alex Thompson", 
      subject: "Cannot access video lessons", 
      priority: "High",
      status: "Open",
      date: "2026-02-05",
    },
    { 
      id: 2, 
      user: "Emma Wilson", 
      subject: "Certificate download issue", 
      priority: "Medium",
      status: "In Progress",
      date: "2026-02-04",
    },
    { 
      id: 3, 
      user: "John Davis", 
      subject: "Request for course refund", 
      priority: "Low",
      status: "Resolved",
      date: "2026-02-03",
    },
  ];

  const promoCodes = [
    { code: "WELCOME20", discount: "20%", uses: 342, limit: 1000, expiry: "2026-03-01", status: "Active" },
    { code: "STUDENT50", discount: "50%", uses: 156, limit: 500, expiry: "2026-06-30", status: "Active" },
    { code: "NEWYEAR", discount: "30%", uses: 500, limit: 500, expiry: "2026-01-31", status: "Expired" },
  ];

  const recentActivity = [
    { action: "New user registered", user: "Maria Garcia", time: "5 min ago" },
    { action: "Course completed", user: "Alex Thompson", time: "15 min ago" },
    { action: "Support ticket created", user: "John Davis", time: "1 hour ago" },
    { action: "New enrollment", user: "Emma Wilson", time: "2 hours ago" },
  ];

  const renderCourses = () => (
    <div>
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Courses</h2>
        <button className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Course
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Instructor</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Students</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">XP</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Completion</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">{course.title}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{course.instructor}</td>
                  <td className="px-6 py-4 text-gray-600">{course.students.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-600">{course.xp}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-[100px]">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${course.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{course.completion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.status === "Active" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div>
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Users</h2>
        <button className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors">
          Export Data
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Courses</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Total XP</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-gray-600">{user.courses}</td>
                  <td className="px-6 py-4 text-gray-600">{user.xp.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-600">{user.joinDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === "Active" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics & Insights</h2>
      
      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{analytics.totalUsers.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Users</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{analytics.activeUsers.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Active Users</div>
        </div>
          <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="w-8 h-8 text-sky-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{analytics.totalCourses}</div>
          <div className="text-sm text-gray-600">Total Courses</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{analytics.completionRate}%</div>
          <div className="text-sm text-gray-600">Completion Rate</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="w-8 h-8 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{analytics.avgEngagement}</div>
          <div className="text-sm text-gray-600">Avg Engagement</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">${(analytics.revenue / 1000).toFixed(1)}K</div>
          <div className="text-sm text-gray-600">Revenue</div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
          <div className="h-64 bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2" />
              <p>Chart visualization would appear here</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Engagement</h3>
          <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <TrendingUp className="w-12 h-12 mx-auto mb-2" />
              <p>Chart visualization would appear here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                <div>
                  <span className="text-gray-900">{activity.action}</span>
                  <span className="text-gray-500"> - {activity.user}</span>
                </div>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSupport = () => (
    <div>
          <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Support Tickets</h2>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {supportTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">{ticket.user}</td>
                  <td className="px-6 py-4 text-gray-600">{ticket.subject}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      ticket.priority === "High" 
                        ? "bg-red-100 text-red-700" 
                        : ticket.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      ticket.status === "Open" 
                        ? "bg-orange-100 text-orange-700" 
                        : ticket.status === "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{ticket.date}</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 text-sm bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPromos = () => (
    <div>
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Promo Codes</h2>
        <button className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Generate Code
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promoCodes.map((promo, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-sky-600" />
                <span className="font-mono text-lg font-bold text-gray-900">{promo.code}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                promo.status === "Active" 
                  ? "bg-green-100 text-green-700" 
                  : "bg-gray-100 text-gray-700"
              }`}>
                {promo.status}
              </span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount:</span>
                <span className="font-semibold text-gray-900">{promo.discount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Uses:</span>
                <span className="font-semibold text-gray-900">{promo.uses} / {promo.limit}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Expires:</span>
                <span className="font-semibold text-gray-900">{promo.expiry}</span>
              </div>
            </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-sky-600 rounded-full"
                style={{ width: `${(promo.uses / promo.limit) * 100}%` }}
              ></div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Edit
              </button>
              <button className="flex-1 px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Deactivate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <img src="https://media.licdn.com/dms/image/v2/D4E0BAQFCMjXMd21cEw/company-logo_200_200/B4EZs9h8MQKoAI-/0/1766263866596/empoweruedu_logo?e=2147483647&v=beta&t=vAIKgUqk74nKGWwFKC7Zg_7PqhnxabN_OlAtSwlezVE" alt="empowerU" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <div className="font-bold text-gray-900">Admin Panel</div>
                <div className="text-xs text-gray-500">empowerU</div>
              </div>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("courses")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "courses"
                    ? "bg-sky-50 text-sky-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Courses</span>
              </button>
              <button
                onClick={() => setActiveTab("users")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "users"
                    ? "bg-sky-50 text-sky-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Users</span>
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "analytics"
                    ? "bg-sky-50 text-sky-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span>Analytics</span>
              </button>
              <button
                onClick={() => setActiveTab("support")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "support"
                    ? "bg-sky-50 text-sky-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Support</span>
              </button>
              <button
                onClick={() => setActiveTab("promos")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "promos"
                    ? "bg-sky-50 text-sky-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Tag className="w-5 h-5" />
                <span>Promo Codes</span>
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "settings"
                    ? "bg-sky-50 text-sky-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === "courses" && renderCourses()}
          {activeTab === "users" && renderUsers()}
          {activeTab === "analytics" && renderAnalytics()}
          {activeTab === "support" && renderSupport()}
          {activeTab === "promos" && renderPromos()}
          {activeTab === "settings" && (
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
              <p className="text-gray-600">Platform settings and configuration options would appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
