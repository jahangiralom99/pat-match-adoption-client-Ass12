// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

// import required modules
import { Scrollbar } from "swiper/modules";
import Button from "../../../Components/Common/Button";

const Banner = () => {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        classNameName="mySwiper"
      >
        <SwiperSlide>
          <section className="relative bg-[url(https://i.postimg.cc/h4QkMtGD/slide4.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl space-y-3 ltr:sm:text-left rtl:sm:text-right">
                <h1 className="text-2xl font-bold sm:text-4xl">
                  Dog Adoption
                  <strong className="block font-bold text-[#ef6f18]">
                    {" "}
                    Available for Adoption.{" "}
                  </strong>
                </h1>

                <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                  The best overall dog DNA test is Embark Breed & Health Kit
                  (view at Chewy), which provid dogs
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Button value="Adoption"></Button>
                  <Button value="Donation"></Button>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative bg-[url(https://i.postimg.cc/Fzq0fy72/slide3-1.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0  bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl space-y-3 ltr:sm:text-left rtl:sm:text-right">
                <h1 className="text-2xl font-bold sm:text-4xl">
                  Dog Adoption
                  <strong className="block font-bold text-[#ef6f18]">
                    {" "}
                    Available for Adoption.{" "}
                  </strong>
                </h1>

                <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                  The best overall dog DNA test is Embark Breed & Health Kit
                  (view at Chewy), which provid dogs
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Button value="Adoption"></Button>
                  <Button value="Donation"></Button>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative bg-[url(https://i.postimg.cc/1XgqZ8JM/slide1old.jpg)] bg-opacity-40 bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl space-y-3 ltr:sm:text-left rtl:sm:text-right">
                <h1 className="text-2xl font-bold sm:text-5xl">
                  Dog Adoption
                  <strong className="block font-bold text-[#ef6f18]">
                    {" "}
                    Available for Adoption.{" "}
                  </strong>
                </h1>

                <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                  The best overall dog DNA test is Embark Breed & Health Kit
                  (view at Chewy), which provid dogs
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Button value="Adoption"></Button>
                  <Button value="Donation"></Button>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative bg-[url(https://i.postimg.cc/B6zjNq4F/slide3.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl space-y-3 ltr:sm:text-left rtl:sm:text-right">
                <h1 className="text-2xl font-bold sm:text-4xl">
                  Dog Adoption
                  <strong className="block font-bold  text-[#ef6f18]">
                    {" "}
                    Available for Adoption.{" "}
                  </strong>
                </h1>

                <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                  The best overall dog DNA test is Embark Breed & Health Kit
                  (view at Chewy), which provide dogs
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Button value="Adoption"></Button>
                  <Button value="Donation"></Button>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

// https://i.postimg.cc/h4QkMtGD/slide4.jpg
