import TablesData from "../../components/TablesData/TablesData";
import { orderRows } from "../../data/orderRows";
import "./Orders.scss";

const Orders = () => {
  const columns = [
    {
      field: "id",
      headerName: "No",
      width: 70,
    },
    {
      field: "orderId",
      headerName: "Order ID",
      width: 180,
    },
    {
      field: "itemName",
      headerName: "Item Name",
      width: 230,
    },
    {
      field: "qty",
      headerName: "Qty",
      type: "number",
      width: 90,
    },
    {
      field: "price",
      headerName: "Price",
      width: 90,
    },
    {
      field: "buyer",
      headerName: "Full Name",
      width: 160,
    },
    {
      field: "address",
      headerName: "Address",
      width: 250,
    },
  ];

  return (
    <div className="orders">
      <div className="title">
        <h2>Orders Data</h2>
        <button>Add Orders</button>
      </div>
      <div className="tables">
        <TablesData slug={"order"} columns={columns} rows={orderRows} />
      </div>
    </div>
  );
};

export default Orders;
