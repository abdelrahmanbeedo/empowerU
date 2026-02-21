import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onNavigate("dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, #2563eb 0%, #0891b2 100%)",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "linear-gradient(135deg, #2563eb, #0891b2)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "linear-gradient(135deg, #0891b2, #2563eb)" }} />

      {/* Back button */}
      <button
        onClick={() => onNavigate("home")}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-700 hover:text-sky-600 transition-colors z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </button>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Logo and header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E0BAQFCMjXMd21cEw/company-logo_200_200/B4EZs9h8MQKoAI-/0/1766263866596/empoweruedu_logo?e=2147483647&v=beta&t=vAIKgUqk74nKGWwFKC7Zg_7PqhnxabN_OlAtSwlezVE"
                alt="empowerU"
                className="w-16 h-16 rounded-xl object-cover shadow-lg"
              />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: "linear-gradient(135deg, #2563eb 0%, #0891b2 100%)" }}>
              empowerU
            </h1>
            <p className="text-gray-600 text-sm">
              {isSignUp ? "Start your learning journey" : "Welcome back"}
            </p>
          </div>

          {/* Toggle tabs */}
          <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                !isSignUp
                  ? "bg-white text-sky-600 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                isSignUp
                  ? "bg-white text-sky-600 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                    required={isSignUp}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={isSignUp ? "Create a strong password" : "Enter your password"}
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {!isSignUp && (
                <button
                  type="button"
                  className="text-xs text-sky-600 hover:text-sky-700 font-semibold mt-2 transition-colors"
                >
                  Forgot password?
                </button>
              )}
            </div>

            {isSignUp && (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                  required
                />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  I agree to the{" "}
                  <span className="text-sky-600 font-semibold cursor-pointer hover:underline">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-sky-600 font-semibold cursor-pointer hover:underline">
                    Privacy Policy
                  </span>
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: isLoading
                  ? "linear-gradient(135deg, #2563eb80 0%, #0891b280 100%)"
                  : "linear-gradient(135deg, #2563eb 0%, #0891b2 100%)",
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-r-transparent rounded-full animate-spin" />
                  {isSignUp ? "Creating account..." : "Signing in..."}
                </div>
              ) : isSignUp ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Google", icon: "🔍" },
              { name: "GitHub", icon: "⚙️" },
              { name: "LinkedIn", icon: "💼" },
            ].map((provider) => (
              <button
                key={provider.name}
                type="button"
                className="py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-lg">{provider.icon}</span>
              </button>
            ))}
          </div>

          {/* Footer text */}
          <p className="text-center text-sm text-gray-600 mt-6">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                >
                  Sign up
                </button>
              </>
            )}
          </p>
        </div>

        {/* Features preview */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { icon: "🎓", label: "Learn skills" },
            { icon: "🏆", label: "Earn badges" },
            { icon: "🚀", label: "Get hired" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/80 transition-all"
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <p className="text-xs font-semibold text-gray-700">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
