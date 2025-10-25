import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    document.title = "All Toys";
    setLoading(true);
    fetch("/toys.json")
      .then((r) => r.json())
      .then((data) => setToys(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    let list = !term
      ? toys
      : toys.filter((t) => {
          const name = (t.toyName || "").toLowerCase();
          const cat = (t.subCategory || "").toLowerCase();
          const seller = (t.sellerName || "").toLowerCase();
          return name.includes(term) || cat.includes(term) || seller.includes(term);
        });

    switch (sortBy) {
      case "priceAsc":
        list = [...list].sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "priceDesc":
        list = [...list].sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "ratingDesc":
        list = [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }
    return list;
  }, [toys, q, sortBy]);

  if (loading) {
    return (
      <div className="min-h-[40vh] grid place-items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
        <h1 className="text-3xl font-bold">All Toys</h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            className="input input-bordered w-full sm:w-72"
            placeholder="Search by name, category, seller"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select
            className="select select-bordered"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort</option>
            <option value="priceAsc">Price: Low → High</option>
            <option value="priceDesc">Price: High → Low</option>
            <option value="ratingDesc">Rating: High → Low</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Seller</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.toyId || t.id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-14 h-14">
                      <img src={t.pictureURL} alt={t.toyName} />
                    </div>
                  </div>
                </td>
                <td className="font-medium">{t.toyName}</td>
                <td>{t.sellerName || "—"}</td>
                <td>{t.subCategory || "—"}</td>
                <td>${Number(t.price || 0).toFixed(2)}</td>
                <td>{t.rating ?? "—"}</td>
                <td>
                  <Link to={`/toy/${t.toyId || t.id}`} className="btn btn-sm btn-primary">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-10 opacity-70">
                  No toys found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
