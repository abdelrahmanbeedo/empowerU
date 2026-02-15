import { useState } from "react";
import { 
  Clock, Star, Users, Award, PlayCircle, FileText, CheckCircle2, 
  ChevronDown, ChevronRight, ArrowRight, Sparkles, Target, TrendingUp 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getPathwayById, getSuggestedPathways } from "../data/pathways";
import type { NavigateOptions } from "../App";

interface CourseDetailsPageProps {
  onNavigate: (page: string, options?: NavigateOptions) => void;
  courseId: number;
}

export function CourseDetailsPage({ onNavigate, courseId }: CourseDetailsPageProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const course = getPathwayById(courseId) ?? getPathwayById(1)!;
  const suggestedCourses = getSuggestedPathways(courseId);

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const totalDuration = "8 hours 45 minutes";

  const getIconForLessonType = (type: string) => {
    switch (type) {
      case "video":
        return <PlayCircle className="w-4 h-4" />;
      case "quiz":
        return <FileText className="w-4 h-4" />;
      case "activity":
        return <Target className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                {course.difficulty}
              </div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-sky-100 mb-6">{course.overview}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-sky-200">rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>{course.xp} XP</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Course Progress</div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-gradient-to-r from-sky-600 to-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">0% Complete</div>
                  </div>
                  <button 
                    onClick={() => onNavigate("dashboard")}
                    className="w-full px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                  >
                    Enroll Now
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Free to enroll • Start anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* AI Insights */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Course Preview</h3>
                  <p className="text-gray-700">
                    This course strengthens:{" "}
                    <span className="font-semibold">
                      {course.aiInsights.join(" • ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Course Content</h2>
                <div className="text-sm text-gray-600">
                  {course.modules.length} modules • {totalLessons} lessons • {totalDuration}
                </div>
              </div>

              <div className="space-y-3">
                {course.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {expandedModule === moduleIndex ? (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        )}
                        <div className="text-left">
                          <h3 className="font-semibold text-gray-900">
                            Module {moduleIndex + 1}: {module.title}
                          </h3>
                          <p className="text-sm text-gray-600">{module.lessons.length} lessons</p>
                        </div>
                      </div>
                    </button>

                    {expandedModule === moduleIndex && (
                      <div className="border-t border-gray-200 bg-gray-50">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="flex items-center justify-between px-4 py-3 border-b border-gray-200 last:border-b-0 hover:bg-white transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="text-gray-400">
                                {getIconForLessonType(lesson.type)}
                              </div>
                              <span className="text-gray-700">{lesson.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
              <div className="flex items-start gap-6">
                <ImageWithFallback
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {course.instructor.name}
                  </h3>
                  <p className="text-sky-600 mb-3">{course.instructor.title}</p>
                  <p className="text-gray-600">{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Course Stats */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Course Includes</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-sky-600" />
                    <span>{totalDuration} of content</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <PlayCircle className="w-5 h-5 text-sky-600" />
                    <span>{totalLessons} video lessons</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FileText className="w-5 h-5 text-sky-600" />
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Award className="w-5 h-5 text-sky-600" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <TrendingUp className="w-5 h-5 text-sky-600" />
                    <span>Lifetime access</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-sky-600 to-blue-500 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-2">Ready to get started?</h3>
                <p className="text-sky-100 text-sm mb-4">
                  Join thousands of learners improving their skills
                </p>
                <button 
                  onClick={() => onNavigate("dashboard")}
                  className="w-full px-6 py-3 bg-white text-sky-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Courses */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {suggestedCourses.map((suggestedCourse) => (
              <div
                key={suggestedCourse.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => onNavigate("course-details", { courseId: suggestedCourse.id })}
              >
                <div className="relative h-40 overflow-hidden">
                  <ImageWithFallback
                    src={suggestedCourse.image}
                    alt={suggestedCourse.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-semibold text-sky-600">
                    {suggestedCourse.xp} XP
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{suggestedCourse.rating}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{suggestedCourse.title}</h3>
                  <p className="text-sm text-gray-600">by {suggestedCourse.instructor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
