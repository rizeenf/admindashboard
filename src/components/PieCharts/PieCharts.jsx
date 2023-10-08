import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./PieCharts.scss";

const dataChart = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Tablet", value: 300, color: "#FFBB28" },
  { name: "Others", value: 100, color: "#FF8042" },
];

const PieCharts = () => {
  return (
    <div className="pieCharts">
      <h1>User Devices</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "12px",
              }}
              labelStyle={{ display: "none" }}
              // position={{ x: 90, y: 100 }}
            />
            <Pie
              data={dataChart}
              innerRadius={60}
              outerRadius={80}
              fill="#fff"
              paddingAngle={5}
              dataKey="value"
            >
              {dataChart.map((item, index) => (
                <Cell key={index} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="desc">
        {dataChart.map((item) => (
          <div key={item.name} className="items">
            <div className="label">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;
