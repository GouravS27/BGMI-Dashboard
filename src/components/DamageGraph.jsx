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

const DamageGraph = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchDamage = async () => {
      try {
        const res = await API.get("/last-matches-damage");
        setData(res.data.data);
        setTotal(res.data.total);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    };

    fetchDamage();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#121d30] p-6 rounded-2xl border border-white/10">
      
      {/* Dynamic Title */}
      <h2 className="text-white text-lg mb-4">
        Last {total} Matches (Damage)
      </h2>

      {total === 0 ? (
        <p className="text-gray-400 text-center">
          No matches played yet
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="match" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="damage"
              stroke="#eab308" // yellow
              strokeWidth={3}
              dot
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DamageGraph;