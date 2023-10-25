import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cie3n5r",
        "template_3abfrq6",
        form.current,
        "vf3wBI-UhmBx-7voO"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#458567]" id="contactSection">
      <div className="flex justify-center pt-4 text-3xl">
        <h1>Contact Us</h1>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col mx-7 md:w-[30%] md:mx-auto py-4"
      >
        <label className="font-bold mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          className="border border-gray-300 p-2 mb-4 rounded"
        />

        <label className="font-bold mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          className="border border-gray-300 p-2 mb-4 rounded"
        />

        <label className="font-bold mb-2">Message</label>
        <textarea
          name="message"
          className="border border-gray-300 p-2 mb-4 rounded"
        ></textarea>

        <input
          type="submit"
          value="Send"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
};
