import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Common/Loader";
import TopBar from "../../../Components/Common/TopBar";
import Button from "../../../Components/Common/Button";

const AnimalDetails = () => {
  const axios = useAxiosPublic();

  const { id } = useParams();

  const { data: animals, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axios.get(`/all-pets/${id}`);
      return res.data;
    },
  });

  //   console.log(Object.keys(animals).join(","));

  //   console.log(animals.id);
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
    blog_img,
  } = animals || {};

  return (
    <section className="max-w-screen-xl mx-auto">
      <TopBar></TopBar>
      <div className="md:flex gap-6">
        <div className="bg-[#f7f4f4] p-5  rounded-lg shadow-lg md:w-[70%] space-y-6">
          <h1 className="font-bold text-3xl border-l-4 border-[#ef6f18]">
            {" "}
            About {name}{" "}
          </h1>
          <p>{description}</p>
          <img className="w-full" src={blog_img} alt="animals" />
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
          <div className="mt-12 p-4 ">
            <Button value={"Adopt Now"}></Button>
          </div>
        </div>
        <div className="bg-[#143556] h-[550px] p-5 rounded-lg sticky top-2">
          <div className="text-center pt-12 ">
            <img
              className="inline "
              src="https://i.postimg.cc/KY7nHrTr/sn-icon.png"
              alt=""
            />
            <h1 className="text-4xl font-bold text-white mt-5">
              Subscribe Newsletter
            </h1>
            <h4 className="text-2xl font-semibold text-white mt-4">
              Sign-up For Latest News
            </h4>
            <input
              className="p-4 mt-5 w-full border-none rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email"
            />
            <div className="w-full mt-5">
              <button className="w-full bg-[#ef6f18] p-5 rounded-lg text-white font-bold transition delay-300 hover:bg-gray-700 hover:text-gray-100 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalDetails;
