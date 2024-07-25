import React from "react";
import Flag from "react-world-flags";

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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Join the <span className="text-orange-500">solar revolution</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Your roof is an untapped resource. Save money and the environment by
          going solar.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map((country) => (
          <button
            key={country.code}
            className="bg-white p-4 rounded shadow hover:shadow-md transition duration-300 flex items-center justify-center space-x-2"
          >
            <Flag code={country.code} className="w-6 h-6" />
            <span className="text-gray-800">{country.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-8">
        <img
          src="/path-to-your-image/solar-houses.png"
          alt="Solar houses illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
