import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "Courses", page: "courses" },
    { label: "Dashboard", page: "dashboard" },
    { label: "Admin", page: "admin" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <img src="https://media.licdn.com/dms/image/v2/D4E0BAQFCMjXMd21cEw/company-logo_200_200/B4EZs9h8MQKoAI-/0/1766263866596/empoweruedu_logo?e=2147483647&v=beta&t=vAIKgUqk74nKGWwFKC7Zg_7PqhnxabN_OlAtSwlezVE" alt="EmpowerU" className="w-10 h-10 rounded-lg object-cover" />
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent">
              EmpowerU
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page
                    ? "text-sky-600"
                    : "text-gray-700 hover:text-sky-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-sky-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 ${
                  currentPage === item.page
                    ? "text-sky-600 bg-sky-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-sky-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
