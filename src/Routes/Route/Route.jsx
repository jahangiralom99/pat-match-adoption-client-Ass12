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
import PetListing from "../../Pages/PetListing/PetListing";
import DonationCampaigns from "../../Pages/DonationCampaigns/DonationCampaigns";
import DonateCampingDetails from "../../Pages/DonationCampaigns/DonateCampingDetails";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import AddAPet from "../../Pages/DashBord/AddAPet/AddAPet";
import MyAddedPet from "../../Pages/DashBord/MyAddedPet/MyAddedPet";
import AdoptionRequest from "../../Pages/DashBord/AdoptionRequest/AdoptionRequest";
import CreateDonationCampaign from "../../Pages/DashBord/CreateDonationCampaign/CreateDonationCampaign";
import MyDonationCampaigns from "../../Pages/DashBord/MyDonationCampaigns/MyDonationCampaigns";
import MyDonations from "../../Pages/DashBord/MyDonations/MyDonations";
import User from "../../Pages/DashBord/AdminDashboard/User/User";
import AllPets from "../../Pages/DashBord/AdminDashboard/AllPets/AllPets";
import AllDonations from "../../Pages/DashBord/AdminDashboard/AllDonations/AllDonations";

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
        path: "pet-listing",
        element: <PetListing></PetListing>,
      },
      {
        path: "donation-campaign",
        element: <DonationCampaigns/>,
      },
      {
        path: "details-campaigns/:id",
        element: (
          <PrivetRoute>
            <DonateCampingDetails/>
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
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoardLayout/>
      </PrivetRoute>
    ),
    children: [
      // normal user path to dashboard
      {
        index: true,
        element: <></>,
      },
      {
        path: "dashboard",
        element: <></>,
      },
      {
        path: "addAPet",
        element: <AddAPet></AddAPet>,
      },
      {
        path: "myAddPets",
        element: <MyAddedPet/>
      },
      {
        path: "adoption-request",
        element: <AdoptionRequest/>
      },
      {
        path: "create-donation-campaign",
        element: <CreateDonationCampaign/>
      },
      {
        path: "my-donation-campaigns",
        element: <MyDonationCampaigns/>
      },
      {
        path: "my-donations",
        element: <MyDonations/>
      },
      // Admin Routes ALL
      {
        path: 'user',
       element: <User/> 
      },
      {
        path: "all-pets",
        element: <AllPets/>
      },
      {
        path: "all-donations",
        element: <AllDonations/>
      }
     
    ],
  },
]);

export default Route;
