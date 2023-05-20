import React, { useState } from "react";

const Footer = (props) => {
  const [showAddToTopButton, setShowAddToTopButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowAddToTopButton(scrollTop > 0);
  };

  const handleAddToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add event listener to detect scrolling
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-sky-100 p-8 rounded-lg">
            <h2 className="text-2xl mb-4">Coming Soon</h2>
            <p>This feature is coming soon. Stay tuned!</p>
            <button className="btn btn-success mt-4" onClick={handleCloseModal}>
              OK
            </button>
          </div>
        </div>
      )}
      {showAddToTopButton && (
        <button
          className="btn bg-blue-500 fixed bottom-5 right-5"
          onClick={handleAddToTop}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2em"
            width="2em"
            {...props}
          >
            <path d="M5 15h4v6h6v-6h4l-7-8zM4 3h16v2H4z" />
          </svg>
        </button>
      )}
      <footer className="footer p-10 bg-base-200 text-neutral-content">
        <div>
          <img
            src="https://i.ibb.co/2YpGGQv/logo.jpg"
            alt=""
            className="w-18 h-8 mr-2"
          />
          <p className="text-blue-700">
            DC Toys Industries Ltd.
            <br />
            Providing reliable toys since 1969
          </p>
        </div>
        <div>
          <span className="text-xl text-slate-700 font-bold">Social</span>
          <div className="grid grid-flow-col gap-4">
            <button onClick={handleOpenModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-cyan-500"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </button>
            <button onClick={handleOpenModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-red-700"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </button>
            <button onClick={handleOpenModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-700"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl text-slate-700 font-bold">Contact</h2>
          <p className="text-slate-800">
            Address: 123 Toy Street, Cityville, Country
            <br />
            Phone: +1 123-456-7890
            <br />
            Email: info@dctoys.com
          </p>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-base-200 text-base-content">
        <p>Copyright © 2023 - All right reserved by DC Toys Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
