import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllToysPage = () => {
  document.title = "DC Toys | All Toys";
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    // all toys data fetch from the server
    fetch("https://toy-store-server-pied.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data.slice(0, 20)); //  20 results by default
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = toys.filter((toy) =>
      toy.name.toLowerCase().includes(query)
    );
    setFilteredToys(filtered);
  };

  return (
    <div className="p-10 text-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">All Toys</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border-2 border-green-500 rounded-md bg-white outline-none"
        />
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.sellerName}</td>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <Link to={`/toys/${toy._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToysPage;
