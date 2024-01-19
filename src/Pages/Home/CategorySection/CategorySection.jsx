import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <div className="mt-8 ">
      <h1 className="text-3xl font-bold border-l-4 border-[#ef6f18]">
        Pets category section
      </h1>
      <p className="text-[#ef6f18] font-bold">Ours Pets</p>
      <div className="max-w-screen-xl mx-auto mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="w-full">
            {/* 1 number card */}
            <div className="shadow-lg group rounded-md bg-cover bg-center bg-no-repeat max-w-sm flex justify-center items-center mx-auto relative">
              <div className=" group-hover:opacity-40 hover:bg-opacity-60">
                <img
                  className="md:w-96 md:h-60 w-full hover:bg-opacity-35"
                  src="https://i.postimg.cc/s2djPz8V/img-07-1af70a25-b43d-4cb2-ab61-9ad266b181ca-370x370-crop-top-png.jpg"
                  alt="cats"
                />
                <h1 className="font-bold text-2xl text-center">Cats</h1>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-80">
                <div className="pt-8 text-center">
                  <Link
                    to="/cats"
                    data-tip="Link to Computers & Technology"
                    className="tooltip tooltip-top"
                  >
                    <button className="text-center bg-[#ef6f18] rounded-full p-4 hover:bg-[#c85b13] font-bold text-lg">
                      <BsLink45Deg className="text-xl text-white font-bold " />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            {/* 2 number card */}
            <div className="shadow-lg group rounded-md bg-cover bg-center bg-no-repeat max-w-sm flex justify-center items-center mx-auto relative">
              <div className=" group-hover:opacity-40 hover:bg-opacity-60">
                <img
                  className="md:w-96 md:h-60 w-full hover:bg-opacity-35"
                  src="https://i.postimg.cc/XqhVqByg/img-12-370x370-crop-top-png.jpg"
                  alt="Dogs"
                />
                <h1 className="font-bold text-2xl text-center">Dogs</h1>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-80">
                <div className="pt-8 text-center">
                  <Link
                    to="/dogs"
                    data-tip="Link to Computers & Technology"
                    className="tooltip tooltip-top"
                  >
                    <button className="text-center bg-[#ef6f18] rounded-full p-4 hover:bg-[#c85b13] font-bold text-lg">
                      <BsLink45Deg className="text-xl text-white font-bold " />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            {/* 3 number card */}
            <div className="shadow-lg group rounded-md bg-cover bg-center bg-no-repeat max-w-sm flex justify-center items-center mx-auto relative">
              <div className=" group-hover:opacity-40 hover:bg-opacity-60">
                <img
                  className="md:w-96 md:h-60 w-full hover:bg-opacity-35"
                  src="https://i.postimg.cc/hPTjvMpz/img-08-a0d17e1f-25bd-4fd1-ab1a-53517e86b78d-370x370-crop-top-png.webp"
                  alt="Fishs"
                />
                <h1 className="font-bold text-2xl text-center">Fish</h1>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-80">
                <div className="pt-8 text-center">
                  <Link
                    to="/fish"
                    data-tip="Link to Computers & Technology"
                    className="tooltip tooltip-top"
                  >
                    <button className="text-center bg-[#ef6f18] rounded-full p-4 hover:bg-[#c85b13] font-bold text-lg">
                      <BsLink45Deg className="text-xl text-white font-bold " />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            {/* 3 number card */}
            <div className="shadow-lg group rounded-md bg-cover bg-center bg-no-repeat max-w-sm flex justify-center items-center mx-auto relative">
              <div className=" group-hover:opacity-40 hover:bg-opacity-60">
                <img
                  className="md:w-96 md:h-60 w-full hover:bg-opacity-35"
                  src="https://i.postimg.cc/T2s5xFCt/collection-5-40931f2e-5a73-42de-82ea-c20e86dea9c9-350x350-crop-top.jpg"
                  alt="rabbit"
                />
                <h1 className="font-bold text-2xl text-center">Rabbit</h1>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-80">
                <div className="pt-8 text-center">
                  <Link
                    to="/rabbits"
                    data-tip="Link to Computers & Technology"
                    className="tooltip tooltip-top"
                  >
                    <button className="text-center bg-[#ef6f18] rounded-full p-4 hover:bg-[#c85b13] font-bold text-lg">
                      <BsLink45Deg className="text-xl text-white font-bold " />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySection;
