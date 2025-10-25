import React, { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortBy, setSortBy] = useState("createdAtDesc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My Toys";
    setLoading(true);
    fetch("/toys.json")
      .then((r) => r.json())
      .then((data) => setToys(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const mine = useMemo(() => {
    const list = toys.filter(
      (t) => (t.sellerEmail || "").toLowerCase() === (user?.email || "").toLowerCase()
    );
    switch (sortBy) {
      case "priceAsc":
        return [...list].sort((a, b) => (a.price || 0) - (b.price || 0));
      case "priceDesc":
        return [...list].sort((a, b) => (b.price || 0) - (a.price || 0));
      case "ratingDesc":
        return [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return [...list].sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        );
    }
  }, [toys, user, sortBy]);

  const handleDelete = (id) => {
    // Frontend-only demo (remove from state). Replace with actual DELETE call once API exists.
    const ok = confirm("Delete this toy?");
    if (!ok) return;
    const next = toys.filter((t) => String(t.toyId || t.id) !== String(id));
    setToys(next);
    toast.success("Deleted");
  };

  if (loading) {
    return (
      <div className="min-h-[40vh] grid place-items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <h1 className="text-3xl font-bold">My Toys</h1>
        <select
          className="select select-bordered w-full sm:w-56"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="createdAtDesc">Newest</option>
          <option value="priceAsc">Price: Low → High</option>
          <option value="priceDesc">Price: High → Low</option>
          <option value="ratingDesc">Rating: High → Low</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Toy</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Qty</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mine.map((toy) => {
              const id = toy.toyId || toy.id;
              return (
                <tr key={id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img src={toy.pictureURL} alt={toy.toyName} />
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">{toy.toyName}</td>
                  <td>{toy.subCategory || "—"}</td>
                  <td>${Number(toy.price || 0).toFixed(2)}</td>
                  <td>{toy.rating ?? "—"}</td>
                  <td>{toy.availableQuantity ?? "—"}</td>
                  <td className="flex gap-2">
                    <Link to={`/update/${id}`} className="btn btn-sm">Update</Link>
                    <button onClick={() => handleDelete(id)} className="btn btn-sm btn-outline">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {mine.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-10 opacity-70">
                  You haven’t added any toys yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
