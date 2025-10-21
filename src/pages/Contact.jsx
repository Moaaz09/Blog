import React from "react";

const Contact = () => {
  return (

    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side - Form */}
        <div className="p-10 md:p-14">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-gray-600 mb-10">
            We’d love to hear from you! Whether you have a question, suggestion, 
            or just want to say hello — fill out the form below.
          </p>

          <form className="grid gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex flex-col justify-center items-center p-10 md:p-14 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
          <p className="max-w-sm text-blue-100 mb-8">
            Have questions or want to collaborate? Reach out using the details
            below — we’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4 text-blue-50">
            <p>
              📍 <span className="font-medium">Karachi, Pakistan</span>
            </p>
            <p>
              📧 <span className="font-medium">contact@aimanportfolio.com</span>
            </p>
            <p>
              📞 <span className="font-medium">+92 300 1234567</span>
            </p>
          </div>

          <div className="mt-10 flex gap-5">
            <a
              href="#"
              className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition"
            >
              🌐
            </a>
            <a
              href="#"
              className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition"
            >
              💼
            </a>
            <a
              href="#"
              className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition"
            >
              📸
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
