import React, { useEffect, useState } from "react";
import API from "../utils/axios";

const Leaderboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await API.get("/leaderboard");
        setData(res.data);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    };

    fetchLeaderboard();
  }, []);

  if (!data) {
    return <p className="text-white p-6">Loading leaderboard...</p>;
  }

  const cards = [
    {
      title: "🏆 Top Winner",
      player: data.topWins,
      value: data.topWins?.totalWins,
      color: "text-green-400",
    },
    {
      title: "🔥 Top Killer",
      player: data.topKills,
      value: data.topKills?.totalKills,
      color: "text-orange-400",
    },
    {
      title: "💥 Top Damage",
      player: data.topDamage,
      value: data.topDamage?.totalDamage,
      color: "text-yellow-400",
    },
    {
      title: "🛡️ Least Damage Taken",
      player: data.leastDamageTaken,
      value: data.leastDamageTaken?.totalDamageTaken,
      color: "text-blue-400",
    },
    {
      title: "🎮 Most Matches Played",
      player: data.mostMatches,
      value: data.mostMatches?.totalMatches,
      color: "text-purple-400",
    },
    {
      title: "🎯 Best Kill",
      player: data.bestKillPlayer,
      value: data.bestKillPlayer?.bestKill,
      color: "text-red-400",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">Leaderboard</h1>
      <p className="text-gray-400 mb-6">Top performers in your squad</p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#0b1220] rounded-2xl p-6 border border-white/10 hover:scale-105 transition"
          >
            {/* Title */}
            <h2 className="text-center text-lg text-gray-300 mb-2">
              {card.title}
            </h2>

            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="avatar">
                <div className="mask mask-squircle h-12">
                  <img src="https://plus.unsplash.com/premium_photo-1713628397953-2779bb39dca4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGh5fGVufDB8fDB8fHww" />
                </div>
              </div>
            </div>

            {/* Name */}
            <h2 className="text-center text-xl font-semibold text-white">
              {card.player?.playerName || "N/A"}
            </h2>

            {/* Value */}
            <p className={`text-center text-2xl font-bold ${card.color} mt-2`}>
              {card.value || 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
