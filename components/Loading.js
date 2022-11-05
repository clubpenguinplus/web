import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div className="d-flex h-100 flex-column align-items-center justify-content-center">
      <Spinner animation="grow" />
      <div className="py-3">Loading...</div>
    </div>
  );
};

export default Loading;
