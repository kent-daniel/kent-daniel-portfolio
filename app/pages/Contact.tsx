import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="text-center my-24" id="contact">
      <ContactForm />
      <span style={{ color: "rgb(var(--color-muted))" }}>
        or email me at
        <a
          href="mailto:kentdaniel0328@gmail.com"
          className="ml-2 hover:underline"
          style={{ color: "rgb(var(--color-primary))" }}
        >
          kentdaniel0328@gmail.com
        </a>
      </span>
    </div>
  );
};

export default Contact;
