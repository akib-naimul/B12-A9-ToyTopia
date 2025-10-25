import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = React.useContext(AuthContext);

  const navLink = ({ isActive }) =>
    `px-3 py-2 rounded-xl transition ${
      isActive ? "bg-white/20 text-white shadow-sm" : "text-white/90 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* top gradient accent */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"></div>

      <nav className="backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 navbar">
          {/* Brand */}
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl tracking-wide text-white">
              <span className="mr-2">🧸</span> ToyTopia
            </Link>
          </div>

          {/* Desktop menu */}
          <ul className="menu menu-horizontal hidden md:flex gap-1">
            <li><NavLink to="/" className={navLink}>Home</NavLink></li>
            <li><NavLink to="/all-toys" className={navLink}>All Toys</NavLink></li>
            <li><NavLink to="/add-toy" className={navLink}>Add Toy</NavLink></li>
            <li><NavLink to="/my-toys" className={navLink}>My Toys</NavLink></li>
            <li><NavLink to="/blog" className={navLink}>Blog</NavLink></li>
          </ul>

          {/* Right side auth */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-9 rounded-full ring ring-primary/60 ring-offset-1">
                    <img src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"} alt="user" />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-56 text-black">
                  <li className="px-2 py-1">
                    <div className="font-semibold">{user.displayName || "User"}</div>
                    <div className="opacity-70 text-xs">{user.email}</div>
                  </li>
                  <li><Link to="/my-toys">My Toys</Link></li>
                  <li><button onClick={logout}>Logout</button></li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost btn-sm text-white/90">Login</Link>
                <Link to="/register" className="btn btn-primary btn-sm rounded-xl">Register</Link>
              </>
            )}

            {/* menu */}
            <div className="md:hidden dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
              </div>
              <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-56">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/all-toys">All Toys</NavLink></li>
                <li><NavLink to="/add-toy">Add Toy</NavLink></li>
                <li><NavLink to="/my-toys">My Toys</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
