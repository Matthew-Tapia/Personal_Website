"use client";

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err) {
      console.log("Err", err);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-4/5 lg:w-3/5">
      <div className="border border-sky-900 bg-sky-950 drop-shadow-2xl rounded-2xl p-6 lg:px-16 lg:py-12 flex flex-col space-y-5 lg:space-y-6">
        <input
          className="bg-sky-100 border border-sky-800 drop-shadow-2xl rounded-md p-3"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full Name"
          required
        />
        <input
          className="bg-sky-100 border border-sky-800 drop-shadow-2xl rounded-md p-3"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          required
        />
        <textarea
          className="bg-sky-100 border border-sky-800 drop-shadow-2xl rounded-md p-3"
          placeholder="Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          cols="30"
          rows="10"
          required
        ></textarea>
        <div className="flex justify-end">
          <button
            className="font-medium border border-sky-800 w-2/5 lg:w-1/5 p-3 drop-shadow-2xl text-sky-950 rounded-md bg-sky-300"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
