import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GallerySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-primary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300  "
          >
            <img
              className="w-full py-auto h-auto object-cover"
              src="https://i.ibb.co/5vtzJQh/image-2.png"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300  "
          >
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/4tw3qs2/Screenshot-2023-05-18-052337-2.png"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300  "
          >
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/NxQDcCf/Screenshot-2023-05-18-052532.png"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300  "
          >
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/h2VMCVq/image.png"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300  "
          >
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/dfQVC09/71v-O8-S7lp-UL-AC-SX679.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300  "
          >
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/Nsr0vW3/71ah-J-2-Iv1-L-AC-SX679.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300  "
          >
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/YtztTCr/81pi-Odc-DB0-L-AC-SX679.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300  "
          >
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/7Kv2tJH/61-R-pf-A7yc-L-AC-SX679.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
