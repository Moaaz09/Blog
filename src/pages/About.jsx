import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between px-8 md:px-16 py-16 gap-10 bg-gradient-to-r from-blue-50 to-blue-100">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700">
            About Our Company
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            We’re a creative team focused on designing and building
            user-friendly digital solutions. Our purpose is to make technology
            simple, accessible, and meaningful for everyone.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Team working"
            className="rounded-2xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="px-8 md:px-16 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Innovation
            </h3>
            <p className="text-gray-600">
              We always seek fresh ideas and better ways to deliver creativity
              and technology hand-in-hand.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">
              Integrity
            </h3>
            <p className="text-gray-600">
              We build trust by staying honest, reliable, and transparent in
              everything we do.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              Teamwork
            </h3>
            <p className="text-gray-600">
              We grow stronger together, celebrating every success as a shared
              victory.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-8 md:px-16 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
          Meet Our Team
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {[
            { name: "Aiman", role: "Founder" },
            { name: "Eman", role: "Frontend Developer" },
            { name: "Sara", role: "UI Designer" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md w-60 text-center hover:shadow-lg transition"
            >
              <img
                src={`https://via.placeholder.com/100?text=${member.name[0]}`}
                alt={member.name}
                className="rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
