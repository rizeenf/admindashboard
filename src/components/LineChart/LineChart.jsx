import "./LineChart.scss";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const LineCharts = (props) => {
  return (
    <div className="totalUser">
      <div className="textInfo">
        <div className="title">
          <SpaceDashboardOutlinedIcon
            fontSize="small"
            style={{ color: props.mainColor }}
          />
          <h1>{props.name}</h1>
        </div>
        <h1 className="detail">{props.amount}</h1>
        <Link to="/" className="link" style={{ color: props.mainColor }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.dataChart}>
              <Tooltip
                contentStyle={{
                  background: "transparent",
                  border: "none",
                  fontSize: "12px",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 20, y: 50 }}
              />
              <Line
                type="monotone"
                dataKey="user"
                stroke={props.mainColor}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="desc">
          <span
            className="percentage"
            style={{ color: props.percent < 0 ? "tomato" : "yellowgreen" }}
          >
            {props.percent}%
          </span>
          <span>this year</span>
        </div>
      </div>
    </div>
  );
};

export default LineCharts;
