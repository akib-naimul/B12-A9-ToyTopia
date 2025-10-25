import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    try {
      setSubmitting(true);
      await register(email, password, name, photoURL);
      toast.success("Account created");
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      toast.error("Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto card bg-base-100 shadow p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">Create Account</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" type="text" className="input input-bordered w-full text-black" placeholder="Full Name" />
        <input name="photoURL" type="url" className="input input-bordered w-full text-black" placeholder="Photo URL" />
        <input name="email" type="email" className="input input-bordered w-full text-black" placeholder="Email" required />
        <input name="password" type="password" className="input input-bordered w-full text-black" placeholder="Password" required />
        <button className="btn btn-primary w-full" disabled={submitting}>
          {submitting ? "Please wait..." : "Register"}
        </button>
      </form>
      <p className="pt-3 text-sm text-black">
        Already have an account? <Link to="/login" className="link">Login</Link>
      </p>
    </div>
  );
};

export default Register;
