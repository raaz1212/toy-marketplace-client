import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    // Fetch toy details based on the provided ID
    fetch(`http://localhost:5000/toys/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const toyData = {
          ...data,
          rating: parseFloat(data.rating), // Convert rating to a number
        };
        setToy(toyData);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!toy) {
    return null; // or you can return a loading indicator or an appropriate message
  }

  // function to convert rating to star icons
  const getStarIcons = (rating) => {
    const roundedRating = Number(rating.toFixed(2));
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((star, i) => (
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" key={i} />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
        )}
        {[...Array(emptyStars)].map((star, i) => (
          <FontAwesomeIcon icon={farStar} className="text-yellow-500" key={i} />
        ))}
      </>
    );
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Toy Details
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img className="w-full h-auto" src={toy.photo} alt={toy.name} />
          </div>
          <div className="w-0.5 bg-gray-600 mx-8"></div>{" "}
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-bold">
              {toy.name}
            </h3>
            <p className="text-gray-600 mb-2">Seller: {toy.sellerName}</p>
            <p className="text-gray-600 mb-2">
              Seller Email: {toy.sellerEmail}
            </p>
            <p className="text-gray-600 mb-2">Price: ${toy.price}</p>
            <div className="flex items-center mb-2">
              <span className="text-gray-600">
                Rating: {getStarIcons(toy.rating)}
              </span>
            </div>
            <p className="text-gray-600 mb-2">
              Available Quantity: {toy.quantity}
            </p>
            <p className="text-black">{toy.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetails;
