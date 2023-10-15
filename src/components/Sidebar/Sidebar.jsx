import "./Sidebar.scss";
import { sidebar } from "../../data/sidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebar?.map((item) => (
        <div key={item.id}>
          <div className="title">{item.title}</div>

          {item?.items?.map((list) => (
            <Link to={list.link} key={list.id}>
              <div className="listItem">
                <div className="icon">
                  <img src={list.icon} alt="" />
                </div>
                <span>{list.title}</span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
