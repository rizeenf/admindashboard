import TopDonate from "../../components/TopDonate/TopDonate";
import "./Home.scss";
import { lineChartUsers } from "../../data/lineChartUsers";
import LineCharts from "../../components/LineChart/LineChart";
import { lineChartDonate } from "../../data/lineChartDonate";
import { lineChartIncome } from "../../data/lineChartIncome";
import { lineChartRatio } from "../../data/lineChartRatio";
import BarCharts from "../../components/BarChart/BarCharts";
import { barChartVisit } from "../../data/barChartVisit";
import { barChartProfit } from "../../data/barChartProfit";
import PieCharts from "../../components/PieCharts/PieCharts";
import AreaCharts from "../../components/AreaCharts/AreaCharts";

const Home = () => {
  return (
    <div className="contentContainer">
      <div className="home">
        <div className="box1 box">
          <TopDonate />
        </div>
        <div className="box2 box">
          <LineCharts {...lineChartUsers} />
        </div>
        <div className="box3 box">
          <LineCharts {...lineChartIncome} />
        </div>
        <div className="box4 box">
          <PieCharts />
        </div>
        <div className="box5 box">
          <LineCharts {...lineChartRatio} />
        </div>
        <div className="box6 box">
          <LineCharts {...lineChartDonate} />
        </div>
        <div className="box7 box">
          <AreaCharts />
        </div>
        <div className="box8 box">
          <BarCharts {...barChartVisit} />
        </div>
        <div className="box9 box">
          <BarCharts {...barChartProfit} />
        </div>
      </div>
    </div>
  );
};

export default Home;
