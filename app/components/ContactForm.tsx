// ContactForm.tsx
"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="min-h-min flex justify-center items-center mb-3">
      <div className="bg-neutral-700 bg-opacity-70 border border-slate-200 backdrop-blur-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center text-white">
          Contact Me
        </h2>
        <form
          action="https://formsubmit.co/kentdaniel0328@gmail.com"
          method="POST"
          className="space-y-4 text-start"
        >
          <div>
            <label htmlFor="name" className="block font-medium text-white">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring-blue-200 bg-gray-100 text-gray-800 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-white">
              Your Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring-blue-200 bg-gray-100 text-gray-800 px-3 py-2"
            />
          </div>
          <div className="relative">
            <label htmlFor="message" className="block font-medium ">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 bg-gray-100 text-gray-800 px-3 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-bold w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
