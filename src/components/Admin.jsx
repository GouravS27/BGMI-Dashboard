import React, { useState } from "react";
import { useSelector } from "react-redux";
import API from "../utils/axios";

const Admin = () => {
  const allUsers = useSelector((store) => store.auth.allUsers) || [];

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
    matchResult: "Won",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlayerSelect = (e) => {
    const selected = allUsers.find((u) => u.userId === e.target.value);

    setForm({
      ...form,
      playerId: selected?.userId || "",
      playerName: selected?.name || selected?.userId || "",
    });
  };

  bg-linear-to-r Prevent duplicate teammates
  const getAvailablePlayers = (currentValue) => {
    const selectedIds = [
      form.team1,
      form.team2,
      form.team3,
      form.team4,
    ];

    return allUsers.filter(
      (u) => !selectedIds.includes(u.userId) || u.userId === currentValue
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.playerId || !form.map) {
      alert("Please fill required fields");
      return;
    }

    try {
      const res = await API.post("/addstats", {
        playerId: form.playerId,
        playerName: form.playerName,
        map: form.map,
        team1: form.team1,
        team2: form.team2,
        team3: form.team3,
        team4: form.team4,
        kills: Number(form.kills),
        damage: Number(form.damage),
        damageTaken: Number(form.damageTaken),
        mvp: form.mvp,
        matchResult: form.matchResult,
      });

      console.log(res.data);
      alert("✅ Stats Added Successfully");

      bg-linear-to-r Reset form
      setForm({
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
        matchResult: "Won",
      });
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to add stats");
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gradient-to-r from-[#000000] to-[#121d30] p-8 rounded-2xl border border-white/10"
      >
        <h1 className="text-2xl font-bold text-white mb-6">
          Admin Match Entry
        </h1>

        {/* Player */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Player</label>
          <select
            value={form.playerId}
            onChange={handlePlayerSelect}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
          >
            <option value="">Select Player</option>

            {allUsers.map((u) => (
              <option key={u.userId} value={u.userId}>
                {u.name ? `${u.name} (${u.userId})` : u.userId}
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

        {/* Teammates */}
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

                {getAvailablePlayers(form[team]).map((u) => (
                  <option key={u.userId} value={u.userId}>
                    {u.name
                      ? `${u.name} (${u.userId})`
                      : u.userId}
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
        <div className="mb-4">
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

        {/* Match Result */}
        <div className="mb-6">
          <label className="text-gray-400 text-sm">Match Result</label>
          <select
            name="matchResult"
            value={form.matchResult}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-[#0b1220] border border-white/10 text-white"
          >
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
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

export default Admin;