import { useState } from "react";
import { Search, Filter, Star, Clock, TrendingUp, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CoursesPageProps {
  onNavigate: (page: string) => void;
}

export function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Effective Communication",
      instructor: "Sarah Johnson",
      category: "Communication",
      difficulty: "Beginner",
      duration: "6 weeks",
      xp: 500,
      image: "https://images.unsplash.com/photo-1758691736821-f1a600c0c3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwc2tpbGxzJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MDQwNTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      students: 2341,
      description: "Master the art of clear and impactful communication in professional settings.",
    },
    {
      id: 2,
      title: "Leadership Essentials",
      instructor: "Michael Chen",
      category: "Leadership",
      difficulty: "Intermediate",
      duration: "8 weeks",
      xp: 750,
      image: "https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdGVhbXdvcmslMjBtZWV0aW5nfGVufDF8fHx8MTc3MDQwNTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      students: 1876,
      description: "Develop core leadership skills to inspire and guide your team to success.",
    },
    {
      id: 3,
      title: "Emotional Intelligence",
      instructor: "Dr. Emily Rodriguez",
      category: "Personal Development",
      difficulty: "Beginner",
      duration: "5 weeks",
      xp: 600,
      image: "https://images.unsplash.com/photo-1704793602305-78afd16cc043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBpbnRlbGxpZ2VuY2UlMjBlbXBhdGh5fGVufDF8fHx8MTc3MDQwNTkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      students: 1542,
      description: "Enhance your ability to understand and manage emotions effectively.",
    },
    {
      id: 4,
      title: "Team Collaboration",
      instructor: "David Park",
      category: "Teamwork",
      difficulty: "Beginner",
      duration: "4 weeks",
      xp: 450,
      image: "https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzcwMzAxMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6,
      students: 1234,
      description: "Learn to work effectively in teams and build strong collaborative relationships.",
    },
    {
      id: 5,
      title: "Time Management Mastery",
      instructor: "Lisa Anderson",
      category: "Productivity",
      difficulty: "Beginner",
      duration: "3 weeks",
      xp: 400,
      image: "https://images.unsplash.com/photo-1737505191896-8e3cb72e4df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eXxlbnwxfHx8fDE3NzAzMDk1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.5,
      students: 987,
      description: "Master time management techniques to boost productivity and reduce stress.",
    },
    {
      id: 6,
      title: "Critical Thinking",
      instructor: "Prof. James Wilson",
      category: "Problem Solving",
      difficulty: "Intermediate",
      duration: "6 weeks",
      xp: 650,
      image: "https://images.unsplash.com/photo-1765851802822-da3b17de20a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcml0aWNhbCUyMHRoaW5raW5nJTIwcHJvYmxlbSUyMHNvbHZpbmd8ZW58MXx8fHwxNzcwNDA2MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      students: 1654,
      description: "Develop analytical skills to solve complex problems and make better decisions.",
    },
    {
      id: 7,
      title: "Negotiation Skills",
      instructor: "Rachel Kim",
      category: "Communication",
      difficulty: "Advanced",
      duration: "7 weeks",
      xp: 800,
      image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWdvdGlhdGlvbiUyMGJ1c2luZXNzJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc3MDQwNjAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      students: 1432,
      description: "Learn advanced negotiation strategies for professional and personal success.",
    },
    {
      id: 8,
      title: "Conflict Resolution",
      instructor: "Dr. Maria Santos",
      category: "Leadership",
      difficulty: "Intermediate",
      duration: "5 weeks",
      xp: 550,
      image: "https://images.unsplash.com/photo-1653669487404-09c3617c2b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGRpdmVyc2UlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwb25saW5lfGVufDF8fHx8MTc3MDQwNTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      students: 1098,
      description: "Master techniques to resolve workplace conflicts and build harmonious teams.",
    },
  ];

  const categories = ["all", "Communication", "Leadership", "Personal Development", "Teamwork", "Productivity", "Problem Solving"];
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
      <div className="bg-gradient-to-r from-sky-600 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-sky-100">Learn Anytime, Grow Continuously</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => onNavigate("course-details")}
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
