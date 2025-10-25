import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import Gallery from '../Components/Gallery';
import { Link } from "react-router-dom";
import CategoryTabs from '../Components/CategoryTabs';

const Home = () => {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Home";
        fetch('/toys.json')
            .then(res => res.json())
            .then(data => setToys(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className="text-center p-6">Loading...</div>;
    }

    return (
        <div className="space-y-10">
            <Banner />

            <CategoryTabs />

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Featured Toys</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {toys.slice(0, 6).map((toy) => (
                        <div
                            key={toy.toyId}
                            className="card bg-base-100 shadow-xl border border-white/10 hover:border-primary/40 hover:shadow-primary/20 transition-all duration-300"
                            data-aos="fade-up">
                            <figure className="p-5 bg-base-200/40">
                                <img
                                    src={toy.pictureURL}
                                    alt={toy.toyName}
                                    className="h-60 w-full object-cover rounded-lg transition-transform group-hover:scale-105"
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-black">{toy.toyName}</h3>
                                <p className="text-sm opacity-80 text-black">{toy.subCategory}</p>
                                <div className="card-actions justify-between items-center">
                                    <span className="font-semibold text-black">${Number(toy.price).toFixed(2)}</span>
                                    <Link to={`/toy/${toy.toyId}`} className="btn btn-primary btn-sm">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Gallery />
        </div>
    );
};

export default Home;
