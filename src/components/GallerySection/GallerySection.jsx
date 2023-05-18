import React from "react";

const GallerySection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300 hover:transform hover:-translate-y-1">
            <img
              className="w-full py-auto h-auto object-cover"
              src="https://i.ibb.co/5vtzJQh/image-2.png"
              alt=""
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300 hover:transform hover:-translate-y-1">
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/4tw3qs2/Screenshot-2023-05-18-052337-2.png"
              alt=""
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300 hover:transform hover:-translate-y-1">
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/NxQDcCf/Screenshot-2023-05-18-052532.png"
              alt=""
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:border-2 border-pink-500 transition-colors duration-300 hover:transform hover:-translate-y-1">
            <img
              className="w-full h-auto object-cover"
              src="https://i.ibb.co/h2VMCVq/image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
