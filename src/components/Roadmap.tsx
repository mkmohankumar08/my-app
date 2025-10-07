import React from "react";

export default function RoadmapPage() {
  const problems = [
    "Many people are confused about their career direction.",
    "Students don’t know what to study for future success.",
    "Job seekers struggle to match their skills with opportunities.",
  ];

  const solutions = [
    {
      title: "Skill & Talent Identification",
      desc: "Quizzes, puzzles, and AI-driven assessments to discover strengths.",
    },
    {
      title: "Personalized Recommendations",
      desc: "Tailored career paths and course suggestions for individuals.",
    },
    {
      title: "Academy & Institution Connections",
      desc: "Partnering with top academies, training centers, and universities.",
    },
    {
      title: "Job Portal",
      desc: "Employment opportunities matched to your skills and goals.",
    },
    {
      title: "Mentorship Access",
      desc: "Guidance from industry experts and mentors for every learner.",
    },
    {
      title: "AI-Driven Roadmaps",
      desc: "Continuous tracking of career progress with smart AI insights.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
      {/* Problems Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The Problem</h2>
        <ul className="grid gap-4 max-w-3xl mx-auto text-gray-600 list-disc list-inside">
          {problems.map((p, idx) => (
            <li key={idx} className="text-lg">{p}</li>
          ))}
        </ul>
      </section>

      {/* Roadmap Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Solution Roadmap</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-teal-400 transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-16">
            {solutions.map((s, idx) => (
              <div key={idx} className="relative md:flex md:items-center md:justify-between">
                {/* Left/Right Card */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} `}>
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 inline-block">
                    <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-indigo-500 flex items-center justify-center font-bold text-indigo-600">
                    {idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
