import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailPassword = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      setSubmitting(true);
      await login(email, password);
      toast.success("Logged in");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      toast.error("Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setSubmitting(true);
      await googleLogin();
      toast.success("Logged in with Google");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      toast.error("Google login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto card bg-base-100 shadow p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">Login</h1>
      <form onSubmit={handleEmailPassword} className="space-y-3">
        <input name="email" type="email" className="input input-bordered w-full text-black" placeholder="Email" required />
        <input name="password" type="password" className="input input-bordered w-full text-black" placeholder="Password" required />
        <button className="btn btn-primary w-full" disabled={submitting}>
          {submitting ? "Please wait..." : "Login"}
        </button>
      </form>
      <div className="divider text-black">OR</div>
      <button onClick={handleGoogle} className="btn btn-outline w-full text-black" disabled={submitting}>
        Continue with Google
      </button>
      <p className="pt-3 text-sm text-black">
        New here? <Link to="/register" className="link">Create an account</Link>
      </p>
    </div>
  );
};

export default Login;
