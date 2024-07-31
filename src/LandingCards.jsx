import React from "react";

const Card = ({ title, description, linkText, linkHref }) => {
  return (
    <div className="bg-[#24273C] relative shadow-lg rounded-lg p-4 lg:p-6 text-center flex flex-col items-center w-full md:w-2/6 lg:w-[380px] md:h-[28vw] lg:h-[280px] border-slate-500 border-solid border-[0.2px]">
      <div className="bg-orange-700 text-white rounded-full p-3 mb-4">
        <Icon />
      </div>
      <h2 className=" font-semibold mb-2 text-white  md:text-[1.75vw] lg:text-2xl">
        {title}
      </h2>
      <p className=" mb-4 text-justify text-white  md:text-[1.55vw] lg:text-base">
        {description}
      </p>
      <a
        href={linkHref}
        className="bottom-[1.6vw] md:absolute lg:bottom-[1.3vw] underline text-blue-500 hover:underline text-sm md:text-base lg:text-lg font-bold"
      >
        {linkText}
      </a>
    </div>
  );
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

const LandingCards = () => {
  return (
    <div className="bg-secondary min-h-screen flex flex-col items-center ">
      <div className="relative text-white text-center w-full h-[40vw] md:h-[30vw]">
        <img
          src="https://www.otovo.com/images/furumo-bw.jpg"
          alt=""
          className="w-full h-full absolute "
        />
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-[#24273C]/20">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Together is better
          </h1>
          <p className="mt-4 text-xs md:text-sm lg:text-lg w-3/5">
            Solving today and tomorrow's energy problem cannot be done by Otovo
            alone, let's team up for a more sustainable future.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-4 items-center justify-center py-8 w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 px-4 lg:px-8 pt-[8vw]">
        <Card
          title="Installer? Let's join forces!"
          description="Is your company interested in becoming our installation partner, and install solar systems for our customers? We can help! "
          linkText="Become Otovo-installer"
          linkHref="#"
        />
        <Card
          title="Want to partner up?"
          description="We’re always looking for partnerships with companies and organizations that want to have a positive impact on our planet! Join us!"
          linkText="Partner with us"
          linkHref="#"
        />
        <Card
          title="Want to work at Otovo?"
          description="We are a fast growing tech start-up and need employees with a wide range of skill sets. Join us to help solve the energy problems of tomorrow."
          linkText="See open positions"
          linkHref="#"
        />
      </div>
    </div>
  );
};

export default LandingCards;
