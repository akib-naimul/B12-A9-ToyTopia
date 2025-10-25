import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const CategoryTabs = () => {
  const [toys, setToys] = useState([]);
  const [active, setActive] = useState("All");

  useEffect(() => {
    fetch("/toys.json").then(r => r.json()).then(d => setToys(d || []));
  }, []);

  const categories = useMemo(() => {
    const set = new Set(["All"]);
    toys.forEach(t => t.subCategory && set.add(t.subCategory));
    return Array.from(set);
  }, [toys]);

  const view = useMemo(() => {
    if (active === "All") return toys.slice(0, 6);
    return toys.filter(t => t.subCategory === active).slice(0, 6);
  }, [toys, active]);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Browse by Category</h2>

      <div className="tabs tabs-boxed">
        {categories.map((c) => (
          <button
            key={c}
            className={`tab ${c === active ? "tab-active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {view.map((toy) => (
          <div key={toy.toyId || toy.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition group" data-aos="fade-up">
            <figure className="p-5 bg-base-200/40">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="h-60 w-full object-cover rounded-lg transition-transform group-hover:scale-105"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-black">{toy.toyName}</h3>
              <p className="opacity-70 text-black">{toy.subCategory}</p>
              <div className="card-actions justify-between items-center">
                <span className="font-semibold text-black">${Number(toy.price || 0).toFixed(2)}</span>
                <Link to={`/toy/${toy.toyId || toy.id}`} className="btn btn-sm btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
        {view.length === 0 && (
          <div className="col-span-full text-center opacity-70 py-10">No items in this category.</div>
        )}
      </div>
    </section>
  );
};

export default CategoryTabs;
