import SinglePage from "../../components/SinglePage/SinglePage";
import { dataSingleProduct } from "../../data/productRows";
import { chartSingleUsers } from "../../data/userRows";
import "./Order.scss";

const Order = () => {
  return (
    <div className="order">
      <SinglePage
        slug={"product"}
        columns={dataSingleProduct}
        data={chartSingleUsers}
      />
    </div>
  );
};

export default Order;
