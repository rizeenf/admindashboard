import "./Footer.scss";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <SpaceDashboardOutlinedIcon />
        <span>Zashboard</span>
      </div>
      <div className="info">
        <span>Copyright 2023 rizeenf. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
