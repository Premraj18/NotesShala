"use client";

import { useState } from "react";

const UserTestimonial = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from reloading the page

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    try {
      const res = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          message,
        }),
      });

      console.log("Response object:", res);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Response data:", data);

      const { message: msg, success } = data;
      setError([msg]); // Adjust this based on the structure of your response
      setSuccess(success);
      console.log(msg);

      if (success) {
        setFullname("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setError([error.message]);
      setSuccess(false);
    }
  };

  return (
    <div className="mx-10 lg:mx-[30vw] mt-[8vw] overflow-hidden">
      <h1 className="text-4xl font-semibold">Send us your Testimonial</h1>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="youremail@nitjsr.ac.in"
          />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button className="bg-[#29b6f6] p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${success ? "text-[#29b6f6]" : "text-red-600"} px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserTestimonial;
