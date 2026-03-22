import React, { useEffect, useState } from "react";
import API from "../utils/axios";

const Matches = () => {
  const [active, setActive] = useState("All Matches");
  const [matchesData, setMatchesData] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await API.get("/matches");
        setMatchesData(res.data);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    };

    fetchMatches();
  }, []);

  // ✅ Updated tabs
  const tabs = ["All Matches", "Wins"];

  // ✅ Updated filter
  const filteredMatches = matchesData.filter((m) => {
    if (active === "Wins") return m.matchResult === "Won";
    return true;
  });

  return (
    <div className="p-6">
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
            className={`px-4 py-1 rounded-full text-sm font-bold
              ${
                active === tab
                  ? "bg-orange-500 text-black"
                  : "text-gray-300 hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Match List */}
      <div className="mt-6 space-y-4">
        {filteredMatches.map((match, index) => (
          <div
            key={match._id}
            className="border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:bg-[#0f1b3d] transition bg-gradient-to-r from-[#000000] to-[#121d30]"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl text-xl font-bold bg-gray-600 text-white">
                #{index + 1}
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg">
                  Squad • <span className="text-gray-400">{match.map}</span>
                </h2>

                <div className="flex flex-col gap-2 mt-2 text-sm text-gray-400">
                  <div className="flex gap-8">
                    <div>🎯 {match.kills} Kills</div>
                    <div>💥 {match.damage} Damage</div>
                    <div>🏆 {match.matchResult}</div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {[match.team1, match.team2, match.team3, match.team4]
                      .filter(Boolean)
                      .map((player, i) => (
                        <span
                          key={i}
                          className="bg-gray-700 px-2 py-1 rounded text-xs text-white"
                        >
                          {player}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`px-4 py-1 rounded-full text-sm font-medium
                ${
                  match.matchResult === "Won"
                    ? "bg-orange-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {match.matchResult}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;