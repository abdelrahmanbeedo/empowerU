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
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Brand gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #030213 0%, #1e293b 50%, #0f172a 100%)",
        }}
      />

      {/* Back button */}
      <button
        onClick={() => onNavigate("home")}
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-cyan-300 transition-colors z-50 font-semibold text-sm"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>back</span>
      </button>

      {/* Main container */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center p-4">
        <div className="flex w-full max-w-6xl h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Branding & Illustration */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-12 flex-col justify-center items-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

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

              <h2 className="text-4xl font-black text-white mb-3">empowerU</h2>
              <p className="text-cyan-200 text-lg font-medium mb-8">
                {isSignUp ? "Start Your Learning Journey" : "Learn. Grow. Succeed."}
              </p>

              {/* Features list */}
              <div className="space-y-4 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <p className="text-white/90 text-sm">AI-powered personalized learning</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <p className="text-white/90 text-sm">Gamified skill development</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <p className="text-white/90 text-sm">Real employer connections</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-slate-800 via-slate-750 to-slate-700 p-8 md:p-12 flex flex-col justify-center"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
            }}
          >
            {/* Mobile logo */}
            <div className="md:hidden text-center mb-8">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E0BAQFCMjXMd21cEw/company-logo_200_200/B4EZs9h8MQKoAI-/0/1766263866596/empoweruedu_logo?e=2147483647&v=beta&t=vAIKgUqk74nKGWwFKC7Zg_7PqhnxabN_OlAtSwlezVE" 
                alt="empowerU" 
                className="w-20 h-20 mx-auto rounded-2xl shadow-lg mb-4 object-cover"
              />
              <h2 className="text-2xl font-black text-white">empowerU</h2>
            </div>

            {/* Form Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {isSignUp ? "SIGN UP" : "SIGN IN"}
              </h3>
              <p className="text-slate-400 text-sm font-medium">
                {isSignUp
                  ? "to unlock your potential"
                  : "to continue learning"}
              </p>
            </div>

            {/* Tab toggle */}
            <div className="flex gap-2 mb-8 bg-slate-700/50 p-1 rounded-xl border border-slate-600/50">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all duration-300 uppercase text-xs tracking-wider ${
                  !isSignUp
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all duration-300 uppercase text-xs tracking-wider ${
                  isSignUp
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field - Sign Up only */}
              {isSignUp && (
                <div>
                  <label className="block text-xs font-bold uppercase text-cyan-300 mb-2 tracking-wider">
                    Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/50 group-focus-within:text-cyan-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      required={isSignUp}
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div>
                <label className="block text-xs font-bold uppercase text-cyan-300 mb-2 tracking-wider">
                  E-Mail
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/50 group-focus-within:text-cyan-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your e-mail address"
                    className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label className="block text-xs font-bold uppercase text-cyan-300 mb-2 tracking-wider">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/50 group-focus-within:text-cyan-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={isSignUp ? "Create a strong password" : "••••••••••••"}
                    className="w-full pl-12 pr-12 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400/50 hover:text-cyan-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Terms checkbox - Sign Up only */}
              {isSignUp && (
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 rounded border-slate-500 bg-slate-600/50 text-cyan-500 focus:ring-cyan-400 cursor-pointer mt-0.5 accent-cyan-500"
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-slate-300 leading-relaxed">
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
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-4 rounded-xl font-bold uppercase text-sm tracking-wider text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-8 relative overflow-hidden group"
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
            <p className="text-center text-sm text-slate-300 mt-8">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(false)}
                    className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
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
                    className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
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
