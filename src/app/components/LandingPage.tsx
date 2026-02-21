import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Brain, Trophy, Target, Star, Sparkles, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { NavigateOptions } from "../App";

interface LandingPageProps {
  onNavigate: (page: string, options?: NavigateOptions) => void;
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

  const pathways = [
    {
      id: 1,
      title: "Business Analyst",
      instructor: "Sarah Johnson",
      duration: "8 weeks",
      xp: 750,
      difficulty: "Intermediate",
      category: "Business",
      description: "Analyze requirements, model processes, and bridge business needs with solutions.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.9,
      students: 1876,
    },
    {
      id: 2,
      title: "Market Research Analyst",
      instructor: "Dr. Emily Rodriguez",
      duration: "6 weeks",
      xp: 600,
      difficulty: "Intermediate",
      category: "Research",
      description: "Gather data, run analysis, and deliver insights that drive strategy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.8,
      students: 1542,
    },
    {
      id: 3,
      title: "Technical Sales Representative",
      instructor: "Michael Chen",
      duration: "6 weeks",
      xp: 650,
      difficulty: "Intermediate",
      category: "Sales",
      description: "Sell technical products and services while building lasting client relationships.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.7,
      students: 1234,
    },
    {
      id: 4,
      title: "Project / Operations Coordinator",
      instructor: "Lisa Anderson",
      duration: "7 weeks",
      xp: 700,
      difficulty: "Beginner",
      category: "Operations",
      description: "Coordinate projects and day-to-day operations for smooth delivery.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.8,
      students: 1654,
    },
    {
      id: 5,
      title: "Marketing Coordinator",
      instructor: "David Park",
      duration: "5 weeks",
      xp: 550,
      difficulty: "Beginner",
      category: "Marketing",
      description: "Support campaigns, content, and marketing operations from planning to execution.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.7,
      students: 1420,
    },
  ];

