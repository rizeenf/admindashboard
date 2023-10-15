import { Link } from "react-router-dom";
import "./TablesData.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const TablesData = (props) => {
  const Action = {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`../${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  const handleDelete = (row) => {
    console.log(row.id + " deleted");
  };

  return (
    <div className="tablesData">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, Action]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 50, 100]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 700 },
          },
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        checkboxSelection
      />
    </div>
  );
};

export default TablesData;
