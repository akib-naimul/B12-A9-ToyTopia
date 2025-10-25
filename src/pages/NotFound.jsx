import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] grid place-items-center text-center space-y-4">
      <h1 className="text-6xl font-black">404</h1>
      <p className="opacity-70">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
};

export default NotFound;
