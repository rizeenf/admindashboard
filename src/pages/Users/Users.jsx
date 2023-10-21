import { Suspense, useState } from "react";
import Add from "../../components/Add/Add";
import TablesData from "../../components/TablesData/TablesData";
import { userRows } from "../../data/userRows";
import "./Users.scss";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";

const Users = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const columns = [
    { field: "id", headerName: "No", width: 70 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
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
      field: "firstName",
      headerName: "First name",
      width: 130,
      editable: true,
    },
    { field: "lastName", headerName: "Last name", width: 130, editable: true },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    { field: "status", headerName: "Update", width: 100, type: "boolean" },
  ];

  return (
    <div className="users">
      <div className="title">
        <h2>Users Data</h2>
        <button>Add Users</button>
      </div>
      <div className="tables">
        <TablesData slug={"users"} columns={columns} rows={userRows} />
      </div>

      {openAdd ? (
        <Add slug="user" setOpenAdd={setOpenAdd} columns={columns} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Users;
