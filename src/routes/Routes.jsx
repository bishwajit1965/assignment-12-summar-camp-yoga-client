import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signUp/SignUp";
import AboutUs from "../pages/aboutUs/AboutUs";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import DashBoard from "../layouts/DashBoard";
import AllUsersDashBoard from "../pages/dashBoard/allUsers/AllUsersDashBoard";
import InstructorDashBoard from "../pages/dashBoard/instructorDashBoard/InstructorDashBoard";
import StudentDashBoard from "../pages/dashBoard/studentDashBoard/StudentDashBoard";
import AdminDashBoard from "../pages/dashBoard/adminDashBoard/AdminDashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "admin",
        element: <AdminDashBoard />,
      },
      {
        path: "all-users",
        element: <AllUsersDashBoard />,
      },
      {
        path: "instructor",
        element: <InstructorDashBoard />,
      },
      {
        path: "students",
        element: <StudentDashBoard />,
      },
    ],
  },
]);
export default router;
