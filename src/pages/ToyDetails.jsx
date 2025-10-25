import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Toy Details";
    fetch("/toys.json")
      .then((r) => r.json())
      .then((data) => {
        const found =
          data.find((t) => String(t.toyId || t.id) === String(id)) ||
          data.find((t) => String(t.id) === String(id));
        setToy(found || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[40vh] grid place-items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!toy) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Toy not found</h1>
        <Link to="/all-toys" className="btn btn-primary">Back to All Toys</Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card bg-base-100 shadow">
        <figure className="p-6">
          <img src={toy.pictureURL} alt={toy.toyName} className="max-h-96 object-contain" />
        </figure>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold">{toy.toyName}</h1>
        <p className="opacity-80">
          <span className="font-semibold">Category:</span> {toy.subCategory || "—"}
        </p>
        <p><span className="font-semibold">Price:</span> ${Number(toy.price || 0).toFixed(2)}</p>
        <p><span className="font-semibold">Rating:</span> {toy.rating ?? "—"}</p>
        <p><span className="font-semibold">Available:</span> {toy.availableQuantity ?? "—"}</p>
        <div>
          <div className="font-semibold">Seller</div>
          <div>{toy.sellerName || "—"}</div>
          <div className="opacity-70 text-sm">{toy.sellerEmail || ""}</div>
        </div>
        <p className="pt-2">{toy.description || "No description provided."}</p>

        <div className="pt-4 flex gap-3">
          <Link to="/all-toys" className="btn">Back</Link>
          <Link to={`/update/${toy.toyId || toy.id || id}`} className="btn btn-outline">Update</Link>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
