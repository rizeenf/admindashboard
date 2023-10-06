import "./TotalUser.scss";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import { Link } from "react-router-dom";
import TinyChart from "../Charts/TinyChart/TinyChart";

const TotalUser = () => {
  return (
    <div className="totalUser">
      <div className="title">
        <SpaceDashboardOutlinedIcon fontSize="small" />
        <h4>Total Users</h4>
      </div>
      <div className="content">
        <div className="left">
          <span>35.792</span>
          <Link to="/" className="link">
            View Allaaaaaaaaaaaaaaaa
          </Link>
        </div>
        <div className="right">
          <div className="chart">
            <TinyChart />
          </div>
          <span className="percent">56%</span>
          <span>This year</span>
        </div>
      </div>
    </div>
  );
};

export default TotalUser;
