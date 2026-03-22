import React from "react";

const Leaderboard = () => {
  const players = [
    {
      name: "ProGamerX", // 🥇 1st
      rank: "Conqueror",
      points: 6250,
      kd: 5.82,
      wins: 89,
    },
    {
      name: "EliteSniper", // 🥈 2nd
      rank: "Conqueror",
      points: 6120,
      kd: 5.45,
      wins: 84,
    },
    {
      name: "WarMachine", // 🥉 3rd
      rank: "Conqueror",
      points: 5980,
      kd: 5.21,
      wins: 78,
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-white">Leaderboard</h1>
      <p className="text-gray-400 mb-6">
        Top players in the current season
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-[#0b1220] rounded-2xl p-6 border border-white/10 hover:scale-105 transition"
          >
            {/* Position */}
            <div className="text-center text-gray-400 mb-2">
              #{index + 1}
            </div>

            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gray-700"></div>
            </div>

            {/* Name */}
            <h2 className="text-center text-xl font-semibold text-white">
              {player.name}
            </h2>
            <p className="text-center text-gray-400 text-sm mb-4">
              {player.rank}
            </p>

            {/* Stats */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Points</span>
                <span className="text-white font-medium">
                  {player.points.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>K/D</span>
                <span className="text-orange-400 font-medium">
                  {player.kd}
                </span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Wins</span>
                <span className="text-green-400 font-medium">
                  {player.wins}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;