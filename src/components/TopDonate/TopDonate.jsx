import "./TopDonate.scss";
import { topDonators } from "../../data/sidebar";
import { Link } from "react-router-dom";

const TopDonate = () => {
  return (
    <div className="topDonate">
      <h1>Top Donator</h1>
      <div className="listDonator">
        {topDonators.map((item) => (
          <div className="list" key={item.id}>
            <div className="user">
              <img src={item.img} alt="" />
              <div className="userInfo">
                <span className="username">{item.username}</span>
                <span className="email">{item.email}</span>
              </div>
            </div>
            <span>${item.amount}</span>
          </div>
        ))}
      </div>
      <Link className="button" to={"users"}>
        See others
      </Link>
    </div>
  );
};

export default TopDonate;
