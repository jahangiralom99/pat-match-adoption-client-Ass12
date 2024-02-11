import AllProduct from "./AllProduct";

const NewProduct = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold border-l-4 border-[#ef6f18]">
          New Product
        </h1>
        <p className="text-[#ef6f18] font-bold border-l-4 border-[#040404]">
          Pets Product
        </p>
      </div>
      <div className="mt-4">
        <section className="relative  h-screen flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <img
              src="https://petiza-store-demo.myshopify.com/cdn/shop/files/countdown-v1.jpg?v=1613333555"
              alt="dog/food"
              className="lg:h-screen object-contain hover:scale-110 transition duration-1000"
            />
          </div>
          <div className="space-y-6 z-10 text-black font-SofiaPro">
            <p>NATURE DEAL OF THE DAY</p>
            <h1 className="font-light text-5xl border border-red-600 p-3">
              Buy now to get the best price
            </h1>
            <div className="flex items-center justify-center ">
              <hr className="border-2 w-24" />
              <hr className="border-2 w-16 border-red-600 " />
              <hr className="border-2 w-24" />
            </div>
            <h3 className="font-light ">Expired</h3>
          </div>
        </section>
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold">New Product Here</h1>
        <AllProduct />
      </div>
    </div>
  );
};
export default NewProduct;
