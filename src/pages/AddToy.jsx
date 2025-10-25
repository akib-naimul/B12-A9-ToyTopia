import React, { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => { document.title = "Add Toy"; }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      toyName: fd.get("toyName"),
      subCategory: fd.get("subCategory"),
      price: Number(fd.get("price")),
      rating: Number(fd.get("rating")),
      availableQuantity: Number(fd.get("availableQuantity")),
      pictureURL: fd.get("pictureURL"),
      description: fd.get("description"),
      sellerName: user?.displayName || "",
      sellerEmail: user?.email || "",
      createdAt: new Date().toISOString(),
    };

    // TODO: POST to your backend API
    console.log("ADD TOY", payload);

    toast.success("Toy added");
    navigate("/my-toys", { replace: true });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 text-black">
      <h1 className="text-3xl font-bold">Add a Toy</h1>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 card bg-base-100 shadow p-6">
        <div className="form-control">
          <label className="label"><span className="label-text">Toy Name</span></label>
          <input name="toyName" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Category</span></label>
          <select name="subCategory" className="select select-bordered" required>
            <option value="">Select a category</option>
            <option>Vehicles</option>
            <option>Robots</option>
            <option>Dolls</option>
            <option>Animals</option>
            <option>Learning</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Price ($)</span></label>
          <input name="price" type="number" step="0.01" min="0" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Rating (0–5)</span></label>
          <input name="rating" type="number" step="0.1" min="0" max="5" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Available Quantity</span></label>
          <input name="availableQuantity" type="number" min="0" className="input input-bordered" required />
        </div>

        <div className="form-control md:col-span-2">
          <label className="label"><span className="label-text">Picture URL</span></label>
          <input name="pictureURL" type="url" className="input input-bordered" required />
        </div>

        <div className="form-control md:col-span-2">
          <label className="label"><span className="label-text">Description</span></label>
          <textarea name="description" rows="4" className="textarea textarea-bordered" />
        </div>

        <div className="md:col-span-2">
          <button className="btn btn-primary w-full">Add Toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
