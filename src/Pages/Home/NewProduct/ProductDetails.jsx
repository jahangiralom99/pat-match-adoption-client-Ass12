import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Common/Loader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProductDetails = () => {
  const [products, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/v1/all-product")
      .then((res) => res.json())
      .then((data) => {
        const singleProduct5 = data.find(
          (product) => parseInt(product._id) === parseInt(id)
        );
        setProduct(singleProduct5);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  return (
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
          <p className="text-xl text-[#ef6f18]">{products.price} $ USD</p>
          <p>{products.description}...</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
