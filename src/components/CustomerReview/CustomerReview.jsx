import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerReview = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic
    // You can also display a toast or perform any other action here

    // Show toast notification
    toast.success("Comment submitted successfully");

    // Clear comment field
    setComment("");
    setRating(0);
  };

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      comment: "Great products and excellent customer service!",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "I am impressed with the quality and fast shipping.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      comment: "Highly recommend this company. A+ experience!",
    },
  ];

  const reviewVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={reviewVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-400 mr-1"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-400 mr-1"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-400 mr-1"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-400 mr-1"
                  />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                </div>
                <p className="text-lg mb-4">{review.comment}</p>
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mr-1"
                  />
                  <p className="text-gray-700 font-semibold">{review.name}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <FontAwesomeIcon
                  key={value}
                  icon={faStar}
                  className={`text-yellow-400 cursor-pointer ${
                    value <= rating ? "text-yellow-600" : ""
                  }`}
                  onClick={() => setRating(value)}
                />
              ))}
            </div>
            <textarea
              className="w-full bg-white px-4 py-2 mb-4 rounded-md resize-none"
              placeholder="Enter your comment"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary text-black"
              disabled={rating === 0 || comment.trim() === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default CustomerReview;
