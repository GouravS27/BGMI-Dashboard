import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios";

const Login = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!userId.trim()) {
      console.log("login user wrong");
      return;
    }

    try {
      const res = await API.post("/login", {
        userId: userId.toLowerCase(),
      });

      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 pb-30 m-4">
      <div className="bg-linear-to-r from-[#000000] to-[#121d30] p-8 rounded-2xl border border-white/10 w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          BGMI Tracker Login
        </h1>

        <div className="mb-4">
          <label className="text-gray-400 text-sm">User ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white outline-none focus:border-orange-500"
          />
        </div>

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
