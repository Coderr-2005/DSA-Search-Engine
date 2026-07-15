import { PieChart, Pie, Cell, Tooltip } from "recharts";

function DifficultyChart({ easy, medium, hard }) {
  const data = [
    { name: "Easy", value: easy },
    { name: "Medium", value: medium },
    { name: "Hard", value: hard },
  ];

  const colors = ["#22c55e", "#eab308", "#ef4444"];

  return (
    <PieChart width={350} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100} label>
        {data.map((_, index) => (
          <Cell key={index} fill={colors[index]} />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
}

export default DifficultyChart;
