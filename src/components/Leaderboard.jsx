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
      title: "🔥 Kills/Match(K/D)",
      player: data.avgKillsTop,
      key: "avgKills",
      color: "text-green-300",
    },
    {
      title: "💥 Damage/Match(D/D)",
      player: data.avgDamageTop,
      key: "avgDamage",
      color: "text-yellow-300",
    },
    {
      title: "🏆 Top Winner",
      player: data.topWins,
      key: "totalWins",
      color: "text-green-400",
    },
    {
      title: "🛡️ Least Damage/Match",
      player: data.avgDamageTakenTop,
      key: "avgDamageTaken",
      color: "text-blue-300",
    },
    {
      title: "🔥 Top Killer",
      player: data.topKills,
      key: "totalKills",
      color: "text-orange-400",
    },
    {
      title: "💥 Top Damage(Single Match)",
      player: data.topDamage,
      key: "totalDamage",
      color: "text-yellow-400",
    },
    {
      title: "🛡️Total Least Damage Taken",
      player: data.leastDamageTaken,
      key: "totalDamageTaken",
      color: "text-blue-400",
    },
    {
      title: "🎮 Most Matches Played",
      player: data.mostMatches,
      key: "totalMatches",
      color: "text-purple-400",
    },
    {
      title: "🎯 Best Kill (Single Match)",
      player: data.bestKillPlayer,
      key: "bestKill",
      color: "text-red-400",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">Leaderboard</h1>
      <p className="text-gray-400 mb-6">Top performers in your squad</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#0b1220] rounded-2xl p-6 border border-white/10 hover:scale-105 transition"
          >
            <h2 className="text-center text-lg text-gray-300 mb-4">
              {card.title}
            </h2>

            <div className="space-y-3">
              {card.player?.map((p, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-3 py-2 rounded-lg ${
                    i === 0
                      ? "bg-yellow-500/10 border border-yellow-400"
                      : "bg-white/5"
                  }`}
                >
                  <span className="text-gray-400 font-bold">
                    {i === 0
                      ? "🥇"
                      : i === 1
                        ? "🥈"
                        : i === 2
                          ? "🥉"
                          : `#${i + 1}`}
                  </span>

                  <span className="text-white font-medium capitalize">{p.playerName}</span>

                  <span className={`${card.color} font-bold`}>
                    {typeof p[card.key] === "number"
                      ? p[card.key].toFixed(1)
                      : p[card.key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
