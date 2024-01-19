import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Cats from "../../Pages/Home/Category/Cats";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Dogs from "../../Pages/Home/Category/Dogs";
import Fish from "../../Pages/Home/Category/Fish";
import Rabbit from "../../Pages/Home/Category/Rabbit";
import AnimalDetails from "../../Pages/Home/AnimalDetails/AnimalDetails";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "cats",
        element: (
          <PrivetRoute>
            <Cats></Cats>
          </PrivetRoute>
        ),
      },
      {
        path: "dogs",
        element: (
          <PrivetRoute>
            <Dogs></Dogs>
          </PrivetRoute>
        ),
        },
        {
            path: "fish",
            element: (
              <PrivetRoute>
                <Fish></Fish>
              </PrivetRoute>
            ),
        },
        {
            path: "rabbits",
            element: (
              <PrivetRoute>
                <Rabbit></Rabbit>
              </PrivetRoute>
            ),
          },
        {
            path: "animals/:id",
            element: (
              <PrivetRoute>
                <AnimalDetails></AnimalDetails>
              </PrivetRoute>
            ),
          },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Route;
