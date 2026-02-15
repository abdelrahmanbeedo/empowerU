import { useState } from "react";
import { Search, Filter, Star, Clock, TrendingUp, ChevronDown, ChevronRight, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { NavigateOptions } from "../App";

const CAREER_PATHWAYS = [
  { id: 1, name: "Business Analyst" },
  { id: 2, name: "Market Research Analyst" },
  { id: 3, name: "Technical Sales Representative" },
  { id: 4, name: "Project / Operations Coordinator" },
  { id: 5, name: "Marketing Coordinator" },
];

interface CoursesPageProps {
  onNavigate: (page: string, options?: NavigateOptions) => void;
}

export function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Business Analyst",
      instructor: "Sarah Johnson",
      category: "Business",
      difficulty: "Intermediate",
      duration: "8 weeks",
      xp: 750,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.9,
      students: 1876,
      description: "Analyze requirements, model processes, and bridge business needs with solutions.",
    },
    {
      id: 2,
      title: "Market Research Analyst",
      instructor: "Dr. Emily Rodriguez",
      category: "Research",
      difficulty: "Intermediate",
      duration: "6 weeks",
      xp: 600,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.8,
      students: 1542,
      description: "Gather data, run analysis, and deliver insights that drive strategy.",
    },
    {
      id: 3,
      title: "Technical Sales Representative",
      instructor: "Michael Chen",
      category: "Sales",
      difficulty: "Intermediate",
      duration: "6 weeks",
      xp: 650,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.7,
      students: 1234,
      description: "Sell technical products and services while building lasting client relationships.",
    },
    {
      id: 4,
      title: "Project / Operations Coordinator",
      instructor: "Lisa Anderson",
      category: "Operations",
      difficulty: "Beginner",
      duration: "7 weeks",
      xp: 700,
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.8,
      students: 1654,
      description: "Coordinate projects and day-to-day operations for smooth delivery.",
    },
    {
      id: 5,
      title: "Marketing Coordinator",
      instructor: "David Park",
      category: "Marketing",
      difficulty: "Beginner",
      duration: "5 weeks",
      xp: 550,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.7,
      students: 1420,
      description: "Support campaigns, content, and marketing operations from planning to execution.",
    },
  ];

  const categories = ["all", "Business", "Research", "Sales", "Operations", "Marketing"];
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || course.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="text-white py-16" style={{ background: "linear-gradient(135deg, #2563eb 0%, #0891b2 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Pathways &amp; Courses</h1>
          <p className="text-xl text-white/90 font-secondary">Learn anytime, grow continuously</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Career Pathways list (arrow + document icon) */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Career pathways</h2>
          <ul className="space-y-1">
            {CAREER_PATHWAYS.map((pathway) => (
              <li key={pathway.id}>
                <button
                  type="button"
                  onClick={() => onNavigate("course-details", { courseId: pathway.id })}
                  className="w-full flex items-center gap-3 py-3 px-2 rounded-lg text-left text-gray-800 hover:bg-gray-50 transition-colors group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-sky-600 transition-colors" />
                  <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="font-medium">{pathway.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Filters Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === "all" ? "All Levels" : difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === "all" ? "All Levels" : difficulty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => onNavigate("course-details", { courseId: course.id })}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => onNavigate("course-details", { courseId: course.id })}
                    className="px-6 py-2 bg-white text-sky-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    View Details
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-sky-600">
                  {course.xp} XP
                </div>
                <div className="absolute top-4 left-4 bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {course.difficulty}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{course.students.toLocaleString()} students</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <p className="text-gray-600 text-sm mb-4">by {course.instructor}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <span className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-medium">
                    {course.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}
