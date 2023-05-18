import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CustomerReview = () => {
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
        <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
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
      </div>
    </section>
  );
};

export default CustomerReview;
