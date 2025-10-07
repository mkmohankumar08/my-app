import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
 <section className="relative bg-gradient-to-r py-24 from-orange-50 via-white to-pink-50 overflow-hidden min-h-[100vh] flex items-center">
  {/* Decorative gradient orbs */}
  <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-orange-200/40 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">
    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
      The Right Way to Your{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
        Dream Career
      </span>
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl text-gray-700 mt-5 max-w-3xl mx-auto leading-relaxed">
      Discover, Learn, and Succeed with{" "}
      <span className="font-semibold text-gray-900">Guiddera</span> — your
      roadmap to the career you dream of. Uncover your strengths, explore
      opportunities, and achieve your goals with confidence.
    </p>

    {/* Highlights */}
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      {[
        "Personalized career guidance",
        "Expert-led learning journeys",
        "Connect with top mentors",
        "AI-powered skill discovery",
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white/70 backdrop-blur-md border border-orange-200 text-gray-700 px-5 py-2 rounded-full font-medium shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          {item}
        </div>
      ))}
    </div>

    {/* Call-to-Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
      <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300">
       <Link href="/AboutUsPage"> Get Started</Link>
      </button>
      <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
        <Link href="/ServicesPage">Learn More</Link>
      </button>
    </div>

    {/* Decorative underline / accent line */}
    <div className="mt-14 flex justify-center">
      <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse"></div>
    </div>
  </div>
</section>


  );
};

export default HeroSection;
