import React, { useEffect, useState } from "react";
import API from "../utils/axios";

const Comparison = ({ users = [] }) => {
  const [opponentId, setOpponentId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchComparison = async (id) => {
    try {
      setLoading(true);
      setError("");
      const res = await API.get(`/compare/${id}`);
      setData(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (opponentId) {
      fetchComparison(opponentId);
    }
  }, [opponentId]);

  // 🔥 helper to avoid crash
  const safe = (value) => (value ? value.toFixed(2) : "0.00");

  // 🔥 highlight winner
  const highlight = (you, opp) =>
    you > opp ? "text-green-400 font-bold" : "text-gray-300";

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">⚔️ Player Comparison</h2>

      {/* 🔽 Dropdown */}
      <select
        className="p-2 rounded text-black mb-4"
        value={opponentId}
        onChange={(e) => setOpponentId(e.target.value)}
      >
        <option value="">Select Opponent</option>
        {users.map((u) => (
          <option key={u.userId} value={u.userId}>
            {u.userId}
          </option>
        ))}
      </select>

      {/* ⏳ Loading */}
      {loading && <p className="text-yellow-400">Loading comparison...</p>}

      {/* ❌ Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* 📊 Comparison */}
      {data && !loading && (
        <div className="grid grid-cols-3 gap-4 text-center bg-gray-800 p-4 rounded">

          {/* Header */}
          <div></div>
          <div className="font-bold text-green-400">YOU</div>
          <div className="font-bold text-red-400">OPPONENT</div>

          {/* Win Rate */}
          <div>Win Rate (%)</div>
          <div className={highlight(data.comparison.winRate.you, data.comparison.winRate.opponent)}>
            {safe(data.comparison.winRate.you)}
          </div>
          <div>{safe(data.comparison.winRate.opponent)}</div>

          {/* Kill Contribution */}
          <div>Avg Kills</div>
          <div className={highlight(data.comparison.killContribution.you, data.comparison.killContribution.opponent)}>
            {safe(data.comparison.killContribution.you)}
          </div>
          <div>{safe(data.comparison.killContribution.opponent)}</div>

          {/* Damage Efficiency */}
          <div>Damage Efficiency (%)</div>
          <div className={highlight(data.comparison.damageEfficiency.you, data.comparison.damageEfficiency.opponent)}>
            {safe(data.comparison.damageEfficiency.you)}
          </div>
          <div>{safe(data.comparison.damageEfficiency.opponent)}</div>

          {/* Survival Efficiency */}
          <div>Survival (%)</div>
          <div className={highlight(data.comparison.survivalEfficiency.you, data.comparison.survivalEfficiency.opponent)}>
            {safe(data.comparison.survivalEfficiency.you)}
          </div>
          <div>{safe(data.comparison.survivalEfficiency.opponent)}</div>

        </div>
      )}
    </div>
  );
};

export default Comparison;