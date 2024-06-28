import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Common/Loader";
import Select from "react-select";
import { useState } from "react";
import Button from "../../Components/Common/Button";
import AnimalCard from "../../Components/AnimalCard/AnimalCard";
import ScrollToTop from "react-scroll-to-top";

const options = [
  { value: "", label: "Options" },
  { value: "dogs", label: "Dogs" },
  { value: "fish", label: "Fish" },
  { value: "cats", label: "Cats" },
  { value: "rabbit", label: "Rabbit" },
];

const PetListing = () => {
  const axios = useAxiosPublic();
  const [selectedOption, setSelectedOption] = useState("");
  const [textField, setTextField] = useState("");
  // console.log(selectedOption);
  const { data: animals = [], isLoading } = useQuery({
    queryKey: ["all-pets", textField, selectedOption],
    queryFn: async () => {
      const res = await axios.get(
        `/all-pets?name=${textField || ""}&&category=${
          selectedOption.value || ""
        }`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.search.value);
    setTextField(e.target.search.value);
  };
  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <ScrollToTop
        className="flex items-center justify-center transition duration-100000"
        color="#ef6f18"
        smooth
      />
      <form onSubmit={handleChange} className="flex justify-end mt-8 px-5">
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row">
          <input
            className="py-2 px-4 border border-[#ef6f18] rounded-lg"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
          <div>
          <Button value={"search"}></Button>
          </div>
        </div>
        <div>
          <Select
            className="px-3 border-[#ef6f18]"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options} 
          />
        </div>
      </form>
      <h1 className="text-3xl font-bold border-l-4 mt-6 border-[#ef6f18]">
        Pets Listing section
      </h1>
      <p className="text-[#ef6f18] font-bold border-l-4 border-[#040404]">
        Ours Pets
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-3">
        {animals.map((animal) => (
          <AnimalCard
            key={animal._id}
            animal={animal}
            isLoading={isLoading}
          ></AnimalCard>
        ))}
      </div>
    </section>
  );
};

export default PetListing;
