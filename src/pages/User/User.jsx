import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./User.scss";
import Loading from "../../components/Loading/Loading";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const User = () => {
  return (
    <div className="user">
      <div className="content">
        <div className="profile">
          <div className="pic">
            <img
              src="https://images.pexels.com/photos/13884280/pexels-photo-13884280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h2>User Detail</h2>
          </div>

          <div className="item">
            <span>Fullname :</span>
            <span>Rizkf awfijo</span>
          </div>
          <div className="item">
            <span>Fullname :</span>
            <span>Rizkf awfijo</span>
          </div>
          <div className="item">
            <span>Fullname :</span>
            <span>Rizkf awfijo</span>
          </div>
          <div className="item">
            <span>Fullname :</span>
            <span>Rizkf awfijo</span>
          </div>
        </div>
        <div className="chart">
          <ResponsiveContainer width="80%" height="90%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                dot={false}
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dot={false} dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="history">
        <h2>User History</h2>
        <div className="detail">
          <ul>
            <li>
              <div>
                <span>Login in</span>
                <span className="time">10 minutes ago</span>
              </div>
            </li>
            <li>
              <div>
                <span>Login in</span>
                <span className="time">10 minutes ago</span>
              </div>
            </li>
            <li>
              <div>
                <span>Login in</span>
                <span className="time">10 minutes ago</span>
              </div>
            </li>
            <li>
              <div>
                <span>Login in</span>
                <span className="time">10 minutes ago</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
