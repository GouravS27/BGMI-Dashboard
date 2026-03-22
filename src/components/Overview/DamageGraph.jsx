import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const winData = [
  { week: "Week 1", value: 5 },
  { week: "Week 2", value: 7 },
  { week: "Week 3", value: 4 },
  { week: "Week 4", value: 8 },
  { week: "Week 5", value: 6 },
  { week: "Week 6", value: 9 },
  { week: "Week 7", value: 11 },
  { week: "Week 8", value: 8 },
];

const DamageGraph = () => {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#121d30] p-6 rounded-2xl border border-white/10">
      <h2 className="text-white text-lg mb-4">Weekly Wins</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={winData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="week" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#eab308"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DamageGraph;