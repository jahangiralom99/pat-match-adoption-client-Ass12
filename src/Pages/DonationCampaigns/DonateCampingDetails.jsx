import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Button from "../../Components/Common/Button";
import TopBar from "../../Components/Common/TopBar";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import DetailsSideBar from "../../Components/Common/DetailsSideBar";
import useAuth from "../../Hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const DonateCampingDetails = () => {
  const { id } = useParams();
  const axios = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);
  const { darkMode } = useAuth();

  const { data: donate } = useQuery({
    queryKey: ["donates", id, axios],
    queryFn: async () => {
      const res = await axios.get(`all-donate-pets/${id}`);
      return res.data;
    },
  });

  const {
    dogId,
    category,
    name,
    age,
    location,
    petBio,
    description,
    gender,
    color,
    size,
    vaccinated,
    date,
    maximum_donation,
    // amount,
    image,
  } = donate || {};

  return (
    <section className="max-w-screen-xl mx-auto">
      <TopBar></TopBar>
      <div className="md:flex gap-6">
        <div className={`p-5  rounded-lg shadow-lg md:w-[70%] space-y-6`}>
          <h1 className="font-bold text-3xl border-l-4 border-[#ef6f18]">
            {" "}
            About {name}{" "}
          </h1>
          <p>{description}</p>
          <img className="w-full rounded-xl" src={image} alt="animals" />
          <h1 className="font-bold text-3xl border-l-4 border-[#ef6f18]">
            {" "}
            {name} Bio
          </h1>
          <p>{petBio}</p>
          <h1 className="text-2xl font-semibold border-l-4 border-[#ef6f18]">
            {category} Information
          </h1>
          <hr className="border-[#ef6f18]" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ltr:grid-cols-4 gap-6 justify-items-center place-items-center ">
            <div>
              <h3 className="text-xl font-medium">Gender :</h3>
              <p className="text-[#ef6f18] font-semibold">{gender}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Age :</h3>
              <p className="text-[#ef6f18] font-semibold">{age} Year</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Color :</h3>
              <p className="text-[#ef6f18] font-semibold">{color}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Pet ID :</h3>
              <p className="text-[#ef6f18] font-semibold">{dogId}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Size :</h3>
              <p className="text-[#ef6f18] font-semibold">{size} </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Vaccinated :</h3>
              <p className="text-[#ef6f18] font-semibold">
                {vaccinated ? "Yes" : "no"}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">City :</h3>
              <p className="text-[#ef6f18] font-semibold">{location}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Date :</h3>
              <p className="text-[#ef6f18] font-semibold">{date}</p>
            </div>
          </div>
          <div className="flex flex-col text-center justify-center space-y-4">
            {/* <h3 className="text-xl font-medium">
              Donate Amount :{" "}
              <span className="text-[#ef6f18] font-semibold">$ {amount}</span>
            </h3> */}
            <h3 className="text-xl font-medium">
              Maximum Donation :{" "}
              <span className="text-[#ef6f18] font-semibold">
                $ {maximum_donation}
              </span>
            </h3>
          </div>
          {donate?.donate ? (
            <div
              onClick={() => setShowModal(true)}
              className="mt-12 p-4 text-center"
            >
              <Button value={" Donate Now"}></Button>
            </div>
          ) : (
            <div className="mt-12 p-4 text-center">
              <button
                className="bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
                disabled
              >
                Donate Paused
              </button>{" "}
            </div>
          )}
        </div>
        <div>
          <DetailsSideBar></DetailsSideBar>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none ">
            <div className="relative w-auto md:w-[600px] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full ${
                  darkMode && "bg-[#1e293b]"
                } bg-white outline-none focus:outline-none`}
              >
                {/*header*/}
                <div className="flex items-start justify-between p-10 border-b border-solid border-blueGray-200 rounded-t ">
                  <h3 className="text-3xl font-semibold border-l-4 border-[#ef6f18]">
                    Donation Now
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    // onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* stripe donate for stripe */}
                  <Elements stripe={stripePromise}>
                    <CheckOutForm
                      donate={donate}
                      setShowModal={setShowModal}
                    ></CheckOutForm>
                  </Elements>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-[#ef6f18] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border rounded-lg hover:bg-[#ef6f18] hover:text-white border-red-500"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  );
};

export default DonateCampingDetails;
