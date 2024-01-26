import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import { IoIosAddCircleOutline } from "react-icons/io";
import { SiEclipseadoptium } from "react-icons/si";
import { FcDonate } from "react-icons/fc";
import { FaUserAstronaut } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const DashBoardLayout = () => {
  const { user , darkMode} = useAuth();

  const [isAdmin] = useAdmin();

  // const isAdmin = true;
  return (
    <section className={`max-w-screen-xl mx-auto ${darkMode? 'dark:bg-[#1e293b] text-white':''}`}>
      <div className={`max-w-screen-xl mx-auto`}>
      <Navbar></Navbar>
      <div className="md:flex mt-1 gap-4 p-5 md:p-0 ">
        <div className="md:w-64 mx-auto  rounded-lg shadow-lg ">
          <div className="text-center mt-3 ">
            <img
              className="size-16 inline rounded-full border border-red-400 mt-2"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <h1 className="text-xl font-semibold text-center mt-2">
            {user?.displayName}
          </h1>
          <p className="text-center font-bold text-[#ef6f18]">Dashboard</p>
          <hr className="mt-4 border-red-500 w-44 mx-auto" />
          <ul className="mt-5 ">
           
            {isAdmin && user ? <li className="flex flex-col gap-3">
            <p className="text-center text-[13px] font-bold">Admin Dashboard</p>
              <NavLink
                to="/dashboard/user"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold text-white"
                    : ""
                }
              >
                <button className="w-44 gap-2  mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <FaUserAstronaut /> User
                </button>
            </NavLink>
              <NavLink
                to="/dashboard/all-pets"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 gap-2  mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <FaUserAstronaut /> All Pets
                </button>
            </NavLink>
              <NavLink
                to="/dashboard/all-donations"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 gap-2  mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <FaUserAstronaut /> All Donations
                </button>
              </NavLink>
              {/* and User Route */}
              <NavLink
                to="/dashboard/addAPet"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44  mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <IoIosAddCircleOutline></IoIosAddCircleOutline> Add A Pet
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/myAddPets"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <IoIosAddCircleOutline></IoIosAddCircleOutline> My added pets
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/adoption-request"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <SiEclipseadoptium /> Adoption Request
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/create-donation-campaign"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <FcDonate />create Donation Campaign
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/my-donation-campaigns"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md font-medium hover:text-[#ffff]">
                  {" "}
                  <FcDonate /> My Donation Campaigns
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/my-donations"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 gap-3 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <FcDonate /> My Donations
                </button>
              </NavLink>

            </li>
              
              : <li className="flex flex-col gap-3">
                 <p className="text-center text-[13px] font-bold">User Dashboard</p>
              <NavLink
                to="/dashboard/addAPet"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44  mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <IoIosAddCircleOutline></IoIosAddCircleOutline> Add A Pet
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/myAddPets"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <IoIosAddCircleOutline></IoIosAddCircleOutline> My added pets
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/adoption-request"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <SiEclipseadoptium /> Adoption Request
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/create-donation-campaign"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <FcDonate /> Donation Campaign
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/my-donation-campaigns"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md font-medium hover:text-[#ffff]">
                  {" "}
                  <FcDonate /> My Donation Campaigns
                </button>
              </NavLink>
              <NavLink
                to="/dashboard/my-donations"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active border-l-4 border-[#ef6f18] font-bold"
                    : ""
                }
              >
                <button className="w-44 gap-3 mx-auto py-2 flex items-center justify-center bg-[#ef6f18] rounded-md  font-medium hover:text-[#ffff]">
                  {" "}
                  <FcDonate /> My Donations
                </button>
              </NavLink>
            </li>}
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DashBoardLayout;
