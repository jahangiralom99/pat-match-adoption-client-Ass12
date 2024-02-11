import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Common/Loader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaCartArrowDown, FaRegStar } from "react-icons/fa";
import { GiBowTieRibbon } from "react-icons/gi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const axios = useAxiosPublic();
  const { id } = useParams();

  const { data: products, isLoading } = useQuery({
    queryKey: ["product", id, axios],
    queryFn: async () => {
      const res = await axios.get(`/all-product/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <Loader />;

  const handleApply = () => {
    toast.info("This Feature is under the construction", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <section>
      <div className="max-w-screen-xl mx-auto mt-8">
        <div className="md:flex gap-8 px-4">
          <div className="flex-1 text-center">
            <Carousel showArrows={true}>
              {products.images?.map((item, idx) => (
                <div key={idx}>
                  <img className="inline" src={item} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex-1 space-y-3">
            <h1 className="text-3xl font-semibold">{products.name}</h1>
            <p className="text-xl text-[#ef6f18] ">
              <span className="line-through ">{products.price + 2} $ USD</span>
              <span className="ml-4">{products.price} $ USD</span>
            </p>
            <div className="flex items-center gap-3">
              <div className="flex text-[#ef6f18]">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              No reviews
            </div>
            <hr className="mt-3 border-[#ef6f18]" />
            <p className="text-sm text ">{products.description}...</p>
            <div>
              <p className="flex items-center gap-4 hover:text-[#ef6f18]">
                <GiBowTieRibbon className="text-2xl " />
                <span className="underline">Size guide</span>
              </p>
              <div className="mt-8 flex gap-12 items-center">
                <p className="underline text-xl ">size : </p>
                <div className="flex  items-center justify-center">
                  <div
                    className={`border w-12 size-12 flex items-center justify-center  text-white font-bold bg-black`}
                  >
                    S
                  </div>
                  <div className="border w-12 size-12 flex items-center justify-center">
                    M
                  </div>
                  <div className="border w-12 size-12 flex items-center justify-center">
                    L
                  </div>
                </div>
              </div>
              <div className="flex mt-8 gap-12 cursor-pointer">
                <div className="flex">
                  <div className=" border-black border-2">
                    <div className="border w-14 text-center h-full text-2xl flex items-center justify-center">
                      {count}
                    </div>
                  </div>
                  <div className=" w-12 text-center ">
                    <p
                      onClick={() => setCount(count - 1)}
                      className="border-black border-2 hover:text-[#ef6f18] font-bold text-xl cursor-pointer"
                    >
                      -
                    </p>
                    <p
                      onClick={() => setCount(count + 1)}
                      className="cursor-pointer border-black border-2 hover:text-[#ef6f18] font-bold text-xl"
                    >
                      +
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleApply}
                  className="hover:bg-black border bg-[#ef6f18] flex gap-2 items-center justify-center p-4 text-1xl text-white"
                >
                  <FaCartArrowDown className="text-2xl " /> Add To CArt{" "}
                </div>
              </div>
              <div
                onClick={handleApply}
                className="mt-6 border bg-black flex items-center justify-center p-4 text-1xl font-semibold text-white cursor-pointer"
              >
                Buy Now{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center max-w-screen-lg mx-auto px-4 mt-5">
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Additional Information</Tab>
            <Tab>Review</Tab>
          </TabList>

          <TabPanel>
            <div className="text-start space-y-3">
              <h1 className="text-2xl font-semibold">{products.name}</h1>
              <p>{products.description}</p>
              {/* <img className="w-44 inline" src={products?.images[0]} alt="" /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="text-start space-y-3">
              <h1 className="font-bold">Size : {products.size}</h1>
              <h1 className="font-bold">Color : {products.color}</h1>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex items-center gap-3">
              <div className="flex text-[#ef6f18]">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              No reviews
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductDetails;
