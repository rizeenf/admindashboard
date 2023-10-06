import "./Sidebar.scss";
import { sidebar } from "../../data/sidebar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebar.map((item) => (
        <div key={item.id}>
          <div className="title">{item.title}</div>

          {item.items.map((list) => (
            <div className="listItem" key={list.id}>
              <div className="icon">
                <img src={list.icon} alt="" />
              </div>
              <span>{list.title}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
