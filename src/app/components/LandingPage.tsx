import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Brain, Trophy, Target, Users, Play, Star, CheckCircle2, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Driven Evaluation",
      description: "Get personalized feedback and human-centered coaching built for growth.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      title: "Gamified Learning",
      description: "Earn meaningful XP, unlock milestones, and track real progress.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Real Employability",
      description: "Build skills employers value and demonstrate impact with portfolios.",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Effective Communication",
      instructor: "Sarah Johnson",
      duration: "6 weeks",
      xp: 500,
      image: "https://images.unsplash.com/photo-1758691736821-f1a600c0c3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwc2tpbGxzJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MDQwNTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      students: 2341,
    },
    {
      id: 2,
      title: "Leadership Essentials",
      instructor: "Michael Chen",
      duration: "8 weeks",
      xp: 750,
      image: "https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdGVhbXdvcmslMjBtZWV0aW5nfGVufDF8fHx8MTc3MDQwNTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      students: 1876,
    },
    {
      id: 3,
      title: "Emotional Intelligence",
      instructor: "Dr. Emily Rodriguez",
      duration: "5 weeks",
      xp: 600,
      image: "https://images.unsplash.com/photo-1704793602305-78afd16cc043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBpbnRlbGxpZ2VuY2UlMjBlbXBhdGh5fGVufDF8fHx8MTc3MDQwNTkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      students: 1542,
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA0MDU5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "EmpowerU transformed my communication skills. The AI feedback is incredibly accurate and helped me land my dream job!",
    },
    {
      name: "Maria Santos",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMzQzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The gamified approach kept me engaged throughout. I've earned 15 badges and I'm now leading a team of 10!",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Your Path",
      description: "Browse our curated soft skills courses and select what matters to you.",
    },
    {
      number: "2",
      title: "Learn & Practice",
      description: "Engage with interactive lessons, videos, and real-world scenarios.",
    },
    {
      number: "3",
      title: "Get AI Feedback",
      description: "Receive personalized insights on your progress and areas for improvement.",
    },
    {
      number: "4",
      title: "Earn & Grow",
      description: "Collect XP, unlock achievements, and showcase your skills to employers.",
    },
  ];

  // scroll / reveal logic
  useEffect(() => {
    const revealables = Array.from(document.querySelectorAll("[data-reveal]") as NodeListOf<HTMLElement>);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("reveal-in");
      });
    }, { threshold: 0.15 });
    revealables.forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  // simple parallax background shapes
  const heroRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const root = heroRef?.current || document;
    const shapes = Array.from(root.querySelectorAll("[data-parallax]") as NodeListOf<HTMLElement>);
    if (!shapes.length) return;

    // measure initial document positions for each shape
    const initialTops = new Map<HTMLElement, number>();
    shapes.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const docTop = rect.top + window.scrollY;
      initialTops.set(el, docTop);
      el.style.willChange = "transform";
      el.style.transition = ""; // instant updates for responsiveness
    });

    let ticking = false;
    function update() {
      const y = window.scrollY || window.pageYOffset;
      shapes.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.2");
        const init = initialTops.get(el) || 0;
        // offset is proportional to how far we've scrolled past the element
        const offset = Math.round((y - init) * speed * 0.6); // multiplier to tune strength
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    // initialize and bind
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      // recompute positions on resize
      shapes.forEach((el) => {
        const rect = el.getBoundingClientRect();
        initialTops.set(el, rect.top + window.scrollY);
      });
      update();
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      shapes.forEach((el) => {
        el.style.willChange = "auto";
        el.style.transition = "";
        el.style.transform = "";
      });
    };
  }, []);

  // 3D carousel state (rotate container)
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const step = 360 / Math.max(3, courses.length);
    const id = setInterval(() => setAngle((a) => (a + step) % 360), 3000);
    return () => clearInterval(id);
  }, [courses.length]);

  // desktop check for carousel
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    function onResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <style>{`
        .reveal-in{opacity:1;transform:none;transition:opacity .7s ease, transform .7s cubic-bezier(.2,.9,.3,1)}
        /* keep sections visible by default to avoid content disappearing before reveal */
        [data-reveal]{opacity:1;transform:none}
        .carousel-3d-wrapper{perspective:1200px;width:100%;height:100%;display:flex;align-items:center;justify-content:center}
        .carousel-3d{width:100%;height:100%;transform-style:preserve-3d;transition:transform 600ms ease-out;transform-origin:center center}
        .carousel-3d > .card{position:absolute;width:280px;height:224px;left:50%;top:50%;transform-style:preserve-3d}
      `}</style>

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50">
        <div data-parallax="0.06" className="absolute -left-32 -top-20 w-80 h-80 bg-gradient-to-br from-sky-300 to-blue-300 rounded-full opacity-80 blur-xl pointer-events-none z-10"></div>
        <div data-parallax="-0.04" className="absolute -right-20 top-40 w-96 h-96 bg-gradient-to-br from-white to-sky-200 rounded-full opacity-70 blur-xl pointer-events-none z-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-sky-50 rounded-full mb-6 text-sky-700 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 text-sky-600" />
                Human-first learning, powered by AI
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">Level up soft skills that actually land jobs</h1>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl">Guided pathways, real practice, and feedback that helps you improve — not just check boxes. Designed for clarity and progress.</p>
              <div className="mt-8 flex gap-4">
                <button onClick={() => onNavigate("courses")} className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">Start Learning <ArrowRight className="w-4 h-4" /></button>
                <button onClick={() => onNavigate("courses")} className="inline-flex items-center gap-3 border border-slate-200 px-6 py-3 rounded-lg text-slate-700 hover:bg-slate-50 transition">Browse Courses</button>
              </div>
              <div className="mt-10 flex items-center gap-10 text-sm text-slate-600">
                <div><div className="text-2xl font-bold">10K+</div><div>Active learners</div></div>
                <div><div className="text-2xl font-bold">50+</div><div>Expert courses</div></div>
                <div><div className="text-2xl font-bold">95%</div><div>Completion rate</div></div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center w-full">
              <div className="carousel-3d-wrapper" style={{ width: '600px', height: '16rem' }}>
                <div className="carousel-3d" style={{ transform: `rotateY(${angle}deg)` }}>
                    {isDesktop && courses.map((c, i) => {
                      const baseAngle = (360 / courses.length) * i;
                      const radius = 280;
                      return (
                        <div 
                          key={c.id} 
                          className="card transition-transform duration-600" 
                          style={{ 
                            transform: `translate(-50%, -50%) rotateY(${baseAngle}deg) translateZ(${radius}px)`
                          }}
                        >
                          <div className="h-56 rounded-2xl overflow-hidden shadow-2xl bg-white cursor-pointer" onClick={() => onNavigate("course-details")}>
                            <div className="h-32 overflow-hidden">
                              <ImageWithFallback src={c.image} alt={c.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                              <div className="text-sm text-sky-600 font-semibold">Featured</div>
                              <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                              <p className="text-sm text-slate-600">{c.instructor} • {c.duration}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            <div className="lg:hidden w-full">
              <div className="w-full h-64 overflow-x-auto flex gap-4 px-4 py-4 snap-x snap-mandatory">
                {courses.map((c) => (
                  <div key={c.id} className="min-w-[220px] rounded-xl overflow-hidden shadow bg-white flex-shrink-0 snap-center cursor-pointer" onClick={() => onNavigate("course-details")}>
                    <div className="h-32 overflow-hidden"><ImageWithFallback src={c.image} alt={c.title} className="w-full h-full object-cover" /></div>
                    <div className="p-3"><h4 className="font-semibold text-sm">{c.title}</h4><div className="text-xs text-slate-500">{c.instructor}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections with scroll animation */}
      <section className="max-w-7xl mx-auto px-6 py-20" data-reveal>
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow" data-reveal>
              <div className="w-14 h-14 bg-sky-50 rounded-lg flex items-center justify-center mb-4">{f.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
              <p className="text-sm text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sky-50 py-16" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Featured Courses</h2>
              <p className="text-sm text-slate-600">A curated selection to get you started</p>
            </div>
            <button onClick={() => onNavigate("courses")} className="text-sky-700 font-semibold">View All <ArrowRight className="w-4 h-4 inline" /></button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition" onClick={() => onNavigate("course-details")}>
                <div className="h-44 overflow-hidden">
                  <ImageWithFallback src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-500">{course.instructor}</div>
                    <div className="text-sm text-sky-600 font-semibold">{course.xp} XP</div>
                  </div>
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-reveal>
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">What learners say</h2>
          <p className="text-slate-600 mb-8">Stories from people who used EmpowerU to change careers and grow.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow">
                <p className="text-slate-700 mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <ImageWithFallback src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-sky-600 to-blue-500 text-white py-16" data-reveal>
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-6 text-sky-100">Sign up and begin a guided path to stronger soft skills.</p>
          <button onClick={() => onNavigate("courses")} className="bg-white text-sky-700 px-6 py-3 rounded-lg font-semibold">Join for free</button>
        </div>
      </section>
    </div>
  );
}
