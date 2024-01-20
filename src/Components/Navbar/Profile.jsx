import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Button from "../Common/Button";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logOut } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      Swal.fire({
        position: "top",
        icon: "success",
        title: "User logged out successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const phoneAndPcLOgIn = (
    <>
      {user ? (
        <div onClick={handleLogOut}>
          <Button value="Logout"></Button>
        </div>
      ) : (
        <Link to="/login">
          <Button value="login"></Button>
        </Link>
      )}
    </>
  );

  console.log(user);

  return (
    <div className="text-center">
      <div className="relative inline-block text-left">
        <div className="ml-3 relative">
          <div onClick={() => setIsOpen(!isOpen)}>
            <button
              type="button"
              className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <img
                className="h-10 w-10 rounded-full"
                src={user?.photoURL}
                alt="User profile"
              />
            </button>
          </div>
          <div
            className={`${
              !isOpen
                ? "hidden"
                : "origin-top-right absolute right-8 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 p-3"
            }`}
          >
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {user?.displayName}
            </a>
            <Link
              to="dashboard"
              className="block px-4 py-2 text-sm font-semibold bg-slate-50 text-gray-700 hover:text-[#ef6f18]"
              role="menuitem"
            >
              Dashboard
            </Link>
            <div>{phoneAndPcLOgIn}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
