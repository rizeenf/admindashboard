import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./BarCharts.scss";

const BarCharts = (props) => {
  return (
    <div className="barCharts">
      <h1>{props.name}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.dataChart}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f0f0f",
                border: "none",
                borderRadius: "10px",
                fontSize: "12px",
              }}
              labelStyle={{ display: "none" }}
            />
            z
            <Bar dataKey="user" fill={props.mainColor} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
