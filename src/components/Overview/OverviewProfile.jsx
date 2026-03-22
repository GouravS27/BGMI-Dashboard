import React from "react";

const OverviewProfile = () => {
  return (
    <div className="m-2">
      <div className="bg-gradient-to-r from-[#000000] to-[#121d30] rounded-2xl p-6 flex items-center gap-6 shadow-lg border border-white/10">

        {/* Avatar */}
        <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center shadow-lg mask mask-squircle">
          <img
            src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
            alt="profile"
          />
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">Gaurav Singh</h2>
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              Level 78
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-2 text-sm font-bold">
            {/* <span className="text-orange-400 font-medium">🏅 Ace Master</span> */}
            <span className="text-orange-400">🏆 4,850 Kills</span>
            <span className="text-yellow-400">🏅 4,850 Damange</span>
            <span className="text-blue-400">🎯 1247 Matches</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewProfile;
