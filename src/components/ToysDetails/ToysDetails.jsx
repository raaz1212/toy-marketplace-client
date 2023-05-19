import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    // Fetch toy details based on the provided ID
    fetch(`http://localhost:5000/toys/${id}`)
      .then((response) => response.json())
      .then((data) => setToy(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!toy) {
    return null; // or you can return a loading indicator or an appropriate message
  }

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
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-4">{toy.name}</h3>
            <p className="text-gray-600 mb-2">Seller: {toy.sellerName}</p>
            <p className="text-gray-600 mb-2">
              Seller Email: {toy.sellerEmail}
            </p>
            <p className="text-gray-600 mb-2">Price: ${toy.price}</p>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 mr-1">&#9733;</span>
              <span className="text-gray-600">{toy.rating}</span>
            </div>
            <p className="text-gray-600 mb-2">
              Available Quantity: {toy.quantity}
            </p>
            <p className="text-gray-600">{toy.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetails;
