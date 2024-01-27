import Select from "react-select";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivet from "../../../../Hooks/useAxiosPrivet";
import Loader from "../../../../Components/Common/Loader";
import Swal from "sweetalert2";

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

const UpdatePet = () => {
  const axios = useAxiosPublic();
  const [selectedOption, setSelectedOption] = useState("");
  const [isGander, setIsGander] = useState("");
  const [isVaccinated, setIsVaccinated] = useState("");
  const { id } = useParams();
  const axiosPrivet = useAxiosPrivet();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data , isLoading} = useQuery({
    queryKey: ["update", id],
    queryFn: async () => {
      const res = await axiosPrivet.get(`/all-pets/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader/>
  }

  const { category, name, age, location, petBio, description, color, size } =
    data || {};

  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      const url = res.data?.data?.display_url;
      const updatePetsInfo = {
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
      };
      // console.log(updatePetsInfo);
      const result = await axiosPrivet.patch(
        `/update-pet/${id}`,
        updatePetsInfo
      );
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success",
          text:  `${name} is updated successfully`,
          icon: "success"
        });
      }
      // console.log(result);
    }
  };

  return (
    <section className="p-3 pb-8">
      <h1 className="text-center font-bold text-2xl mt-3 border-l-4 border-[#ef6f18]">
        Update Pet{" "}
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%] ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pet name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                defaultValue={name}
                {...register("name", { required: true })}
                placeholder="Pet name"
                id="name"
                name="name"
                autoComplete="name"
              />
              {errors.name && <p className="text-red-600">Name is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pet Photo
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="file"
                {...register("image", { required: true })}
                id="image"
                name="image"
              />
              {errors.photo && (
                <p className="text-red-600">image is Required</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pet Bio
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                defaultValue={petBio}
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
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <Select
                  className="px-4 border-[#ef6f18]"
                  defaultValue={category}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Age
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
                defaultValue={age}
                {...register("age", { required: true })}
                placeholder="pet age"
                id="age"
                autoComplete="number"
              />
              {errors.age && <p className="text-red-600">age is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Location
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                defaultValue={location}
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
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                defaultValue={description}
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
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Color
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                defaultValue={color}
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
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Size
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                defaultValue={size}
                {...register("size", { required: true })}
                placeholder="size"
                id="size"
                autoComplete="text"
              />
              {errors.size && <p className="text-red-600">size is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="date"
                defaultValue={data}
                {...register("date", { required: true })}
                id="date"
              />
              {errors.email && <p className="text-red-600">Date is Required</p>}
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <div className="">
                <Select
                  className="px-4 border-[#ef6f18]"
                  defaultValue={isGander}
                  onChange={setIsGander}
                  options={gander}
                />
              </div>
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Vaccinated
              </label>
              <Select
                className="px-4 border-[#ef6f18]"
                defaultValue={isVaccinated}
                onChange={setIsVaccinated}
                options={vaccinated}
              />
            </div>
          </div>

          <div className="mt-8 ">
            <button
              type="submit"
              className=" text-white bg-[#ef6f18] rounded-lg font-bold py-2 px-4 w-full hover:bg-gray-600"
            >
              Update Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatePet;


