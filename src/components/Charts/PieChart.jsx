import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const HalfDonut = () => {
  const data = [
    { name: "progress", value: 75 },
    { name: "remaining", value: 25 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="95%"
          startAngle={180}
          endAngle={0}
          innerRadius={100}
          outerRadius={170}
          paddingAngle={0}
          dataKey="value"
        >
          <Cell fill="var(--soft-indigo)" />
          <Cell fill="var(--light-gray)" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default HalfDonut;
