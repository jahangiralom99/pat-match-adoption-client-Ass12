import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Common/Loader";
import TopBar from "../../../Components/Common/TopBar";
import AnimalCard from "../../../Components/AnimalCard/AnimalCard";

const Fish = () => {

    const axios = useAxiosPublic();

    const { data: animals, isLoading } = useQuery({
      queryKey: ["fish"],
      queryFn: async () => {
        const res = await axios.get("/all-pets?category=fish");
        return res.data;
      },
    });
  
    if (isLoading) {
      return <Loader></Loader>;
      }
  
      
  

    return (
        <div className="max-w-screen-xl mx-auto">
        <TopBar></TopBar>
        <h1 className="text-3xl font-bold border-l-4 border-[#ef6f18]">
          ------Your Fish List --------
        </h1>
        <p className="text-[#ef6f18] font-bold border-l-4 border-[#040404]">
          Ours Pets
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-8">
          {animals.map((animal) => (
            <AnimalCard key={animal._id} animal={animal}></AnimalCard>
          ))}
        </div>
      </div>
    );
};

export default Fish;