import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Modal from "react-modal";

// Set the app element
Modal.setAppElement("#root");

const customModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    padding: "60px",
    width: "600px",
  },
};

const MyToysPage = () => {
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    // Fetch user-specific toys data from the server
    // and update the `toys` state variable with the response
    fetch(`http://localhost:5000/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleUpdate = (_id) => {
    const selected = toys.find((toy) => toy._id === _id);
    setSelectedToy(selected);
    setIsModalOpen(true);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };

  const handleModalClose = () => {
    setSelectedToy(null);
    setIsModalOpen(false);
  };

  const handleToyUpdate = () => {
    // Perform the update action here
    // You can fetch the update API or perform any other necessary logic
    // Once the update is successful, close the modal and update the state
    handleModalClose();
  };

  return (
    <div className="p-10 text-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">My Toys</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Detail Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.name}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleUpdate(toy._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(toy._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        style={customModalStyles}
        contentLabel="Update Toy Modal"
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-red-500">
          Update Your Toy
        </h2>
        <form onSubmit={handleToyUpdate} className="space-y-4 bg-green-50 p-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={selectedToy?.name || ""}
              onChange={(e) =>
                setSelectedToy((prevToy) => ({
                  ...prevToy,
                  name: e.target.value,
                }))
              }
              className="form-input bg-slate-100 px-4 py-3 w-full rounded-md border border-1 border-slate-500 shadow-md"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price:
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={selectedToy?.price || ""}
              onChange={(e) =>
                setSelectedToy((prevToy) => ({
                  ...prevToy,
                  price: e.target.value,
                }))
              }
              className="form-input bg-slate-100 px-4 py-3 w-full rounded-md border border-1 border-slate-500 shadow-md"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Available Quantity:
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={selectedToy?.quantity || ""}
              onChange={(e) =>
                setSelectedToy((prevToy) => ({
                  ...prevToy,
                  quantity: e.target.value,
                }))
              }
              className="form-input bg-slate-100 px-4 py-3 w-full rounded-md border border-1 border-slate-500 shadow-md"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Detail Description:
            </label>
            <textarea
              name="description"
              id="description"
              value={selectedToy?.description || ""}
              onChange={(e) =>
                setSelectedToy((prevToy) => ({
                  ...prevToy,
                  description: e.target.value,
                }))
              }
              className="form-input bg-slate-100 px-4 py-3 w-full rounded-md border border-1 border-slate-500 shadow-md"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-orange-500 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:border-orange-700 focus:ring-orange-300 disabled:opacity-50"
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleModalClose}
              className="inline-flex items-center px-6 py-3 ml-4 bg-gray-500 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:border-gray-700 focus:ring-gray-300 disabled:opacity-50"
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MyToysPage;
