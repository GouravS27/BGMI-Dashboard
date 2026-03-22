import { FireIcon } from "@heroicons/react/24/solid";
import { TrophyIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { ChartPieIcon } from "@heroicons/react/24/solid";

const OverviewStats = () => {
  return (
    <div className="m-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card */}
        <div className="bg-gradient-to-r from-[#000000] to-[#121d30] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-yellow-500/20 mb-4 text-center">
            <TrophyIcon className=" text-yellow-500" />
          </div>
          <p className="text-gray-400 text-sm">Total Wins</p>
          <h2 className="text-3xl font-bold text-white">312</h2>
          <p className="text-green-400 text-sm mt-1 italic">+12 this week</p>
        </div>

        <div className="bg-gradient-to-r from-[#000000] to-[#121d30] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-pink-500/20 mb-4">
            <FireIcon className=" text-red-500" />
          </div>
          <p className="text-gray-400 text-sm">Total Kills</p>
          <h2 className="text-3xl font-bold text-white">3,842</h2>
          <p className="text-green-400 text-sm mt-1 italic">+68 this week</p>
        </div>

        <div className="bg-gradient-to-r from-[#000000] to-[#121d30] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 mb-4">
            <ChartBarIcon className=" text-indigo-500" />
          </div>
          <p className="text-gray-400 text-sm">K/D Ratio</p>
          <h2 className="text-3xl font-bold text-white">4.11</h2>
          <p className="text-green-400 text-sm mt-1 italic">+0.24 this week</p>
        </div>

        <div className="bg-gradient-to-r from-[#000000] to-[#121d30] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 mb-4">
            <ChartPieIcon className=" text-green-500" />
          </div>
          <p className="text-gray-400 text-sm">Win Rate</p>
          <h2 className="text-3xl font-bold text-white">25%</h2>
          <p className="text-green-400 text-sm mt-1 italic">+2.5% this week</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewStats;
