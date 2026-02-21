import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-white">
      {/* Brand gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 30% 40%, #3b82f6 0%, transparent 55%), radial-gradient(ellipse 70% 60% at 70% 30%, #06b6d4 0%, transparent 50%), linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(219, 234, 254, 0.8) 100%)",
        }}
      />

      {/* Back button */}
      <button
        onClick={() => onNavigate("home")}
        className="absolute top-6 left-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors z-50 font-semibold text-sm"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>back</span>
      </button>

      {/* Main container */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center p-4">
        <div className="flex w-full max-w-6xl h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Branding & Illustration */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-100 via-blue-50 to-white p-12 flex-col justify-center items-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

            {/* Content */}
            <div className="relative z-20 text-center">
              {/* Large empowerU Logo */}
              <div className="mb-8 relative">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQFCMjXMd21cEw/company-logo_200_200/B4EZs9h8MQKoAI-/0/1766263866596/empoweruedu_logo?e=2147483647&v=beta&t=vAIKgUqk74nKGWwFKC7Zg_7PqhnxabN_OlAtSwlezVE" 
                  alt="empowerU" 
                  className="w-32 h-32 mx-auto rounded-3xl shadow-2xl transform hover:scale-110 transition-transform duration-300 object-cover"
                />
              </div>

              <h2 className="text-4xl font-black text-slate-800 mb-3">empowerU</h2>
              <p className="text-blue-600 text-lg font-medium mb-8">
                {isSignUp ? "Start Your Learning Journey" : "Learn. Grow. Succeed."}
              </p>

              {/* Features list */}
              <div className="space-y-4 text-left bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-slate-700 text-sm">AI-powered personalized learning</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-slate-700 text-sm">Gamified skill development</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-slate-700 text-sm">Real employer connections</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-center rounded-r-3xl overflow-y-auto"
            style={{
              background: "rgba(255, 255, 255, 0.9)"
            }}
          >
            {/* Mobile logo */}
            <div className="md:hidden text-center mb-4">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E0BAQFCMjXMd21cEw/company-logo_200_200/B4EZs9h8MQKoAI-/0/1766263866596/empoweruedu_logo?e=2147483647&v=beta&t=vAIKgUqk74nKGWwFKC7Zg_7PqhnxabN_OlAtSwlezVE" 
                alt="empowerU" 
                className="w-20 h-20 mx-auto rounded-2xl shadow-lg mb-2 object-cover"
              />
              <h2 className="text-2xl font-black text-slate-800">empowerU</h2>
            </div>

            {/* Form Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-1 transition-all duration-300 ease-in-out transform">
                {isSignUp ? "SIGN UP" : "SIGN IN"}
              </h3>
              <p className="text-slate-600 text-sm font-medium transition-all duration-300 ease-in-out">
                {isSignUp
                  ? "to unlock your potential"
                  : "to continue learning"}
              </p>
            </div>

            {/* Tab toggle */}
            <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2 px-2 rounded-lg font-bold transition-all duration-300 uppercase text-[10px] tracking-wider ${
                  !isSignUp
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <span className="inline-block">Sign In</span>
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2 px-2 rounded-lg font-bold transition-all duration-300 uppercase text-[10px] tracking-wider ${
                  isSignUp
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <span className="inline-block">Sign Up</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 transition-all duration-300">
              {/* Name field - Sign Up only */}
              {isSignUp && (
                <div>
                  <label className="block text-xs font-bold uppercase text-blue-600 mb-2 tracking-wider">
                    Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400/50 group-focus-within:text-blue-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3 bg-blue-50/50 border border-blue-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                      required={isSignUp}
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div>
                <label className="block text-xs font-bold uppercase text-blue-600 mb-2 tracking-wider">
                  E-Mail
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400/50 group-focus-within:text-blue-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your e-mail address"
                    className="w-full pl-12 pr-4 py-3 bg-blue-50/50 border border-blue-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label className="block text-xs font-bold uppercase text-blue-600 mb-2 tracking-wider">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400/50 group-focus-within:text-blue-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={isSignUp ? "Create a strong password" : "••••••••••••"}
                    className="w-full pl-12 pr-12 py-3 bg-blue-50/50 border border-blue-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400/50 hover:text-blue-500 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Terms checkbox - Sign Up only */}
              {isSignUp && (
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 rounded border-blue-300 bg-blue-50 text-blue-500 focus:ring-blue-400 cursor-pointer mt-0.5 accent-blue-500"
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-slate-700 leading-relaxed">
                    I agree to the{" "}
                    <span className="text-cyan-400 font-semibold cursor-pointer hover:underline">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-cyan-400 font-semibold cursor-pointer hover:underline">
                      Privacy Policy
                    </span>
                  </label>
                </div>
              )}

              {/* Forgot Password - Sign In only */}
              {!isSignUp && (
                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl font-bold uppercase text-sm tracking-wider text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-4 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #0891b2 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <div className="relative flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-r-transparent rounded-full animate-spin" />
                      <span>{isSignUp ? "Creating account..." : "Signing in..."}</span>
                    </>
                  ) : (
                    <span>{isSignUp ? "SIGN UP" : "SIGN IN"}</span>
                  )}
                </div>
              </button>
            </form>

            {/* Sign up/in toggle text */}
            <p className="text-center text-xs text-slate-700 mt-4">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(false)}
                    className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
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
                    className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                  >
                    Sign up
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
