import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Common/Loader";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useAuth();
    const location = useLocation();
    
    if (loader) {
        return <Loader></Loader>
    }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoute;
