import React, { useEffect, useState } from "react";
import API from "../utils/axios"; 

const OverviewProfile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try { 
        const res = await API.get("/profile");
        setData(res.data);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    };

    fetchProfile();
  }, []);

  if (!data) {
    return (
      <div className="text-white text-center p-6">
        Loading profile...
      </div>
    );
  }

  const { playerName, stats } = data;

  return (
    <div className="m-2">
      <div className="bg-gradient-to-r from-[#000000] to-[#121d30] rounded-2xl p-6 flex items-center gap-6 shadow-lg border border-white/10">

        <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center shadow-lg mask mask-squircle">
          <img
            src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=600&auto=format&fit=crop&q=60"
            alt="profile"
          />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">
              {playerName}
            </h2>
          </div>

          <div className="flex items-center gap-6 mt-2 text-sm font-bold">
            <span className="text-orange-400">
              🏆 {stats?.totalKills || 0} Kills
            </span>

            <span className="text-yellow-400">
              🏅 {stats?.totalDamage || 0} Damage
            </span>

            <span className="text-blue-400">
              🎯 {stats?.totalMatches || 0} Matches
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OverviewProfile;