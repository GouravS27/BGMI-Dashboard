import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState("");

  const handleLogin = () => {
    if (!userId.trim()) {
      alert("Please enter User ID");
      return;
    }

    // Save user (you can later connect backend)
    localStorage.setItem("userId", userId);

    onLogin(userId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 pb-20">

      <div className="bg-gradient-to-r from-[#000000] to-[#121d30]  p-8 rounded-2xl border border-white/10 w-full max-w-md shadow-lg">

        {/* Title */}
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          BGMI Tracker Login
        </h1>

        {/* Input */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">User ID</label>
          <input
            type="text"
            placeholder="Enter your User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white outline-none focus:border-orange-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;