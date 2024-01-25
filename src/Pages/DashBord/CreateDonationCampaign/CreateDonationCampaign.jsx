import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import Select from "react-select";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const options = [
  { value: "", label: "Options" },
  { value: "dogs", label: "Dogs" },
  { value: "fish", label: "Fish" },
  { value: "cats", label: "Cats" },
  { value: "rabbit", label: "Rabbit" },
];
const gander = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
const vaccinated = [
  { value: "true", label: "true" },
  { value: "false", label: "false" },
];

const CreateDonationCampaign = () => {
  const axios = useAxiosPublic();
  const [selectedOption, setSelectedOption] = useState("");
  const [isGander, setIsGander] = useState("");
  const [isVaccinated, setIsVaccinated] = useState("");
  const { user } = useAuth();

  //   console.log(selectedOption.value, isGander.value, isVaccinated.value);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.photo[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      const url = res.data?.data?.display_url;
      // console.log(url);
      const addPetsInfo = {
        dogId: 23,
        category: selectedOption.value,
        name: data.name,
        age: data.age,
        location: data.location,
        petBio: data.bio,
        description: data.description,
        gender: isGander.value,
        color: data.color,
        size: data.size,
        vaccinated: isVaccinated.value,
        date: data.date,
        image: url,
        blog_img: url,
        email: user?.email,
        submitDate: new Date(),
        adopted: false,
        amount: data.amount,
        maximum_donation: data.maximum_donation,
      };
      const result = await axios.post("/create-donation-pet", addPetsInfo);
      // console.log(result);
      if (result.data.acknowledged) {
        Swal.fire({
          title: "Donation Pet Added !!!",
          text: "Pet donate successfully",
          icon: "success",
        });
        reset();
      }
    }
  };

  return (
    <section className="p-3 pb-8">
      <h1 className="text-center font-bold text-2xl mt-3 border-l-4 border-[#ef6f18]">
        Create Donation Campaign{" "}
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%] ">
              <label className="block text-sm font-bold mb-2">
                Pet name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("name", { required: true })}
                placeholder="Pet name"
                id="name"
                name="name"
                autoComplete="name"
              />
              {errors.name && <p className="text-red-600">Name is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Pet Photo
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="file"
                {...register("photo", { required: true })}
                id="photo"
                name="photo"
              />
              {errors.photo && (
                <p className="text-red-600">Photo is Required</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Pet Bio
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("bio", { required: true })}
                placeholder="Bio"
                id="text"
                autoComplete="text"
              />
              {errors.bio && (
                <p className="text-red-600">Pet Bio is Required</p>
              )}
            </div>
            <div className="mt-4 flex-[50%]">
              <div className="">
                <label className="block text-sm font-bold mb-2">
                  Category
                </label>
                <Select
                  className="px-4 border-[#ef6f18] text-black"
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Age
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
                {...register("age", { required: true })}
                placeholder="pet age"
                id="age"
                autoComplete="number"
              />
              {errors.age && <p className="text-red-600">age is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Location
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("location", { required: true })}
                placeholder="your location"
                id="text"
                autoComplete="text"
              />
              {errors.location && (
                <p className="text-red-600">location is Required</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Description
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("description", { required: true })}
                placeholder="description"
                id="description"
                autoComplete="text"
              />
              {errors.description && (
                <p className="text-red-600">description is Required</p>
              )}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Color
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("color", { required: true })}
                placeholder="Color"
                id="color"
                autoComplete="text"
              />
              {errors.color && (
                <p className="text-red-600">Color is Required</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Size
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("size", { required: true })}
                placeholder="size"
                id="size"
                autoComplete="text"
              />
              {errors.size && <p className="text-red-600">size is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Date
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="date"
                {...register("date", { required: true })}
                id="date"
              />
              {errors.email && <p className="text-red-600">Date is Required</p>}
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Gender
              </label>
              <div className="">
                <Select
                  className="px-4 border-[#ef6f18] text-black"
                  defaultValue={isGander}
                  onChange={setIsGander}
                  options={gander}
                />
              </div>
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Vaccinated
              </label>
              <Select
                className="px-4 border-[#ef6f18] text-black"
                defaultValue={isVaccinated}
                onChange={setIsVaccinated}
                options={vaccinated}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Maximum Donation
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
                {...register("maximum_donation", { required: true })}
                placeholder="Maximum Donation"
                id="maximum_donation"
                autoComplete="number"
              />
              {errors.age && (
                <p className="text-red-600">Maximum Donation is Required</p>
              )}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block  text-sm font-bold mb-2">
                Amount
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
                {...register("amount", { required: true })}
                placeholder="Amount"
                id="Amount"
                autoComplete="Amount"
              />
              {errors.location && (
                <p className="text-red-600">Amount is Required</p>
              )}
            </div>
          </div>

          <div className="mt-8 ">
            <button
              type="submit"
              className=" text-white bg-[#ef6f18] rounded-lg font-bold py-2 px-4 w-full hover:bg-gray-600"
            >
              Create Donation Campaign
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateDonationCampaign;
