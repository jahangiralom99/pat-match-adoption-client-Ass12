import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const { user, loader } = useAuth();
//   const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loader) {
    return (
      <h1 className="text-5xl font-bold flex h-screen items-center justify-center">
        <span className="loading loading-spinner text-error w-40"></span>
      </h1>
    );
  }

  // if (user || isAdmin) {
  //     return children;
  // }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminRoute;
