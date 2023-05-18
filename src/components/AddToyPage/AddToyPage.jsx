import React from "react";

const AddToyPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToys = {
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

    console.log(newToys);

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
            <label className="block font-medium">Name:</label>
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
              className="input input-bordered"
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
            <label className="block font-medium">Price:</label>
            <input
              type="number"
              name="price"
              className="input input-bordered"
            />
          </div>
          <div>
            <label className="block font-medium">Rating:</label>
            <input
              type="number"
              name="rating"
              className="input input-bordered"
            />
          </div>
          <div>
            <label className="block font-medium">Available Quantity:</label>
            <input
              type="number"
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
