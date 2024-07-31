import React from "react";
import Flag from "react-world-flags";
import Footer from "./Footer";
import LandingCards from "./LandingCards";

const FAQ = () => {
  return (
    <div className="bg-mybg py-6 md:py-12 lg:py-24 px-[7vw] md:px-[8vw] text-white ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-8">
        Frequently Asked Questions.
      </h2>

      <div className="w-full mx-auto bg-[#24273C] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-4/6 p-2 border border-gray-300 rounded-md bg-[#24273C] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">
              What is Loom Solar?
            </h3>
            <p className="text-white">
              A solar panel manufacturer in India, Loom Solar manufactures{" "}
              <span className="text-blue-500">solar panels</span> ranging in
              power from 10W to 575W.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              How Does It Work?
            </h3>
            <p className="text-white">
              Our solar panels are manufactured in factories and installed
              across India by our dealers and distributors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Is Loom Solar an Indian manufacturer?
            </h3>
            <p className="text-white">
              We are a Haryana-based solar company founded in 2018.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              In what range do solar panels come?
            </h3>
            <p className="text-white">
              Our solar panels range from 10W to 575W and can be used for home
              lighting applications, businesses, and agriculture.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Do you have any dealers and distributors in my area?
            </h3>
            <p className="text-white">
              There are more than 10,000 resellers and 50,000 consumers across
              India, you can find their details on our website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Can Loom Solar provide inverter batteries as well?
            </h3>
            <p className="text-white">
              Yes, we are a consumer solar brand, so we have{" "}
              <span className="text-blue-500">energy storage</span> and solar
              inverters. We offer energy storage starting at 5kWh and{" "}
              <span className="text-blue-500">grid-tied solar inverters</span>{" "}
              ranging from 3kW to 100kW.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Where can I get support and service?
            </h3>
            <p className="text-white">
              Yes, we have. For any service, you can{" "}
              <span className="text-blue-500">create a ticket</span>. Call
              support is available Monday through Saturday, 9AM to 6:30PM.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold">Solar Company</h4>
            <p className="text-white">
              India's No.1 Solar Company in Residential Solar!
            </p>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold">50,000 Homes</h4>
            <p className="text-white">
              Made Solar Powered In India including remote & hilly areas
            </p>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold">6 years of Trust</h4>
            <p className="text-white">
              Celebrating the excellence in product innovation, Distribution and
              service.
            </p>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold">Instant Service</h4>
            <p className="text-white">
              Contact us by Chat, Email, Phone, WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const countries = [
    { code: "AT", name: "Austria" },
    { code: "BE", name: "Belgium" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "IT", name: "Italy" },
    { code: "NL", name: "Netherlands" },
    { code: "NO", name: "Norway" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "ES", name: "Spain" },
    { code: "SE", name: "Sweden" },
    { code: "CH", name: "Switzerland" },
  ];

  return (
    <>
      <div className="bg-mybg min-h-screen flex flex-col items-center justify-center pt-10">
        <div className="w-full flex flex-col items-center justify-center text-center pt-10 md:pt-20">
          <h1 className="w-3/5 md:w-full text-4xl md:text-5xl font-bold text-white">
            Join the <span className="text-orange-500">solar revolution</span>
          </h1>
          <p className="w-4/5 md:w-full mt-4 text-white">
            Your roof is an untapped resource. Save money and the environment by
            going solar.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row  justify-arround gap-14 md:gap-2 items-center px-[7vw] lg:px-[10vw]">
          <div className="w-full md:w-1/2 mt-8 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
            {countries.map((country) => (
              <button
                key={country.code}
                className="bg-[#24273C] p-3 md:p-4 w-[36vw] xs:w-[22vw] md:w-[18vw] lg:w-[12vw] rounded shadow hover:shadow-md transition duration-300 flex items-center justify-start space-x-2"
              >
                <Flag
                  code={country.code}
                  className="w-[6vw] xs:w-[3.7vw] md:w-[3vw] lg:w-[2vw] "
                />
                <span className="text-white text-[3.5vw] xs:text-[2.2vw] md:text-[1.8vw] lg:text-[1.12vw]">
                  {country.name}
                </span>
              </button>
            ))}
          </div>
          <div className="w-full md:w-1/2 mt-8 flex justify-end">
            <img
              src="../src/assets/banner2.png"
              alt="Solar houses illustration"
              className="w-11/12 lg:w-4/5 object-cover"
            />
          </div>
        </div>
        <div className="py-12 flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-8 md:space-y-0 md:space-x-8 w-full px-[7vw] lg:px-[10vw] pb-[10vw]">
          <div className="relative rounded-lg shadow-lg md:max-w-md w-full h-[88vw] xs:h-[60vw] md:h-[38vw] lg:h-[30vw] object-cover ">
            <img
              src="https://www.otovo.com/images/athornor-front-bw.jpg"
              alt=""
              className="absolute w-full h-full overflow-hidden object-cover object-center rounded-lg"
            />
            <div className="absolute bottom-0 p-[2vw] mt-4 z-[20] bg-[#24273C]/40 text-white rounded-b-lg">
              <h2 className="text-sm sm:text-lg md:text-base lg:text-lg font-semibold ">
                OTOVO
              </h2>
              <p className="mt-2 text-sm sm:text-lg md:text-sm lg:text-base">
                "Imagine every neighbourhood in Europe being powered by local
                and clean energy. Otovo is making that happen."
              </p>
              <p className="mt-2 text-sm sm:text-lg md:text-sm lg:text-base font-bold">
                Andreas Thorsheim, CEO at Otovo
              </p>
            </div>
          </div>
          <div className="text-white p-6 rounded-lg shadow-lg md:max-w-lg w-full h-[88vw] xs:h-[60vw] md:h-[38vw] lg:h-[30vw] text-[2.85vw] xs:text-[2.25vw] md:text-[1.28vw] lg:text-[1.1vw]">
            <h2 className="text-[4.25vw] xs:text-[3.4vw] md:text-[2.8vw] lg:text-[2vw] font-bold ">
              About us
            </h2>
            <p className="mt-[1vw] ">
              To homeowners, Otovo is the easiest way to get solar panels on the
              roof and batteries in the home.
            </p>
            <p className="mt-[0.5vw] ">
              We are a marketplace organizing a network of hundreds of local,
              high quality energy installers that we have vetted thoroughly.
            </p>
            <p className="mt-[0.5vw] ">
              We use our proprietary technology to analyze the potential of any
              home and advise precisely about the ideal project so we can give
              customers an offer in seconds.
            </p>
            <p className="mt-[0.5vw] ">
              Founded in Oslo in 2016, we are the leading marketplace for
              residential solar in Europe and have sold and completed thousands
              of solar energy projects across the continent.
            </p>
            <p className="mt-[0.5vw] ">
              Our team consists of engineers, programmers and technical
              consultants located all over Europe.
            </p>
          </div>
        </div>
      </div>
      <LandingCards />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