  const topPerformers = [
    { name: "Emma Wilson", xp: 15240, avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200", rank: 1 },
    { name: "John Davis", xp: 14890, avatar: "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200", rank: 2 },
    { name: "Maria Santos", xp: 13200, avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200", rank: 3 },
    { name: "Alex Thompson", xp: 12450, avatar: "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200", rank: 4 },
    { name: "Sarah Miller", xp: 11230, avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200", rank: 5 },
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
    const step = 360 / Math.max(3, pathways.length);
    const id = setInterval(() => setAngle((a) => (a + step) % 360), 3000);
    return () => clearInterval(id);
  }, [pathways.length]);

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
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      <style>{`
        .reveal-in{opacity:1;transform:none;transition:opacity .7s ease, transform .7s cubic-bezier(.2,.9,.3,1)}
        [data-reveal]{opacity:1;transform:none}
        .carousel-3d-wrapper{perspective:1200px;width:100%;height:100%;display:flex;align-items:center;justify-content:center}
        .carousel-3d{width:100%;height:100%;transform-style:preserve-3d;transition:transform 600ms ease-out;transform-origin:center center}
        .carousel-3d > .card{position:absolute;width:280px;height:224px;left:50%;top:50%;transform-style:preserve-3d}
        .hero-gradient{background:var(--gradient-empoweru);background-color:#f8fafc}
        .grain{position:absolute;inset:0;opacity:.04;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
        .pathway-card:hover{transform:translateY(-4px);box-shadow:0 20px 40px -12px rgba(0,0,0,.12)}
      `}</style>

      {/* Hero — blue-to-teal gradient blob + grain */}
      <section ref={heroRef} className="relative overflow-hidden hero-gradient min-h-[90vh] flex flex-col justify-center">
        <div className="grain z-10" aria-hidden />
        <div data-parallax="0.06" className="absolute -left-32 -top-20 w-[28rem] h-[28rem] rounded-full opacity-90 blur-3xl pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(59,130,246,.5) 0%, transparent 70%)" }}></div>
        <div data-parallax="-0.04" className="absolute -right-20 top-40 w-96 h-96 rounded-full opacity-80 blur-3xl pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(6,182,212,.45) 0%, transparent 70%)" }}></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-white/80 backdrop-blur rounded-full mb-6 text-sky-700 text-sm font-medium border border-sky-100">
                <Sparkles className="w-4 h-4 mr-2 text-sky-600" />
                Human-first learning, powered by AI
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">Level up soft skills that actually land jobs</h1>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl font-secondary">Guided pathways, real practice, and feedback that helps you improve — not just check boxes. Designed for clarity and progress.</p>
              <div className="mt-8 flex gap-4">
                <button onClick={() => onNavigate("courses")} className="inline-flex items-center gap-3 bg-[var(--gradient-empoweru-cta)] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">Start Learning <ArrowRight className="w-4 h-4" /></button>
                <button onClick={() => onNavigate("courses")} className="inline-flex items-center gap-3 border border-slate-200 px-6 py-3 rounded-xl text-slate-700 hover:bg-white/80 hover:border-sky-200 transition-all">Browse Courses <ArrowRight className="w-4 h-4 opacity-70" /></button>
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
                    {isDesktop && pathways.map((c, i) => {
                      const baseAngle = (360 / pathways.length) * i;
                      const radius = 280;
                      return (
                        <div 
                          key={c.id} 
                          className="card transition-transform duration-600" 
                          style={{ 
                            transform: `translate(-50%, -50%) rotateY(${baseAngle}deg) translateZ(${radius}px)`
                          }}
                        >
                          <div className="h-56 rounded-2xl overflow-hidden shadow-2xl bg-white cursor-pointer" onClick={() => onNavigate("course-details", { courseId: c.id })}>
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
                {pathways.map((c) => (
                  <div key={c.id} className="min-w-[220px] rounded-xl overflow-hidden shadow bg-white flex-shrink-0 snap-center cursor-pointer" onClick={() => onNavigate("course-details", { courseId: c.id })}>
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
            <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300" data-reveal>
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-4">{f.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
              <p className="text-sm text-slate-600 font-secondary">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Pathways — pathway cards (difficulty, XP, rating, description, category) */}
      <section className="bg-slate-50/80 py-16" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Trending Pathways</h2>
              <p className="text-sm text-slate-600 font-secondary">Job-ready paths learners are taking this week</p>
            </div>
            <button onClick={() => onNavigate("courses")} className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors">
              View all pathways <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((pathway) => (
              <div
                key={pathway.id}
                className="pathway-card bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => onNavigate("course-details", { courseId: pathway.id })}
              >
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback src={pathway.image} alt={pathway.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold">
                    {pathway.difficulty}
                  </span>
                  <span className="absolute top-3 right-3 bg-slate-700/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {pathway.xp} XP
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold">{pathway.rating}</span>
                    <span className="text-sm text-slate-500">{pathway.students.toLocaleString()} students</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{pathway.title}</h3>
                  <p className="text-sm text-slate-600 font-secondary mb-2 line-clamp-2">{pathway.description}</p>
                  <p className="text-sm text-slate-500 mb-2">by {pathway.instructor}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                      <Clock className="w-4 h-4" /> {pathway.duration}
                    </span>
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">
                      {pathway.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Last week's top performers — user-centric */}
      <section className="py-16" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Last week&apos;s top performers</h2>
              <p className="text-sm text-slate-600 font-secondary">Learners who earned the most XP — keep the momentum going</p>
            </div>
            <button onClick={() => onNavigate("dashboard")} className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors">
              See leaderboard <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {topPerformers.map((p) => (
              <div
                key={p.rank}
                className="flex flex-col items-center p-4 rounded-2xl bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer min-w-[140px]"
                onClick={() => onNavigate("dashboard")}
              >
                <div className="relative">
                  <ImageWithFallback src={p.avatar} alt={p.name} className="w-16 h-16 rounded-full object-cover border-2 border-slate-100" />
                  {p.rank <= 3 && (
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-white flex items-center justify-center text-xs font-bold">
                      {p.rank}
                    </span>
                  )}
                </div>
                <span className="mt-2 font-semibold text-slate-900 text-sm text-center">{p.name}</span>
                <span className="text-xs text-sky-600 font-semibold">{p.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-reveal>
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">What learners say</h2>
          <p className="text-slate-600 mb-8 font-secondary">Stories from people who used empowerU to change careers and grow.</p>
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
    </div>
  );
}
