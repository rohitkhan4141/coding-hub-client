import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Main from "../Layout/Main";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: async () =>
          fetch(
            "https://assingment-10-serverside-rohitkhan4141.vercel.app/courses"
          ),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: async ({ params }) =>
          fetch(
            `https://assingment-10-serverside-rohitkhan4141.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(
            `https://assingment-10-serverside-rohitkhan4141.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
]);
