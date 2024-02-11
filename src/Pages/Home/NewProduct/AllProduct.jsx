/* eslint-disable no-unused-vars */
import Loader from "../../../Components/Common/Loader";
import { FaCartPlus } from "react-icons/fa6";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { TbListDetails } from "react-icons/tb";
import { GiSelfLove } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import useCart from "../../../Hooks/useCart";

const AllProduct = () => {
  const axios = useAxiosPublic();
  const { user } = useAuth();
  const [cartData, refetch] = useCart();


  const { data: products = [], isLoading } = useQuery({
    queryKey: ["product", axios],
    queryFn: async () => {
      const res = await axios.get("/all-product");
      return res.data;
    },
  });


  if (isLoading) return <Loader />;

  const handleAddToCart = async (product) => {
    const addToCart = {
      name: product.name,
      email: user?.email,
      image: product.images[0],
      price: product.price,
      size: product.size,
      color: product.color,
    };
    const res = await axios.post("/add-to-cart", addToCart);
    if (res.data.acknowledged) { 
      toast.success("This Product Added to cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      refetch();
    }
  };

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-8 px-2">
      
      {products?.map((product) => (
        <div key={product?._id}>
          <div className="relative overflow-hidden transition duration-300 transform rounded  lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-full  md:h-64 xl:h-80"
              src={product?.images[0]}
              alt="Person"
            />
            <div className="text-center mt-2 bg-white p-4">
              <p className="mb-1 text-xl text-black font-semibold">
                {product?.name}
              </p>
              <p className="mb-4 text-[#ef6f18]">{product?.price} $</p>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
              <div className="flex items-center justify-center text-xl space-x-3 text-black">
                <Link
                  to={`/details/${product?._id}`}
                  data-tooltip-id="details"
                  data-tooltip-variant="error"
                  className="border bg-white rounded-full "
                >
                  <TbListDetails className="text-4xl size-12 hover:text-[#ef6f18] p-3" />
                </Link>
                <p
                  onClick={() => handleAddToCart(product)}
                  data-tooltip-id="cart"
                  data-tooltip-variant="error"
                  className="border bg-white rounded-full "
                >
                  <FaCartPlus className="text-4xl size-12 hover:text-[#ef6f18] p-3" />
                </p>
                <p onClick={handleApply}
                  data-tooltip-id="wishlist"
                  data-tooltip-variant="error"
                  className="border bg-white rounded-full "
                >
                  <GiSelfLove className="text-4xl size-12 hover:text-[#ef6f18] p-3" />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ReactTooltip id="details" place="top" variant="info" content="Details" />
      <ReactTooltip
        id="cart"
        place="top"
        variant="info"
        content="Add To Cart"
      />
      <ReactTooltip
        id="wishlist"
        place="top"
        variant="info"
        content="WishList"
      />
    </div>
  );
};

export default AllProduct;
