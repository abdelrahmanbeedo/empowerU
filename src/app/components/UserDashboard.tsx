import { 
  Award, TrendingUp, Target, Flame, Crown, Star, ChevronRight, 
  ArrowRight, Brain, Trophy, Zap 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { NavigateOptions } from "../App";

interface UserDashboardProps {
  onNavigate: (page: string, options?: NavigateOptions) => void;
}

export function UserDashboard({ onNavigate }: UserDashboardProps) {
  const user = {
    name: "Alex Thompson",
    photo: "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA0MDU5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    streak: 12,
    level: 8,
    currentXP: 2450,
    nextLevelXP: 3000,
    totalXP: 12450,
  };

  const ongoingCourses = [
    {
      id: 1,
      title: "Effective Communication",
      instructor: "Sarah Johnson",
      progress: 65,
      image: "https://images.unsplash.com/photo-1758691736821-f1a600c0c3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwc2tpbGxzJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MDQwNTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      nextLesson: "Module 4: Active Listening",
      xpEarned: 325,
      totalXP: 500,
    },
    {
      id: 2,
      title: "Leadership Essentials",
      instructor: "Michael Chen",
      progress: 40,
      image: "https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdGVhbXdvcmslMjBtZWV0aW5nfGVufDF8fHx8MTc3MDQwNTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      nextLesson: "Module 3: Team Motivation",
      xpEarned: 300,
      totalXP: 750,
    },
    {
      id: 3,
      title: "Time Management Mastery",
      instructor: "Lisa Anderson",
      progress: 85,
      image: "https://images.unsplash.com/photo-1737505191896-8e3cb72e4df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eXxlbnwxfHx8fDE3NzAzMDk1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      nextLesson: "Final Project",
      xpEarned: 340,
      totalXP: 400,
    },
  ];

  const badges = [
    { id: 1, name: "First Course", icon: Award, color: "text-blue-500", unlocked: true },
    { id: 2, name: "5-Day Streak", icon: Flame, color: "text-orange-500", unlocked: true },
    { id: 3, name: "Quick Learner", icon: Zap, color: "text-yellow-500", unlocked: true },
    
    { id: 5, name: "10 Courses", icon: Trophy, color: "text-green-500", unlocked: false },
    { id: 6, name: "Master Level", icon: Crown, color: "text-amber-500", unlocked: false },
    { id: 4, name: "Communication Pro", icon: Star, color: "text-sky-500", unlocked: true },
  ];

  const recommendedSkills = [
    {
      skill: "Emotional Intelligence",
      reason: "Complements your communication skills",
      xp: 600,
    },
    {
      skill: "Conflict Resolution",
      reason: "Perfect for leadership development",
      xp: 550,
    },
    {
      skill: "Critical Thinking",
      reason: "Enhance your problem-solving abilities",
      xp: 650,
    },
  ];

  const leaderboard = [
    { rank: 1, name: "Emma Wilson", xp: 15240, avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMzQzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { rank: 2, name: "John Davis", xp: 14890, avatar: "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA0MDU5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { rank: 3, name: "You", xp: 12450, avatar: user.photo, isCurrentUser: true },
    { rank: 4, name: "Sarah Miller", xp: 11230, avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMzQzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { rank: 5, name: "Mike Johnson", xp: 10980, avatar: "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA0MDU5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  ];

  const progressPercentage = (user.currentXP / user.nextLevelXP) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="rounded-2xl p-8 mb-8 text-white" style={{ background: "linear-gradient(135deg, #2563eb 0%, #0891b2 100%)" }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <ImageWithFallback
                src={user.photo}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
                <div className="flex items-center gap-4 text-sky-100">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5" />
                    <span className="font-semibold">{user.streak} day streak</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    <span className="font-semibold">Level {user.level}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[200px]">
              <div className="text-sm text-sky-100 mb-2">Level Progress</div>
              <div className="h-3 bg-white/30 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="text-sm font-semibold">
                {user.currentXP} / {user.nextLevelXP} XP
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Ongoing Courses */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Courses</h2>
                <button 
                  onClick={() => onNavigate("courses")}
                  className="text-sky-600 hover:text-sky-700 font-semibold text-sm flex items-center gap-1"
                >
                  View All
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {ongoingCourses.map((course) => (
                  <div
                    key={course.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => onNavigate("course-details", { courseId: course.id })}
                  >
                    <div className="flex gap-4">
                      <ImageWithFallback
                        src={course.image}
                        alt={course.title}
                        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                        <div className="mb-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">Progress</span>
                            <span className="text-sm font-semibold text-sky-600">{course.progress}%</span>
                          </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-sky-600 to-blue-500 rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Next: {course.nextLesson}</span>
                          <span className="text-xs font-semibold text-sky-600">
                            {course.xpEarned}/{course.totalXP} XP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onNavigate("course-details", { courseId: ongoingCourses[0]?.id ?? 1 })}
                className="w-full mt-4 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                Continue Learning
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Performance Insights */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-sky-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Performance Insights</h2>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Great progress this week!</span> You've completed 3 lessons and earned 240 XP. Your communication skills have improved by 15%.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-sky-600 mb-1">3</div>
                    <div className="text-xs text-gray-600">Lessons Completed</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">4.2h</div>
                    <div className="text-xs text-gray-600">Study Time</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
                    <div className="text-xs text-gray-600">Avg Score</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Skills */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
              </div>
              <div className="space-y-3">
                {recommendedSkills.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => onNavigate("courses")}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{item.skill}</h3>
                      <span className="px-2 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-semibold">
                        {item.xp} XP
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* XP & Badges */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Achievements</h2>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg ${
                      badge.unlocked 
                        ? "bg-gradient-to-br from-sky-50 to-blue-50" 
                        : "bg-gray-100"
                    }`}
                  >
                    <badge.icon 
                      className={`w-8 h-8 mb-2 ${
                        badge.unlocked ? badge.color : "text-gray-400"
                      }`}
                    />
                    <span className={`text-xs text-center ${
                      badge.unlocked ? "text-gray-700 font-medium" : "text-gray-400"
                    }`}>
                      {badge.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-center text-sm text-gray-600">
                4 of 6 badges unlocked
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Leaderboard</h2>
                <TrendingUp className="w-5 h-5 text-sky-600" />
              </div>
              <p className="text-sm text-gray-600 mb-4 font-secondary">Last week&apos;s top performers</p>
              <div className="space-y-3">
                {leaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      entry.isCurrentUser 
                        ? "bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-300" 
                        : "bg-gray-50"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      entry.rank === 1 
                        ? "bg-amber-500 text-white" 
                        : entry.rank === 2 
                        ? "bg-gray-400 text-white" 
                        : entry.rank === 3 
                        ? "bg-orange-600 text-white" 
                        : "bg-gray-300 text-gray-700"
                    }`}>
                      {entry.rank}
                    </div>
                    <ImageWithFallback
                      src={entry.avatar}
                      alt={entry.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold truncate ${
                          entry.isCurrentUser ? "text-sky-900" : "text-gray-900"
                        }`}>
                        {entry.name}
                      </div>
                      <div className="text-xs text-sky-600">{entry.xp.toLocaleString()} XP</div>
                    </div>
                    {entry.rank === 1 && <Crown className="w-5 h-5 text-amber-500" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl p-6 text-white" style={{ background: "linear-gradient(135deg, #2563eb 0%, #0891b2 100%)" }}>
              <h3 className="font-semibold mb-2">Keep the momentum going!</h3>
              <p className="text-sky-100 text-sm mb-4">
                Complete one more lesson today to maintain your streak
              </p>
              <button 
                onClick={() => onNavigate("course-details", { courseId: ongoingCourses[0]?.id ?? 1 })}
                className="w-full px-6 py-3 bg-white text-sky-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Start Next Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
