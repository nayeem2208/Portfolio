import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { SiLinkedin } from "react-icons/si";
import { BsInstagram, BsGithub } from "react-icons/bs";
import "./contact.css";
import {motion} from 'framer-motion'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("All fields are required");
      return;
    }

    emailjs
      .sendForm(
        "service_vymh9br",
        "template_y1jhl2h",
        form.current,
        "Bj4c2ivnnYR3kOGM5"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Send");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="flex flex-col items-center justify-center  mb-24">
      <motion.div className="form-container flex flex-col items-center " >
        <motion.h1
        whileHover={{textShadow: "0 0 40px rgba(69, 2, 150, 1)",}}
          style={{ fontFamily: "sans-serif" }}
          className="font-bold text-3xl lg:text-5xl text-violet-400 mb-5"
        >
          Say Something!!
        </motion.h1>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="email">Name</label>
            <motion.input
            whileHover={{scale:1.05}}
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="w-full h-10 ps-5 rounded border border-2 border-gray-300"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <motion.input
            whileHover={{scale:1.05}}
              type="email"
              name="from_email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="w-full h-10 ps-5 rounded border border-2 border-gray-300"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <motion.textarea
            whileHover={{scale:1.05}}
              id="message"
              name="message"
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full ps-5 rounded border-2 border-gray-300"
              cols="30"
              rows="7"
            ></motion.textarea>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </motion.div>

      </div>
  );
};

export default Contact;