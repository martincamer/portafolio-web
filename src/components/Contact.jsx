import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/0ec536d3-9412-4f3d-a917-1330a0df02a0"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            Contact
          </p>
          <p className="text-white py-4 text-xl font-bold">
            // Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 hover:duration-500 px-4 py-3 my-8 mx-auto flex items-center ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
