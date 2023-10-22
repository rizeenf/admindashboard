import React from "react";
import SinglePage from "../../components/SinglePage/SinglePage";
import { chartSingleUsers, dataSingleUser } from "../../data/userRows";

const User = () => {
  return (
    <>
      <SinglePage
        data={chartSingleUsers}
        columns={dataSingleUser}
        slug={"user"}
      />
    </>
  );
};

export default User;
