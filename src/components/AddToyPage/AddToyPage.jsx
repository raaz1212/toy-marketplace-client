import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddToyPage = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;

    if (name.trim() === "" || price.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all the required fields.",
      });
      return;
    }

    const photo = form.photo.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const rating = form.rating.value.toString();
    const quantity = form.quantity.value.toString();
    const description = form.description.value;

    const newToy = {
      photo,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };

    console.log(newToy);

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "Your Toy has been posted",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          form.reset();
          setIsFormComplete(false);
        });
      });
  };

  return (
    <div className="p-10 text-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">Add A Toy</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Picture URL:</label>
            <input type="text" name="photo" className="input input-bordered" />
          </div>
          <div>
            <label className="block font-medium">Name:(required)</label>
            <input type="text" name="name" className="input input-bordered" />
          </div>
          <div>
            <label className="block font-medium">Seller Name:</label>
            <input
              type="text"
              name="sellerName"
              className="input input-bordered"
            />
          </div>
          <div>
            <label className="block font-medium">Seller Email:</label>
            <input
              type="email"
              name="sellerEmail"
              defaultValue={user.email}
              className="disabled input-bordered input"
            />
          </div>
          <div>
            <label className="block font-medium">Sub-category:</label>
            <select name="subCategory" className="input input-bordered">
              <option value="flash">Flash Toys</option>
              <option value="batman">Batman Toys</option>
              <option value="superman">Superman Toys</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Price:(required)</label>
            <input type="text" name="price" className="input input-bordered" />
          </div>
          <div>
            <label className="block font-medium">Rating:</label>
            <input type="text" name="rating" className="input input-bordered" />
          </div>
          <div>
            <label className="block font-medium">Available Quantity:</label>
            <input
              type="text"
              name="quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div>
          <label className="block font-medium">Detail Description:</label>
          <textarea name="description" className="input input-bordered h-24" />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-2/5 mb-4 btn-add-toy"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToyPage;
