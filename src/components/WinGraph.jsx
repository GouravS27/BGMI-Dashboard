import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import API from "../utils/axios";

const WinGraph = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await API.get("/last-matches-kills");
        setData(res.data.data);
        setTotal(res.data.total);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#121d30] p-6 rounded-2xl border border-white/10">
      
      {/* ✅ Dynamic Title */}
      <h2 className="text-white text-lg mb-4">
        Last {total} Matches (Kills)
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="match" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="kills"
            stroke="#f97316"
            strokeWidth={3}
            dot
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WinGraph;