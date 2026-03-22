import React, { useState } from "react";

const AdminEntry = () => {
  const players = [
    { id: "1", name: "Gaurav" },
    { id: "2", name: "Omdeep" },
    { id: "3", name: "Sahin" },
    { id: "4", name: "Sohel" },
  ];

  const maps = ["Erangel", "Miramar", "Livik"];

  const [form, setForm] = useState({
    playerId: "",
    playerName: "",
    map: "",
    team1: "",
    team2: "",
    team3: "",
    team4: "",
    kills: "",
    damage: "",
    damageTaken: "",
    mvp: "No",
    matchResult: "Won", // ✅ NEW
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlayerSelect = (e) => {
    const selected = players.find((p) => p.id === e.target.value);
    setForm({
      ...form,
      playerId: selected.id,
      playerName: selected.name,
    });
  };

  // Prevent duplicate teammates
  const getAvailablePlayers = (currentValue) => {
    const selectedIds = [form.team1, form.team2, form.team3, form.team4];

    return players.filter(
      (p) => !selectedIds.includes(p.id) || p.id === currentValue,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      teammates: [form.team1, form.team2, form.team3, form.team4]
        .filter(Boolean)
        .map((id) => players.find((p) => p.id === id)?.name),
    };

    console.log("Submitted:", payload);
    alert("Submitted ✅");
  };

  return (
    <div className="min-h-screen bg-gray-700 p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gradient-to-r from-[#000000] to-[#121d30]  p-8 rounded-2xl border border-white/10"
      >
        <h1 className="text-2xl font-bold text-white mb-6">
          Admin Match Entry
        </h1>

        {/* Player */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Player</label>
          <select
            onChange={handlePlayerSelect}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
          >
            <option value="">Select Player</option>
            {players.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Map */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Map Played</label>
          <select
            name="map"
            value={form.map}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
          >
            <option value="">Select Map</option>
            {maps.map((map) => (
              <option key={map} value={map}>
                {map}
              </option>
            ))}
          </select>
        </div>

        {/* Teammates Dropdowns */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Teammates</label>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {["team1", "team2", "team3", "team4"].map((team) => (
              <select
                key={team}
                name={team}
                value={form[team]}
                onChange={handleChange}
                className="p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
              >
                <option value="">{team.toUpperCase()}</option>

                {getAvailablePlayers(form[team]).map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>

        {/* Kills */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Total Kills</label>
          <input
            type="number"
            name="kills"
            value={form.kills}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
          />
        </div>

        {/* Damage */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Total Damage</label>
          <input
            type="number"
            name="damage"
            value={form.damage}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
          />
        </div>

        {/* Damage Taken */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Damage Taken</label>
          <input
            type="number"
            name="damageTaken"
            value={form.damageTaken}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
          />
        </div>

        {/* MVP */}
        <div className="mb-6">
          <label className="text-gray-400 text-sm">MVP</label>
          <select
            name="mvp"
            value={form.mvp}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="text-gray-400 text-sm">Match Result</label>
          <select
            name="matchResult"
            value={form.matchResult}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
          >
            <option value="Won">Won</option>
            <option value="Lose">Lose</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
        >
          Submit Match Data
        </button>
      </form>
    </div>
  );
};

export default AdminEntry;
