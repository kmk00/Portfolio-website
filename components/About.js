import React from "react";

export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello, my name is Łukasz Kamiński. I am a 3rd year college student
            with a passion for technology and a strong desire to break into the
            IT industry as a front-end developer. With a solid foundation in
            HTML, CSS, and JavaScript, I am confident in my ability to build
            responsive and user-friendly websites.{" "}
          </p>
          <p className="py-2 text-gray-600">
            <span className=" font-black">Fun fact: </span>I am a huge movie
            enthusiast, that's why in my free time I love to spend time checking
            out new films and binge-watching great series. One day I would like
            to participate in making a movie to get to know the process of
            creating it from the inside.
          </p>
          <p className="py-2 text-gray-600 underline ">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          ></img>
        </div>
      </div>
    </div>
  );
};
