import "./Topbar.scss";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <SpaceDashboardOutlinedIcon />
        <span>Zashboard</span>
      </div>
      <div className="info">
        <SearchOutlinedIcon fontSize="small" />
        <GridViewOutlinedIcon fontSize="small" />
        <CropFreeOutlinedIcon fontSize="small" />
        <div className="notification">
          <NotificationsOutlinedIcon fontSize="small" />
          <span>3</span>
        </div>
        <div className="userInfo">
          <img
            src="https://images.pexels.com/photos/14395818/pexels-photo-14395818.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Rizee</span>
        </div>
        <SettingsOutlinedIcon fontSize="small" />
      </div>
    </div>
  );
};

export default Topbar;
