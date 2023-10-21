import "./Add.scss";

const Add = (props) => {
  return (
    <div className="add">
      <div className="container">
        <h2>Add new {props.slug}</h2>
        <span className="close" onClick={() => props.setOpenAdd(false)}>
          x
        </span>

        <form action="#" className="form">
          {props.columns
            .filter(
              (col) =>
                col.field !== "id" &&
                col.field !== "img" &&
                col.field !== "orderId"
            )
            .map((col) => (
              <div key={col.field} className="item">
                <label htmlFor="">{col.headerName}</label>
                <input
                  type={col.type}
                  name={col.field}
                  id={col.field}
                  placeholder={col.headerName}
                />
              </div>
            ))}
          <input type="submit" className="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Add;
