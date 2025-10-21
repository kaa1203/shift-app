import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "mon", mood: 3 },
  { day: "tue", mood: 4 },
  { day: "wed", mood: 2 },
  { day: "thu", mood: 1 },
  { day: "fri", mood: 5 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis
          domain={[1, 5]}
          ticks={[1, 2, 3, 4, 5]}
          tickFormatter={(v) => ["😢", "😐", "🙂", "😊", "🤩"][v - 1]}
          label={{ value: "Mood Scale", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Line type="monotone" dataKey="mood" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
