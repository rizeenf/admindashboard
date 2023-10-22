import SinglePage from "../../components/SinglePage/SinglePage";
import { dataSingleProduct } from "../../data/productRows";
import { chartSingleUsers } from "../../data/userRows";
import "./Product.scss";

const Product = () => {
  return (
    <div className="product">
      <SinglePage
        slug={"product"}
        columns={dataSingleProduct}
        data={chartSingleUsers}
      />
    </div>
  );
};

export default Product;
