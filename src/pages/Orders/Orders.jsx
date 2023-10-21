import { useState } from "react";
import TablesData from "../../components/TablesData/TablesData";
import { orderColumns, orderRows } from "../../data/orderRows";
import "./Orders.scss";
import Add from "../../components/Add/Add";

const Orders = () => {
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <div className="orders">
      <div className="title">
        <h2>Orders Data</h2>
        <button onClick={() => setOpenAdd(true)}>Add Orders</button>
      </div>
      <div className="tables">
        <TablesData slug={"order"} columns={orderColumns} rows={orderRows} />
      </div>

      {openAdd ? (
        <Add slug="order" columns={orderColumns} setOpenAdd={setOpenAdd} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Orders;
