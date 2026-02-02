// ContactForm.tsx
"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="min-h-min flex justify-center items-center mb-3">
      <div 
        className="rounded-lg p-8 max-w-md w-full space-y-6"
        style={{
          background: "rgba(var(--color-primary), 0.03)",
          border: "1px solid rgba(var(--color-primary), 0.1)",
        }}
      >
        <h2 
          className="text-2xl font-semibold text-center"
          style={{ color: "rgb(var(--color-text))" }}
        >
          Contact Me
        </h2>
        <form
          action="https://formsubmit.co/kentdaniel0328@gmail.com"
          method="POST"
          className="space-y-4 text-start"
        >
          <div>
            <label 
              htmlFor="name" 
              className="block font-medium"
              style={{ color: "rgb(var(--color-text))" }}
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md shadow-sm px-3 py-2 outline-none transition-all"
              style={{
                background: "rgba(var(--color-bg), 0.5)",
                border: "1px solid rgba(var(--color-muted), 0.2)",
                color: "rgb(var(--color-text))",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgb(var(--color-primary))";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(var(--color-muted), 0.2)";
              }}
            />
          </div>
          <div>
            <label 
              htmlFor="email" 
              className="block font-medium"
              style={{ color: "rgb(var(--color-text))" }}
            >
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md shadow-sm px-3 py-2 outline-none transition-all"
              style={{
                background: "rgba(var(--color-bg), 0.5)",
                border: "1px solid rgba(var(--color-muted), 0.2)",
                color: "rgb(var(--color-text))",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgb(var(--color-primary))";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(var(--color-muted), 0.2)";
              }}
            />
          </div>
          <div className="relative">
            <label 
              htmlFor="message" 
              className="block font-medium"
              style={{ color: "rgb(var(--color-text))" }}
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md shadow-sm px-3 py-2 outline-none transition-all"
              style={{
                background: "rgba(var(--color-bg), 0.5)",
                border: "1px solid rgba(var(--color-muted), 0.2)",
                color: "rgb(var(--color-text))",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgb(var(--color-primary))";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(var(--color-muted), 0.2)";
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-bold w-full py-2 px-4 rounded-md transition-all"
            style={{
              background: "rgb(var(--color-primary))",
              color: "rgb(10, 10, 15)",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
