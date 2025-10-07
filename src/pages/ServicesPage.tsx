import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

export default function ServicesPage() {
  const services = [
    {
      title: "Skill & Talent Discovery",
      desc: "Through engaging quizzes, puzzles, and AI-powered assessments, we help you uncover your strengths and hidden potential. Understand yourself better and make informed career decisions.",
    },
    {
      title: "Personalized Career Pathways",
      desc: "We suggest tailored career paths, courses, and certifications designed to align with your goals and skills. Each recommendation is based on your unique profile and interests.",
    },
    {
      title: "Academy & Training Connections",
      desc: "Access partnerships with top academies, universities, and training institutions to upskill with confidence. Learn from the best and get industry-recognized credentials.",
    },
    {
      title: "Smart Job Portal",
      desc: "Find employment opportunities that perfectly match your skills and career interests. Our AI-driven system connects talent with employers globally.",
    },
    {
      title: "Mentorship & Expert Guidance",
      desc: "Connect with industry experts and mentors who provide one-on-one career guidance, share real-world insights, and help you achieve your goals.",
    },
    {
      title: "AI-Driven Career Tracking",
      desc: "Track your progress with intelligent roadmaps that adapt as you grow. Set milestones, monitor achievements, and continuously improve your career trajectory.",
    },
  ];

  const benefits = [
    "Personalized AI-based insights for career growth",
    "Step-by-step guidance through learning paths",
    "Access to top industry mentors",
    "Connection with partner academies and institutions",
    "Smart job recommendations tailored to your profile",
    "Interactive dashboards for career tracking",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-gray-800 py-24">
        <h1 className="text-5xl font-bold text-center">Our Services</h1>

        {/* Hero / Intro Section with Image */}
        <section className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 mt-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Path to a Successful Career
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Guiddera is a smart career guidance platform designed to help students, job seekers,
              and career switchers discover their skills, explore opportunities, and achieve their dreams.
              With AI-driven assessments, personalized pathways, and expert mentorship, we bridge the gap
              between learning and real-world opportunities.
            </p>
            <p className="text-lg text-gray-600">
              Whether you are unsure about your next step, want to upskill, or seeking guidance from industry experts,
              Guiddera provides the tools, insights, and connections to help you succeed. Explore your potential
              and create a roadmap that fits your career aspirations perfectly.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Sevices.jpg"
              alt="Guiddera Illustration"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Services Roadmap */}
        <section className="max-w-6xl mx-auto px-6 py-20 relative">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Services & Roadmap
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-200 transform -translate-x-1/2"></div>

            <div className="flex flex-col gap-20">
              {services.map((s, idx) => (
                <div
                  key={idx}
                  className="relative md:flex md:items-start md:justify-between"
                >
                  {/* Card */}
                  <div
                    className={`md:w-5/12 ${
                      idx % 2 === 0
                        ? "md:mr-auto md:text-right"
                        : "md:ml-auto md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition duration-300">
                      <h3 className="text-xl font-semibold text-gray-800">{s.title}</h3>
                      <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>

                      {/* Optional benefits list for each service */}
                      <ul className="mt-4 text-gray-700 list-disc list-inside space-y-1">
                        {benefits.slice(0, 3).map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center font-bold text-blue-700 -translate-y-6 z-10">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Guiddera */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Why Choose Guiddera
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                  <span className="text-blue-600 font-bold text-lg">{i + 1}</span>
                </div>
                <p className="text-gray-700 text-sm">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-200 py-20  text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started With Guiddera</h2>
          <p className="text-lg mb-6">Unlock your full career potential today!</p>
          <button className="bg-white  font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
