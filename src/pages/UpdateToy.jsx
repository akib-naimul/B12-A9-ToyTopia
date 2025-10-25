import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateToy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  const toy = useMemo(
    () => toys.find((t) => String(t.toyId || t.id) === String(id)),
    [toys, id]
  );

  useEffect(() => {
    document.title = "Update Toy";
    fetch("/toys.json")
      .then((r) => r.json())
      .then((data) => setToys(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const price = Number(form.get("price"));
    const availableQuantity = Number(form.get("availableQuantity"));
    const description = String(form.get("description") || "");

    if (price < 0) return toast.error("Price must be positive");
    if (availableQuantity < 0) return toast.error("Quantity must be positive");

    // Replace with PUT/PATCH to backend
    console.log("UPDATE TOY", { id, price, availableQuantity, description });

    toast.success("Toy updated");
    navigate(-1);
  };

  if (loading || !toy) {
    return (
      <div className="min-h-[40vh] grid place-items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Update Toy</h1>

      <div className="card bg-base-100 shadow p-6 space-y-4">
        <div className="flex items-center gap-4">
          <img src={toy.pictureURL} alt={toy.toyName} className="h-24 w-24 object-contain rounded" />
          <div>
            <div className="text-xl font-semibold">{toy.toyName}</div>
            <div className="opacity-70">{toy.subCategory || "—"}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label"><span className="label-text">Price ($)</span></label>
            <input name="price" type="number" className="input input-bordered" step="0.01" min="0"
                   defaultValue={toy.price || 0} />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Available Quantity</span></label>
            <input name="availableQuantity" type="number" className="input input-bordered" min="0"
                   defaultValue={toy.availableQuantity || 0} />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text">Description</span></label>
            <textarea name="description" rows="4" className="textarea textarea-bordered"
                      defaultValue={toy.description || ""} />
          </div>

          <div className="md:col-span-2">
            <button className="btn btn-primary w-full">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
