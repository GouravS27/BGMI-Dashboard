import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getClass = ({ isActive }) =>
    isActive
      ? "bg-gray-700 text-white px-3 py-2 rounded-md font-bold"
      : "text-gray-300 hover:text-white px-3 py-2 font-bold";

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-2xl text-gray-400 hover:text-white"
            >
              ☰
            </button>
          </div>

          {/* Logo */}
          <div class="avatar">
            <div className="mask mask-squircle h-12">
              <img src="https://sm.ign.com/ign_in/game/b/battlegrou/battlegrounds-mobile-india_ze4x.jpg" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-4">
            <NavLink to="/" className={getClass}>
              Overview
            </NavLink>
            <NavLink to="/matches" className={getClass}>
              Matches
            </NavLink>
            <NavLink to="/leaderboard" className={getClass}>
              Leaderboard
            </NavLink>
            <NavLink to="/profile" className={getClass}>
              Profile
            </NavLink>
            <NavLink to="/login" className={getClass}>
              Login
            </NavLink>
            <NavLink to="/admin" className={getClass}>
              Admin
            </NavLink>
          </div>

          {/* Profile */}
          <div class="avatar">
            <div class="mask mask-squircle h-12">
              <img src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-2 pb-3 space-y-1">
          <NavLink to="/" className={getClass}>
            Overview
          </NavLink>
          <NavLink to="/matches" className={getClass}>
            Matches
          </NavLink>
          <NavLink to="/leaderboard" className={getClass}>
            Leaderboard
          </NavLink>
          <NavLink to="/profile" className={getClass}>
            Profile
          </NavLink>
          <NavLink to="/login" className={getClass}>
            Login
          </NavLink>
          <NavLink to="/admin" className={getClass}>
            Admin
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
