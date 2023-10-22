import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./SinglePage.scss";

const SinglePage = (props) => {
  return (
    <div className="singlePage">
      <div className="content">
        <div className="profile">
          <div className="pic">
            {props.columns.img ? (
              <img src={props.columns.img} alt={props.columns.fullName} />
            ) : (
              ""
            )}
            <h2>{props.columns.fullName} Detail</h2>
          </div>
          {Object.entries(props.columns)
            .filter(
              (id) =>
                id[0] !== "id" &&
                id[0] !== "activities" &&
                id[0] !== "img" &&
                id[0] !== "active"
            )
            .map((item, idx) => (
              <div key={idx} className="item">
                <span>{item[0]} : </span>
                <span>{item[1]}</span>
              </div>
            ))}
        </div>
        <div className="chartSingle">
          <h3>{props.slug} Chart</h3>
          <ResponsiveContainer width="90%" height="90%">
            <LineChart
              data={props.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis
                dataKey="day"
                padding={"no-gap"}
                angle={-20}
                height={40}
                fontSize={13}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="registerCount"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                dot={false}
              />
              <Line
                type="monotone"
                dot={false}
                dataKey="loginCount"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="history">
        <h2>{props.slug} History</h2>
        <div className="detail">
          <ul>
            {props.columns.activities.map((item) => (
              <li key={item.id}>
                <div>
                  <span>{item.activity}</span>
                  <span className="time">{`${item.time} ${item.timeDate}`}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
