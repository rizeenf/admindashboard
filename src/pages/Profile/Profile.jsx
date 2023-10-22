import SinglePage from "../../components/SinglePage/SinglePage";
import { chartSingleUsers, dataSingleUser } from "../../data/userRows";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <SinglePage
        data={chartSingleUsers}
        columns={dataSingleUser}
        slug={"profile"}
      />
    </div>
  );
};

export default Profile;
