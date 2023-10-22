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
              data={props.data.dataUser}
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
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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

export default SinglePage;
