import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can also send this data to your API here
    console.log("Form submitted:", formData);

    // Show toast notification
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="bg-gray-50 py-24 px-6">
        <Navbar />
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-gray-100">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Have questions or need help? Fill out the form and we’ll get back to
            you as soon as possible.
          </p>

          {/* Form */}
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 text-center text-gray-600">
            <p>
              Email:{" "}
              <a
                href="mailto:support@guiddera.com"
                className="text-black font-medium"
              >
                guiddera@gmail.com
              </a>
            </p>

            <div className="flex items-center justify-center mt-2 gap-2">
       
                <p className="text-grey">Contact Us:</p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <FaWhatsapp className="text-base text-green-500" />
                         <a href="tel:+91 8508191121" className="text-black font-medium">
                  +91 8508191121
                  </a>
                </p>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default ContactUs;
