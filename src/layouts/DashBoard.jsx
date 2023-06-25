import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/shared/navBar/NavBar";
import { Helmet } from "react-helmet-async";
import {
  FaAcquisitionsIncorporated,
  FaBookReader,
  FaGraduationCap,
  FaHome,
  FaIcons,
  FaUserAlt,
  FaUserCog,
  FaUserFriends,
  FaUsersCog,
} from "react-icons/fa";

const DashBoard = () => {
  const location = useLocation();
  const includeHeaderFooter = location.pathname.includes("dashboard");
  return (
    <>
      <Helmet>
        <title>Summer Camp Yoga || Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {includeHeaderFooter && <NavBar />}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="">
              <h2 className="text-2xl font-bold">Summer Camp Yoga</h2>
              <div className="divider"></div>
            </div>
            <li>
              <NavLink to="admin">
                <FaUserCog />
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink to="all-users">
                <FaUsersCog />
                All users
              </NavLink>
            </li>
            <li>
              <NavLink to="instructor">
                <FaGraduationCap />
                Instructor
              </NavLink>
            </li>
            <li>
              <NavLink to="students">
                <FaBookReader />
                Students
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
