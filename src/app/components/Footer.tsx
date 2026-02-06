import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">E</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">
                EmpowerU
              </span>
            </div>
            <p className="text-sm mb-4">
              Empowering learners with AI-driven soft skills training for real-world success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
                <a href="#" className="hover:text-sky-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
                <a href="#" className="hover:text-sky-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
                <a href="#" className="hover:text-sky-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>support@empoweru.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>+20 01012345678</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Egypt, Cairo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2026 EmpowerU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
