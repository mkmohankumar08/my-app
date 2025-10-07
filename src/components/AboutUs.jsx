import React from 'react';

const AboutUs = () => {
  return (
    <div>
   <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
{/* Hero Section */}
<header className="max-w-6xl mx-auto px-6 py-16 sm:py-20 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">About Us</h1>
<p className="mt-6 text-lg text-gray-600 leading-relaxed">
Guiddera is a smart career guidance platform designed to help students, job seekers, and career switchers discover their skills, explore opportunities, and achieve their dreams. We combine AI-driven assessments, personalized recommendations, and mentorship to ensure every individual finds their right path.
</p>
<p className="mt-4 text-lg text-gray-600 leading-relaxed">
We believe every person deserves access to the right guidance, tools, and opportunities to succeed in their career journey. With Guiddera, we bridge the gap between skills, education, and employment.
</p>
</div>
<div className="flex-1 flex justify-end">
<img
src="./College-2.jpg"
alt="Career guidance illustration"
className="rounded-2xl  object-contain w-full  max-w-lg "
/>
</div>
</header>
 <section className="relative bg-gradient-to-b from-orange-50 via-white to-pink-50 py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    {/* Heading */}
    <h3 className="text-4xl font-bold text-gray-900 mb-6">
      Our <span className="text-orange-500">Platform Pillars</span>
    </h3>
    <p className="text-gray-600 max-w-2xl mx-auto mb-14">
      Guiddera empowers learners and professionals with smart tools, mentorship, 
      and AI insights to discover, grow, and achieve meaningful careers.
    </p>

    {/* Grid Section */}
    <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Identify Skills & Talents",
          desc: "Engaging quizzes and AI assessments that reveal your strengths and areas of interest.",
          image: "/talent-search.png",
        },
        {
          title: "Suggest Pathways & Courses",
          desc: "Personalized course suggestions and structured learning plans aligned to your goals.",
          image: "/online-course.png",
        },
        {
          title: "Connect with Mentors",
          desc: "Guided mentorship and academy partnerships to help you grow with real-world insights.",
          image: "/analysis.png",
        },
        {
          title: "Bridge to Opportunities",
          desc: "Job-matching features and collaborations that turn learning into real opportunities.",
          image: "/ideas.png",
        },
        {
          title: "Accessible Everywhere",
          desc: "Seamless, mobile-first platform designed for accessibility and global reach.",
          image: "/easy-access.png",
        },
        {
          title: "Inspire Lifelong Learning",
          desc: "Micro-credentials, achievements, and AI tracking to motivate continued success.",
          image: "/lifelong-learning.png",
        },
      ].map((pillar, index) => (
        <div
          key={index}
          className="relative bg-white/80 backdrop-blur-sm border border-orange-100 rounded-3xl shadow-lg hover:shadow-orange-200 transition-all duration-300 p-8 flex flex-col items-center text-center hover:-translate-y-2"
        >
          {/* Floating Image */}
          <div className="absolute -top-10 bg-white p-4 rounded-full shadow-md border border-gray-100">
            <img
              src={pillar.image}
              alt={pillar.title}
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Content */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {pillar.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {pillar.desc}
            </p>
          </div>

          {/* Decorative Gradient Line */}
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
        </div>
      ))}
    </div>
  </div>
</section>






{/* CTA */}



{/* Footer */}

</main>
    </div>
  );
};

export default AboutUs;
