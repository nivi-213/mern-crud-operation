import React, { useState, useEffect } from "react";
import { addUser, getSingleUsers, updateUsers } from "../service/Api";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adduser = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    district: "",
    state: "",
  });

  useEffect(() => {
    const loadSingleUser = async () => {
      try {
        if (_id) {
          const response = await getSingleUsers(_id);
          setFormData(response);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    loadSingleUser();
  }, [_id]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (_id) {
        // Update user
        const response = await updateUsers(_id, formData);
        toast.success(response.message, {
          position: "top-right",
          className: "bg-green-500 text-white",
        });
      } else {
        // Add user
        const response = await addUser(formData);
        toast.success(response.message, {
          position: "top-right",
          className: "bg-green-500 text-white",
        });
      }

      // Clear form data
      setFormData({
        name: "",
        email: "",
        district: "",
        state: "",
      });

      // Navigate to the appropriate route
      setTimeout(() => {
        navigate("/all");
      }, 1000);
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        className: "bg-red-500 text-white",
      });
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-4 text-center">
        Add Form
      </h1>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto border p-5 rounded-md"
      >
        <div className="my-2">
          <label htmlFor="name" className="text-gray-500 text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1"
            required
            value={formData.name}
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="email"
            className="text-gray-500 text-lg font-semibold"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1"
            required
            value={formData.email}
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="district"
            className="text-gray-500 text-lg font-semibold"
          >
            District
          </label>
          <input
            type="text"
            name="district"
            id="district"
            onChange={handleChange}
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1"
            required
            value={formData.district}
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="state"
            className="text-gray-500 text-lg font-semibold"
          >
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            onChange={handleChange}
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1"
            required
            value={formData.state}
          />
        </div>
        <button className="bg-gray-700 w-full px-4 py-2 text-white text-lg font-semibold rounded-md hover:bg-gray-800">
          {_id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Adduser;
