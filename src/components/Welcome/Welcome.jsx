import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionWithAOS = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-gray-200 ps-10">
      <div className="container py-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <div className="md:order-2">
            <img
              src="https://i.ibb.co/bF5Cc0B/794196-14204-NPEX1-K.jpg"
              alt="smile Image"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Thanks For Visiting Our Website
            </h2>
            <p className="text-gray-800">
              We are really happy to serving you what you wnated from us. We
              hope that you are satisfied with our wor and services. Please do
              let us know what you think about us and what can we improve in
              future. Wish you a very good present and future. It will be
              pleasure if you can give us some rating. THANK YOU again for your
              precious time. Be safe.
            </p>
            <button className="btn btn-primary mt-4">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWithAOS;
