import React, { useEffect, useState } from "react";
import { FireIcon, TrophyIcon, ChartBarIcon, ChartPieIcon } from "@heroicons/react/24/solid";
import API from "../utils/axios";

const OverviewStats = () => {
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
    return (
      <div className="text-white text-center p-6">
        Loading stats...
      </div>
    );
  }

  const totalWins = stats.totalWins || 0;
  const totalKills = stats.totalKills || 0;
  const totalMatches = stats.totalMatches || 0;

  const kd = totalMatches ? (totalKills / totalMatches).toFixed(2) : 0;
  const winRate = totalMatches
    ? ((totalWins / totalMatches) * 100).toFixed(1)
    : 0;

  return (
    <div className="m-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">

        <div className="bg-gradient-to-r from-[#000000] to-[#121d30] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-yellow-500/20 mb-4 flex items-center justify-center">
            <TrophyIcon className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-gray-400 text-sm">Total Wins</p>
          <h2 className="text-3xl font-bold text-white">{totalWins}</h2>
        </div>

        <div className="bg-gradient-to-r from-[#000000] to-[#121d30] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-pink-500/20 mb-4 flex items-center justify-center">
            <FireIcon className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-gray-400 text-sm">Total Kills</p>
          <h2 className="text-3xl font-bold text-white">{totalKills}</h2>
        </div>

        <div className="bg-gradient-to-r from-[#000000] to-[#121d30] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 mb-4 flex items-center justify-center">
            <ChartBarIcon className="w-6 h-6 text-indigo-500" />
          </div>
          <p className="text-gray-400 text-sm">K/D Ratio</p>
          <h2 className="text-3xl font-bold text-white">{kd}</h2>
        </div>

        <div className="bg-gradient-to-r from-[#000000] to-[#121d30] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 mb-4 flex items-center justify-center">
            <ChartPieIcon className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-gray-400 text-sm">Win Rate</p>
          <h2 className="text-3xl font-bold text-white">{winRate}%</h2>
        </div>

      </div>
    </div>
  );
};

export default OverviewStats;