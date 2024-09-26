import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import car1 from "../../assets/car1.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex flex-col justify-center space-y-16 py-14">
        {/* Hero Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="Car"
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="leading-7 text-lg">
              Choose from a variety of premium cars and get the best rental deals tailored to your needs. We ensure a hassle-free experience, whether it's for daily commutes or luxury events.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-white"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* New Benefits Section */}
        <div className="container py-8">
          <h2
            data-aos="fade-up"
            className="text-center text-4xl font-bold mb-8"
          >
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="space-y-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">Best Rates</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We provide the most competitive prices in the market for top-quality vehicles.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="space-y-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">Wide Variety</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Choose from economy, luxury, or family cars to suit your specific needs.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="space-y-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our customer support is available round-the-clock to assist you with any queries.
              </p>
            </div>
          </div>
        </div>

        {/* Explore Our Cars Section */}
        <div className="container py-8">
          <h2
            data-aos="fade-up"
            className="text-center text-4xl font-bold mb-8"
          >
            Explore Our Cars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              data-aos="fade-up"
              className="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 hover:shadow-xl transition"
            >
              <img
                src={car1}
                alt="Car"
                className="w-full h-[200px] object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Economy Car
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Compact and fuel-efficient vehicles for daily commutes.
              </p>
              <button className="button-outline hover:bg-primary text-primary dark:text-white">
                Rent Now
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 hover:shadow-xl transition"
            >
              <img
                src={yellowCar}
                alt="Car"
                className="w-full h-[200px] object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Luxury SUV
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Premium SUVs with advanced features for a luxury experience.
              </p>
              <button className="button-outline hover:bg-primary text-primary dark:text-white">
                Rent Now
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 hover:shadow-xl transition"
            >
              <img
                src={carPng}
                alt="Car"
                className="w-full h-[200px] object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Family Van
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Spacious vans to accommodate families and luggage.
              </p>
              <button className="button-outline hover:bg-primary text-primary dark:text-white">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
