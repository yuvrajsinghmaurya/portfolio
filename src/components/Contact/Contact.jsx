import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "e366d785-5d6c-47e9-8b12-bddd5cc9eb02"); // ✅ your same key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
        event.target.reset();
      } else {
        toast.error("Error sending message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setResult("");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Feel free to reach out to me anytime. I'd love to hear from you!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form onSubmit={onSubmit} className="mt-4 flex flex-col space-y-4">
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-md transition ${
              result
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90"
            }`}
            disabled={!!result}
          >
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
