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

  const tabs = ["All Matches", "Wins"];

  const filteredMatches = matchesData.filter((m) => {
    if (active === "Wins") return m.matchResult === "Won";
    return true;
  });

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold text-white">
        Match History
      </h1>
      <p className="text-gray-400 mb-4 text-sm sm:text-base">
        View all your recent matches and performance
      </p>

      <div className="flex gap-2 bg-[#1f2937] p-1 rounded-full w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold transition
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

      <div className="mt-6 space-y-4">
        {filteredMatches.map((match, index) => (
          <div
            key={match._id}
            className={`
              border border-white/10 rounded-2xl
              p-4 sm:p-5
              flex flex-col sm:flex-row
              sm:items-center sm:justify-between
              gap-3
              bg-gradient-to-r from-[#000000] to-[#121d30]
              hover:bg-[#0f1b3d] transition
              hover:scale-[1.01]
              ${
                match.matchResult === "Won"
                  ? "shadow-orange-500/10 shadow-md"
                  : ""
              }
            `}
          >
            <div className="flex items-start sm:items-center gap-3 sm:gap-5">
              
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg sm:rounded-xl text-sm sm:text-xl font-bold bg-gray-600 text-white">
                #{index + 1}
              </div>

              <div>
                <h2 className="text-white font-semibold text-sm sm:text-lg">
                  Squad •{" "}
                  <span className="text-gray-400">{match.map}</span>
                </h2>

                <div className="flex flex-wrap gap-3 sm:gap-6 mt-2 text-xs sm:text-sm text-gray-400 font-bold">
                  <div>🎯 {match.kills} Kills</div>
                  <div>💥 {match.damage} Damage</div>
                  <div className="sm:hidden">🏆 {match.matchResult}</div>
                </div>

                <div className="flex gap-2 flex-wrap mt-2">
                  {[match.team1, match.team2, match.team3, match.team4]
                    .filter(Boolean)
                    .map((player, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-2 py-1 rounded text-[10px] sm:text-xs text-white font-bold"
                      >
                        {player}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center">
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