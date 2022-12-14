import { createBrowserRouter } from "react-router-dom";
import Four04 from "../components/404/Four04";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/FAQ/Faq";
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
        errorElement: <Four04></Four04>,
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
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "*",
        element: <Four04 />,
      },
    ],
  },
]);
