import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

export default function AboutPage() {
  const features = [
  {
    title: "Intelligent Career Assessments",
    desc: "Use AI-powered quizzes to uncover your strengths, interests, and hidden potential for the career you deserve.",
    icon: "/target.png",
    
  },
  {
    title: "Tailored Career Paths",
    desc: "Get personalized step-by-step guidance and learning paths that match your goals and aspirations.",
    icon: "/mentorship.png",
    color: "bg-purple-500",
  },
  {
    title: "Expert Mentorship",
    desc: "Connect with industry leaders and career coaches for 1:1 mentorship and actionable advice.",
    icon: "/expertise.png",
    color: "bg-green-500",
  },
  {
    title: "Skill Mastery Support",
    desc: "Access curated courses, workshops, and certifications to boost your in-demand skills.",
    icon: "/career-path.png",
    color: "bg-yellow-500",
  },
  {
    title: "Smart Job Matching",
    desc: "Our platform intelligently recommends jobs based on your skills, interests, and career goals.",
    icon: "/job-icon.png",
    color: "bg-red-500",
  },
  {
    title: "Continuous Progress Tracking",
    desc: "Monitor your growth with interactive dashboards and insights powered by AI analytics.",
    icon: "/track-icon.png",
    color: "bg-orange-500",
  },
];

  const stats = [
    { title: "Active Users", value: "50k+" },
    { title: "Mentorship Hours", value: "120k+" },
    { title: "Career Placements", value: "15k+" },
    { title: "Partner Academies", value: "200+" },
  ];

  const pillars = [
    {
      title: "Identify Skills & Talents",
      desc: "Engaging quizzes and AI assessments reveal your strengths and interests.",
    },
    {
      title: "Suggest Pathways & Courses",
      desc: "Personalized course suggestions and learning plans tailored to your goals.",
    },
    {
      title: "Connect with Mentors",
      desc: "Grow through guided mentorship and academy partnerships.",
    },
    {
      title: "Bridge to Opportunities",
      desc: "Job matching and employer partnerships to turn learning into work.",
    },
    {
      title: "Accessible Everywhere",
      desc: "Mobile-first design, inclusive UX, and affordable access worldwide.",
    },
    {
      title: "Inspire Lifelong Learning",
      desc: "Micro-credentials, progress tracking, and ongoing growth resources.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          About <span className="text-orange-500">Guiddera</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Guiddera is a professional career guidance platform for students, job seekers, and career switchers to discover strengths, explore opportunities, and achieve professional goals with confidence.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["AI Assessments", "Personalized Paths", "Mentorship & Guidance"].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-transform hover:scale-105 text-gray-900 font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Guiddera empowers individuals to make informed career choices, develop in-demand skills, and achieve professional growth with AI-driven insights and expert mentorship.
          </p>
        </div>
        <div className="bg-gray-50  border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a world where every learner has access to personalized guidance, meaningful learning opportunities, and career paths aligned with their true potential.
          </p>
        </div>
      </section>

      {/* Features */}
    <section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Guiddera Excels</h2>
  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    {features.slice(0, 4).map((f, i) => (
      <div
        key={i}
        className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 border border-gray-200 overflow-hidden group"
      >
        {/* Icon with subtle background */}
        <div className="w-20   h-20 rounded-full flex items-center justify-center mb-6 mx-auto   transition-transform group-hover:scale-105">
          <img src={f.icon} alt={f.title} className="w-14 h-14"/>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{f.title}</h3>
        <p className="text-gray-600 text-sm text-center">{f.desc}</p>

        {/* Decorative lines */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500 rounded-full opacity-70 mt-4 group-hover:opacity-100 transition-opacity"></div>
      </div>
    ))}
  </div>
</section>



      {/* Platform Pillars */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Platform Pillars</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-transform hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">{p.title}</h3>
              <p className="text-gray-700 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl font-bold text-orange-500">{s.value}</h3>
              <p className="text-gray-700 mt-2">{s.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="bg-gray-900 py-10 text-white text-center mb-20">
        <h2 className="text-3xl font-bold mb-4">Start Your Career Journey Today</h2>
        <p className="text-lg mb-6">Join Guiddera and unlock your full career potential.</p>
        <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition-colors">
          Get Started
        </button>
      </section> */}
      <Footer/>
    </main>
  );
}
