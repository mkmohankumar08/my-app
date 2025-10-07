import Link from "next/link";
import React from "react";

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
      {/* Header / Hero */}
      <header className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Our Vision & Mission
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              We exist to empower people to discover their potential, choose the
              right path, and build meaningful careers with confidence.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <svg
              className="w-20 h-20 sm:w-24 sm:h-24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="8"
                fill="url(#g)"
                opacity="0.12"
              />
              <path
                d="M12 7v6l4 2"
                stroke="#0f172a"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                Built for learners & mentors
              </p>
              <p className="text-xs text-gray-400">
                Scales across devices · Accessible
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Vision & Mission cards */}
     <section className="max-w-6xl mx-auto px-6 py-5">
  <div className="grid gap-10 md:grid-cols-2">
    {/* Vision Card */}
    <article className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      {/* Image on top */}
      <div className="w-[220px] h-[160px] rounded-xl overflow-hidden mb-6">
        <img
          src="/Vision.jpg"
          alt="Vision"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h2>
      <p className="text-gray-600 mb-5 leading-relaxed">
        To empower individuals worldwide to discover their true potential, make informed career choices, and build a successful future with confidence.
      </p>

      <ul className="space-y-2 text-left">
        <li className="flex items-start gap-3">
          <span className="text-green-500 mt-1">✔</span>
          <span>Inclusive access to career guidance</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 mt-1">✔</span>
          <span>Data-driven, people-centered recommendations</span>
        </li>
      </ul>
    </article>

    {/* Mission Card */}
    <article className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      {/* Image on top */}
      <div className="w-[220px] h-[160px] rounded-xl overflow-hidden mb-6">
        <img
          src="/Mission.jpg"
          alt="Mission"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
      <p className="text-gray-600 mb-5 leading-relaxed">
        To provide an accessible, easy-to-use platform that helps people find the right career steps and connect with the resources they need to succeed.
      </p>

      <div className="text-left w-full">
        <h3 className="text-sm font-medium text-gray-700 mb-2">How we deliver value</h3>
        <ul className="space-y-4">
          <li className="flex gap-3 items-start">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
              1
            </span>
            <div className="text-gray-600 text-sm">
              <strong>Engaging assessments</strong>: Identify skills and talents through tests and AI-driven assessments.
            </div>
          </li>

          <li className="flex gap-3 items-start">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
              2
            </span>
            <div className="text-gray-600 text-sm">
              <strong>Curated pathways</strong>: Suggest courses and learning pathways matched to goals.
            </div>
          </li>

          <li className="flex gap-3 items-start">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
              3
            </span>
            <div className="text-gray-600 text-sm">
              <strong>Industry connections</strong>: Connect learners with academies, mentors, and job opportunities.
            </div>
          </li>
        </ul>
      </div>
    </article>
  </div>
</section>


     {/* Values Section */}
<section className="max-w-6xl mx-auto px-6 py-12">
<h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Why Guiddera?</h2>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{[
{
title: "AI-Driven Assessments",
desc: "Discover your skills and strengths with engaging, science-backed assessments.",
img: "chat-app.png",
},
{
title: "Personalized Pathways",
desc: "Receive course and career recommendations tailored to your goals.",
img: "pathway.png",
},
{
title: "Mentorship Access",
desc: "Connect with mentors and institutions to guide your career decisions.",
img: "analysis.png",
},
{
title: "Global Opportunities",
desc: "Bridge the gap between skills and jobs with worldwide opportunities.",
img: "network.png",
},
{
title: "Inclusive Access",
desc: "Affordable and accessible for learners everywhere, anytime.",
img: "easy-access.png",
},
{
title: "Lifelong Learning",
desc: "Empowering you to keep learning and growing throughout your journey.",
img: "lifelong-learning.png",
},
].map((f, idx) => (
<article key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
<img src={f.img} alt={f.title} className="w-12 h-12 mb-4" />
<h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
<p className="mt-2 text-sm text-gray-600">{f.desc}</p>
</article>
))}
</div>
</section>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        
        {/* Decorative shapes */}
        <span className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl"></span>
        <span className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></span>

        <div className="relative z-10 text-center sm:text-left max-w-md">
          <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
            Ready to <span className="text-yellow-300">Empower Your Career?</span>
          </h3>
          <p className="mt-3 text-sm sm:text-base opacity-90">
            Join thousands of learners who used assessments and tailored pathways to launch their careers with confidence.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/ContactUs"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-white/90 hover:scale-105 transition transform duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/ServicesPage"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 hover:text-yellow-300 hover:scale-105 transition transform duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
    </main>
  );
}
