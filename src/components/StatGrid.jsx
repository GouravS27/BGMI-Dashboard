import { BoltIcon } from "@heroicons/react/24/solid";

const StatGrid = () => {
  const stats = [
    { title: "Total Matches", value: "1247" },
    { title: "Wins", value: "312" },
    { title: "Total Kills", value: "3842" },

    { title: "K/D Ratio", value: "4.11" },
    { title: "Win Rate", value: "25%" },
    { title: "Avg Damage", value: "642" },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-[#000000] to-[#121d30] rounded-xl m-2">

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#151b29] border border-white/10 rounded-2xl p-5 hover:bg-[#0f1b3d] transition"
          >
            {/* Title */}
            <p className="text-gray-400 text-sm mb-2 flex flex-row gap-1 font-bold">
              <BoltIcon className="w-6 h-6 text-yellow-500" />
              {stat.title}
            </p>

            {/* Value */}
            <h2 className="text-2xl font-bold text-white">
              {stat.value}
            </h2>
          </div>
        ))}

      </div>
    </div>
  );
};

export default StatGrid;