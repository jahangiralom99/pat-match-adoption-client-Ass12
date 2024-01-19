import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <RingLoader color="#f9140c" size={100} />
    </div>
  );
};

export default Loader;
