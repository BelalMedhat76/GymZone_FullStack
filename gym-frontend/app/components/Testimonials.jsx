"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    review: "This gym changed my life! The trainers are amazing and the programs are top-notch.",
    image: "/back2.jpg",
  },
  {
    name: "Sarah Smith",
    review: "I lost 20kg in 3 months thanks to their weight loss program. Highly recommended!",
    image: "/back1.jpg",
  },
  {
    name: "Michael Johnson",
    review: "Best fitness center in town. The facilities are excellent and the atmosphere is motivating!",
    image: "/back4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section  className="py-20 px-10 bg-gray-900 text-white ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-20">What Our Clients Say</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-opacity-90 backdrop-blur-md bg-white/10  p-6 rounded-lg h-[260px] shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4"
                />
                <p className="text-lg italic">"{testimonial.review}"</p>
                <h3 className="font-bold text-xl mt-2">{testimonial.name}</h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
