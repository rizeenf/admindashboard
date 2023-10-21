import "./Loading.scss";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#ffffff"}
        height={40}
        width={40}
      />
    </div>
  );
};

export default Loading;
