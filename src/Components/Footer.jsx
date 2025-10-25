import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#1e1e1e] to-[#2a2a2a] mt-12 border-t border-white/10 text-gray-200">
      <div className="container mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl grid place-items-center bg-primary text-primary-content font-bold">TOY</div>
            <span className="text-lg font-extrabold tracking-tight">ToyTopia</span>
          </div>
          <p className="opacity-70 text-sm">
            Premium toys for curious minds. Safe, durable, and fun—curated for every age.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2 opacity-80">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <ul className="space-y-2 opacity-80">
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Newsletter</h3>
          <p className="opacity-80 text-sm mb-3">
            Get product news and exclusive offers straight to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="join w-full">
            <input type="email" placeholder="you@example.com" className="input input-bordered join-item w-full" />
            <button className="btn btn-primary join-item">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} ToyTopia. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm opacity-80">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
