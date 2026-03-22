import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { week: "Week 1", value: 45 },
  { week: "Week 2", value: 52 },
  { week: "Week 3", value: 48 },
  { week: "Week 4", value: 60 },
  { week: "Week 5", value: 58 },
  { week: "Week 6", value: 65 },
  { week: "Week 7", value: 72 },
  { week: "Week 8", value: 69 },
];

const WinGraph = () => {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#121d30] p-6 rounded-2xl border border-white/10">
      <h2 className="text-white text-lg mb-4">Weekly Performance</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="week" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#f97316"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WinGraph;