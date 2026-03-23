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

  if (!stats) {
    return <div className="text-white text-center p-6">Loading stats...</div>;
  }

  const totalMatches = stats.totalMatches || 0;
  const totalWins = stats.totalWins || 0;
  const totalKills = stats.totalKills || 0;
  const totalDamage = stats.totalDamage || 0;
  const totalDamageTaken = stats.totalDamageTaken || 0;

  const kd = totalMatches ? (totalKills / totalMatches).toFixed(2) : 0;

  const winRate = totalMatches
    ? ((totalWins / totalMatches) * 100).toFixed(1)
    : 0;

  const avgDamage = totalMatches ? (totalDamage / totalMatches).toFixed(0) : 0;

  const avgDamageTaken = totalMatches
    ? (totalDamageTaken / totalMatches).toFixed(0)
    : 0;

  const gridData = [
    { title: "Total Matches", value: totalMatches, color: "text-gray-300" },
    { title: "Wins", value: totalWins, color: "text-yellow-400" },
    { title: "Total Kills", value: totalKills, color: "text-red-500" },

    { title: "Total Damage", value: totalDamage, color: "text-orange-400" },
    {
      title: "Total Damage Taken",
      value: totalDamageTaken,
      color: "text-pink-400",
    },

    { title: "Avg Damage", value: avgDamage, color: "text-indigo-400" },
    {
      title: "Avg Damage Taken",
      value: avgDamageTaken,
      color: "text-purple-400",
    },

    { title: "K/D Ratio", value: kd, color: "text-blue-400" },
    { title: "Win Rate", value: `${winRate}%`, color: "text-green-500" },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-[#000000] to-[#121d30] rounded-xl m-2">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {gridData.map((stat, index) => (
          <div
            key={index}
            className="bg-[#151b29] border border-white/10 rounded-2xl p-5 hover:bg-[#0f1b3d] transition"
          >
            <p className="text-gray-400 text-xs lg:text-base mb-2 flex gap-1 font-bold">
              <BoltIcon className="w-6 h-6 text-yellow-500" />
              {stat.title}
            </p>

            <h2 className={`text-2xl pl-2 font-bold ${stat.color}`}>{stat.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatGrid;
