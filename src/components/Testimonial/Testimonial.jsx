import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper modules from the new location
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum veritatis nemo delectus soluta molestias facilis.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description:
      "Excellent service! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi harum quibusdam pariatur!",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quam veritatis voluptatem.",
    aosDelay: "1000",
  },
  {
    name: "Ravi",
    image: "",
    description:
      "Amazing experience! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    aosDelay: "700",
  },
  {
    name: "Anita",
    image: "",
    description:
      "Great quality and customer support. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Our clients' satisfaction is our priority. Here’s what they have
              to say about their experience working with us.
            </p>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={testimonial.aosDelay}
                  className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
                >
                  <div className="grid place-items-center">
                    <img
                      src="https://picsum.photos/200"
                      alt={testimonial.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                  <p className="italic">{`"${testimonial.description}"`}</p>
                  <p className="text-center font-semibold">{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Footer Call-to-Action */}
          <div className="mt-12 text-center">
            <p className="text-lg sm:text-xl">
              Want to share your own experience with us?{" "}
              <span className="font-bold text-blue-500">
                Contact us today!
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
