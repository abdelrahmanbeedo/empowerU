import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { CoursesPage } from "./components/CoursesPage";
import { CourseDetailsPage } from "./components/CourseDetailsPage";
import { UserDashboard } from "./components/UserDashboard";
import { AdminPanel } from "./components/AdminPanel";

export type NavigateOptions = { courseId?: number };

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(1);

  const onNavigate = (page: string, options?: NavigateOptions) => {
    if (options?.courseId != null) setSelectedCourseId(options.courseId);
    else if (page === "course-details" && selectedCourseId == null) setSelectedCourseId(1);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage onNavigate={onNavigate} />;
      case "courses":
        return <CoursesPage onNavigate={onNavigate} />;
      case "course-details":
        return <CourseDetailsPage onNavigate={onNavigate} courseId={selectedCourseId ?? 1} />;
      case "dashboard":
        return <UserDashboard onNavigate={setCurrentPage} />;
      case "admin":
        return <AdminPanel />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage !== "admin" && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
      <main className="flex-1">
        {renderPage()}
      </main>
      {currentPage !== "admin" && <Footer />}
    </div>
  );
}
