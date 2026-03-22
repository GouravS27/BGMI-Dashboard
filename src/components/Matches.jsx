import React, { useState } from "react";

const Matches = () => {
  const [active, setActive] = useState("All Matches");

  const matchesData = [
    {
      rank: 1,
      mode: "Squad TPP",
      map: "Erangel",
      kills: 12,
      damage: 1247,
      survival: "28:45",
      result: "Winner",
      time: "2 hours ago",
    },
    {
      rank: 3,
      mode: "Duo FPP",
      map: "Miramar",
      kills: 8,
      damage: 924,
      survival: "24:12",
      result: "Top 10",
      time: "5 hours ago",
    },
    {
      rank: 2,
      mode: "Squad TPP",
      map: "Sanhok",
      kills: 10,
      damage: 1100,
      survival: "26:10",
      result: "Top 10",
      time: "1 day ago",
    },
  ];

  const tabs = ["All Matches", "Wins", "Top 10"];

  const filteredMatches = matchesData.filter((m) => {
    if (active === "Wins") return m.result === "Winner";
    if (active === "Top 10") return m.result === "Top 10";
    return true;
  });

  return (
    <div className="p-6 ">

      {/* Header */}
      <h1 className="text-2xl font-bold text-white">Match History</h1>
      <p className="text-gray-400 mb-4">
        View all your recent matches and performance
      </p>

      {/* Filters */}
      <div className="flex gap-2 bg-[#1f2937] p-1 rounded-full w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-1 rounded-full text-sm transition  cursor-pointer font-bold
              ${active === tab
                ? "bg-orange-500 text-black font-medium"
                : "text-gray-300 hover:text-white"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Match List */}
      <div className="mt-6 space-y-4 ">
        {filteredMatches.map((match, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:bg-[#0f1b3d] hover:scale-[1.01] transition bg-gradient-to-r from-[#000000] to-[#121d30]"
          >
            {/* Left */}
            <div className="flex items-center gap-5">

              {/* Rank */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-xl text-xl font-bold
                ${match.rank === 1
                  ? "bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-[0_0_20px_rgba(255,115,0,0.4)]"
                  : "bg-gray-600 text-white"}`}
              >
                #{match.rank}
              </div>

              {/* Info */}
              <div>
                <h2 className="text-white font-semibold text-lg">
                  {match.mode} •{" "}
                  <span className="text-gray-400">{match.map}</span>
                </h2>

                <div className="flex gap-8 mt-2 text-sm text-gray-400">
                  <div>🎯 {match.kills} Kills</div>
                  <div>💥 {match.damage} Damage</div>
                  <div>🏆 {match.result}</div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <span
                className={`px-4 py-1 rounded-full text-sm font-medium
                ${match.result === "Winner"
                  ? "bg-orange-500 text-white"
                  : "bg-green-500 text-white"}`}
              >
                {match.result}
              </span>

              <span className="text-gray-400 text-sm">
                {match.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;