import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="text-center my-24" id="contact">
      <ContactForm />
      <span>
        or email me at
        <a
          href="mailto:kentdaniel0328@gmail.com"
          className="text-blue-400 hover:text-blue-200 ml-2"
        >
          kentdaniel0328@gmail.com
        </a>
      </span>
    </div>
  );
};

export default Contact;
