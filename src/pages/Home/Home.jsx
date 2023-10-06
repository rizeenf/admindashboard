import TopDonate from "../../components/TopDonate/TopDonate";
import TotalUser from "../../components/TotalUser/TotalUser";
import "./Home.scss";

const Home = () => {
  return (
    <div className="contentContainer">
      <div className="home">
        <div className="box1 box">
          <TopDonate />
        </div>
        <div className="box2 box">
          <TotalUser />
        </div>
        <div className="box3 box">box3</div>
        <div className="box4 box">box4</div>
        <div className="box5 box">box5</div>
        <div className="box6 box">box6</div>
        <div className="box7 box">box7</div>
        <div className="box8 box">box8</div>
        <div className="box9 box">box9</div>
      </div>
    </div>
  );
};

export default Home;
