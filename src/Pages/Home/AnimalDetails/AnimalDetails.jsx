import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Common/Loader";
import TopBar from "../../../Components/Common/TopBar";
import Button from "../../../Components/Common/Button";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import DetailsSideBar from "../../../Components/Common/DetailsSideBar";


const AnimalDetails = () => {
  const axios = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);
  const { user, darkMode } = useAuth();

  const { id } = useParams();

  const { data: animals, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axios.get(`/all-pets/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const {
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
    image,
    blog_img,
  } = animals || {};

  const handleAdoptBtn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const adoptInfo = {
      name: user.displayName,
      email: user.email,
      number: e.target.number.value,
      address: e.target.address.value,
    };
    try {
      const res = await axios.post("/add-Adoptions", adoptInfo);
      if (res.data.acknowledged) {
        form.reset();
        setShowModal(false);
        Swal.fire({
          title: "Pet Adopt Successful",
          text: `Good Job! 👍`,
          icon: "success",
        });
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

    // console.log(adoptInfo);
  };

  return (
    <section className={`max-w-screen-xl mx-auto `}>
      <TopBar></TopBar>
      <div className="md:flex gap-6">
        <div className={`${darkMode ? "bg-[#1e293b] text-white" : "bg-white"} p-5 px-6 rounded-lg shadow-lg md:w-[70%] space-y-6`}>
          <h1 className="font-bold text-3xl border-l-4 border-[#ef6f18]">
            {" "}
            About {name}{" "}
          </h1>
          <p>{description}</p>
          <img className="w-full" src={ blog_img||image} alt="animals" />
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
              <p className="text-[#ef6f18] font-semibold">1 NO</p>
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
          <div onClick={() => setShowModal(true)} className="mt-12 p-4 ">
            <Button value={"Adopt Now"}></Button>
          </div>
        </div>
        <div>
          <DetailsSideBar></DetailsSideBar>
      </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none ">
            <div className="relative w-auto md:w-[500px] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full ${darkMode && "bg-[#1e293b]"} bg-white outline-none focus:outline-none`}>
                {/*header*/}
                <div className="flex items-start justify-between p-10 border-b border-solid border-blueGray-200 rounded-t ">
                  <h3 className="text-3xl font-semibold border-l-4 border-[#ef6f18]">
                    Adopt Now
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
                  <form onSubmit={handleAdoptBtn}>
                    <div>
                      <p className="font-bold">Phone Number </p>
                      <input
                        className="border text-black border-red-400 py-3 px-6 w-96 rounded-md mt-3 placeholder-[#ef6f18] outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        type="number"
                        name="number"
                        id="number"
                        placeholder="Enter Your phone number"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="font-bold">Your Address</p>
                      <input
                        className="border border-red-400 py-3 px-6 w-96 rounded-md mt-3 placeholder-[#ef6f18] text-black outline-none"
                        type="text"
                        name="address"
                        id="address" required
                        placeholder="Enter Your Address"
                      />
                    </div>
                    <div type="submit" className="mt-4">
                      <Button value={"Adopt Now"}></Button>
                    </div>
                  </form>
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

export default AnimalDetails;
