import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiTrendingUp,
  FiDollarSign,
  FiShoppingBag,
  FiUserPlus,
} from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <h1 className="text-xl font-bold text-indigo-600">ReactDash</h1>
          </div>
          <nav className="p-4 space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg"
            >
              <FiHome /> Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <FiBarChart2 /> Analytics
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <FiUsers /> Users
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <FiSettings /> Settings
            </a>
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
              AI
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h2 className="text-lg font-semibold text-gray-800">Overview</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Welcome back, Admin!</span>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Users</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  40,689
                </h3>
                <span className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
                  <FiTrendingUp /> +8.5% Up from yesterday
                </span>
              </div>
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl text-xl">
                <FiUserPlus />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">1,029</h3>
                <span className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
                  <FiTrendingUp /> +1.3% Up past week
                </span>
              </div>
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl text-xl">
                <FiShoppingBag />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Sales</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  $89,000
                </h3>
                <span className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                  -4.3% Down from yesterday
                </span>
              </div>
              <div className="p-3 bg-green-50 text-green-600 rounded-xl text-xl">
                <FiDollarSign />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Growth</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  +30.1%
                </h3>
                <span className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
                  <FiTrendingUp /> +12% this month
                </span>
              </div>
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl text-xl">
                <FiBarChart2 />
              </div>
            </div>
          </div>

          {/* Recent Activity Table Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-base font-bold text-gray-800 mb-4">
              Recent Transactions
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs text-gray-400 uppercase">
                    <th className="pb-3 font-semibold">Name</th>
                    <th className="pb-3 font-semibold">Date</th>
                    <th className="pb-3 font-semibold">Amount</th>
                    <th className="pb-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 text-gray-800 font-medium">
                      Alex Morgan
                    </td>
                    <td className="py-3 text-gray-500">20 Aug, 2026</td>
                    <td className="py-3 text-gray-800">$1,200.00</td>
                    <td className="py-3">
                      <span className="px-2.5 py-1 text-xs font-semibold text-green-700 bg-green-50 rounded-full">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-800 font-medium">
                      Sarah Connor
                    </td>
                    <td className="py-3 text-gray-500">19 Aug, 2026</td>
                    <td className="py-3 text-gray-800">$450.00</td>
                    <td className="py-3">
                      <span className="px-2.5 py-1 text-xs font-semibold text-yellow-700 bg-yellow-50 rounded-full">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-800 font-medium">John Doe</td>
                    <td className="py-3 text-gray-500">18 Aug, 2026</td>
                    <td className="py-3 text-gray-800">$890.50</td>
                    <td className="py-3">
                      <span className="px-2.5 py-1 text-xs font-semibold text-green-700 bg-green-50 rounded-full">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
