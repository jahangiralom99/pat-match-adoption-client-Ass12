import { useState } from "react";
import {
  // PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const { darkMode, setDarkMode } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-l-4 border-[#ef6f18] font-bold "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pet-listing"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-l-4 border-[#ef6f18] font-bold"
              : ""
          }
        >
          Pet Listing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donation-campaign"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-l-4 border-[#ef6f18] font-bold"
              : ""
          }
        >
          Donation Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-l-4 border-[#ef6f18] font-bold"
              : ""
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/inspawration-station"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-l-4 border-[#ef6f18] font-bold"
              : ""
          }
        >
          Inspawration Station
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-l-4 border-[#ef6f18] font-bold"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  // console.log(user);

  return (
    <nav
      className={`sticky top-0 bg-opacity-90 mx-auto ${
        !darkMode ? "bg-slate-50" : "text-white dark:bg-[#1e293b]"
      } shadow-lg border-b-2 z-[99]`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sticky">
        <div className="flex mx-auto justify-between ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-8">
            {/* logo */}
            <div>
              <a
                href="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                {/* <PaperAirplaneIcon className="h-6 w-6 text-primary" /> */}
                <img
                  className="h-14 w-20"
                  src="https://i.postimg.cc/9fyR3mvn/logo-pat-removebg-preview.png"
                  alt=""
                />
              </a>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 list-none">{navLinks}</div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className="hidden sm:flex items-center gap-10">
              <div
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 duration-700 rotate-180"
              >
                {!darkMode ? (
                  <MoonIcon className="h-6 w-6 hover:duration-700 hover:rotate-180" />
                ) : (
                  <SunIcon className="h-6 w-6 hover:duration-700 hover:rotate-180" />
                )}
              </div>
              <div>
                <div className="md:hidden lg:block">
                  <Profile></Profile>
                </div>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div
              onClick={() => setToggleMenu(!toggleMenu)}
              className="lg:hidden flex items-center"
            >
              {!toggleMenu ? (
                <button>
                  <XMarkIcon className="h-10 hover:duration-700 hover:rotate-180" />
                </button>
              ) : (
                <button>
                  <Bars3Icon className="h-10 "></Bars3Icon>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-10 w-full text-white bg-gray-600 overflow-hidden flex flex-col lg:hidden  origin-top duration-700 ${
          toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider list-none">
            {navLinks}
          </div>
          <div className="mt-6">
            <Profile></Profile>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
