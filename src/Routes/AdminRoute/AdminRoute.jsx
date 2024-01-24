import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PropTypes from "prop-types";
import useAdmin from "../../Hooks/useAdmin";
import Loader from "../../Components/Common/Loader";

const AdminRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const [isAdmin,isLoading, ] = useAdmin();
  const location = useLocation();

  if (loader || isLoading) {
    return (
      <Loader></Loader>
    );
  }

  // if (user || isAdmin) {
  //     return children;
  // }

  if (!user || !isAdmin) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminRoute;
