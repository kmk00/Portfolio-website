import React from "react";

export const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]"></p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap 8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <img
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src="/"
                alt="/"
              ></img>
            </div>
            <div>
              <h2 className="py-2">Name here</h2>
              <p>Front-End Developer</p>
              <p className="py-4">
                {" "}
                I'm available for freelance or full-time positions. Contact me
                and let's talk.
              </p>
            </div>
            <div></div>
          </div>
          {/* right */}
        </div>
      </div>
    </div>
  );
};
