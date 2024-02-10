import { useEffect, useState } from "react";
import Loader from "../../../Components/Common/Loader";
import { FaCartPlus, } from "react-icons/fa6";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { TbListDetails } from "react-icons/tb";
import { GiSelfLove } from "react-icons/gi";
import { Link } from "react-router-dom";


const AllProduct = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/v1/all-product")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  console.log(products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-8 px-2">
      {products.map((product) => (
        <div key={product._id}>
          <div className="relative overflow-hidden transition duration-300 transform rounded  lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-full  md:h-64 xl:h-80"
              src={product.images[1]}
              alt="Person"
            />
            <div className="text-center mt-2 bg-white p-4">
              <p className="mb-1 text-xl text-black font-semibold">
                {product.name}
              </p>
              <p className="mb-4 text-[#ef6f18]">{product.price} $</p>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
              <div className="flex items-center justify-center text-xl space-x-3">
                <Link to={`/details/${product._id}`}
                  data-tooltip-id="details"
                  data-tooltip-variant="error"
                  className="border bg-white rounded-full "
                >
                  <TbListDetails className="text-4xl size-12 hover:text-[#ef6f18] p-3" />
                </Link>
                <p
                  data-tooltip-id="cart"
                  data-tooltip-variant="error"
                  className="border bg-white rounded-full "
                >
                  <FaCartPlus className="text-4xl size-12 hover:text-[#ef6f18] p-3" />
                </p>
                <p
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
