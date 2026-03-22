import React, { useEffect, useState } from "react";
import { BoltIcon } from "@heroicons/react/24/solid";
import API from "../utils/axios";

const StatGrid = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/profile");
        setStats(res.data.stats);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    };

    fetchStats();
  }, []);

  // 🔄 Loading state
  if (!stats) {
    return (
      <div className="text-white text-center p-6">
        Loading stats...
      </div>
    );
  }

  // ✅ Extract values
  const totalMatches = stats.totalMatches || 0;
  const totalWins = stats.totalWins || 0;
  const totalKills = stats.totalKills || 0;
  const totalDamage = stats.totalDamage || 0;
  const totalDamageTaken = stats.totalDamageTaken || 0;

  // ✅ Derived calculations
  const kd = totalMatches ? (totalKills / totalMatches).toFixed(2) : 0;

  const winRate = totalMatches
    ? ((totalWins / totalMatches) * 100).toFixed(1)
    : 0;

  const avgDamage = totalMatches
    ? (totalDamage / totalMatches).toFixed(0)
    : 0;

  const avgDamageTaken = totalMatches
    ? (totalDamageTaken / totalMatches).toFixed(0)
    : 0;

  // 🔥 Final grid data
  const gridData = [
    { title: "Total Matches", value: totalMatches },
    { title: "Wins", value: totalWins },
    { title: "Total Kills", value: totalKills },

    { title: "Total Damage", value: totalDamage },
    { title: "Total Damage Taken", value: totalDamageTaken },

    { title: "Avg Damage", value: avgDamage },
    { title: "Avg Damage Taken", value: avgDamageTaken },

    { title: "K/D Ratio", value: kd },
    { title: "Win Rate", value: `${winRate}%` },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-[#000000] to-[#121d30] rounded-xl m-2">

      {/* ✅ Updated Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {gridData.map((stat, index) => (
          <div
            key={index}
            className="bg-[#151b29] border border-white/10 rounded-2xl p-5 hover:bg-[#0f1b3d] transition"
          >
            {/* Title */}
            <p className="text-gray-400 text-sm mb-2 flex gap-1 font-bold">
              <BoltIcon className="w-6 h-6 text-yellow-500" />
              {stat.title}
            </p>

            {/* Value */}
            <h2 className="text-2xl font-bold text-white">
              {stat.value}
            </h2>
          </div>
        ))}

      </div>
    </div>
  );
};

export default StatGrid;