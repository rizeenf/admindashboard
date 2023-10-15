import "./Products.scss";
import TablesData from "../../components/TablesData/TablesData";
import { productRows } from "../../data/productRows";

const Products = () => {
  const columns = [
    { field: "id", headerName: "No", width: 70 },
    {
      field: "img",
      headerName: "Picture",
      width: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="img">
            {params.row.img == null ? (
              <SpaceDashboardOutlinedIcon />
            ) : (
              <img src={params.row.img} alt="" />
            )}
          </div>
        );
      },
    },
    {
      field: "itemCode",
      headerName: "Item Code",
      width: 130,
      editable: true,
    },
    { field: "itemName", headerName: "Item Name", width: 230, editable: true },
    { field: "category", headerName: "Category", width: 90, editable: true },
    {
      field: "stocks",
      headerName: "Stocks",
      type: "number",
      width: 90,
      editable: true,
    },
    {
      field: "desc",
      headerName: "Description",
      sortable: false,
      width: 360,
    },
  ];

  return (
    <div className="products">
      <div className="title">
        <h2>Products Data</h2>
        <button>Add product</button>
      </div>
      <div className="tables">
        <TablesData slug={"product"} columns={columns} rows={productRows} />
      </div>
    </div>
  );
};

export default Products;
