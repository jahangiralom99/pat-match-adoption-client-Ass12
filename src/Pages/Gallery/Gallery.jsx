import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Common/Loader";
import TopBar from "../../Components/Common/TopBar";
import ScrollToTop from "react-scroll-to-top";

const Gallery = () => {
  const axios = useAxiosPublic();

  const { data, isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axios.get("/gallery");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="max-w-screen-xl mx-auto">
      <ScrollToTop
        className="flex items-center justify-center transition duration-100000"
        color="#ef6f18"
        smooth
      />
      <TopBar value={"gallery"} />
      <h1 className="text-center -mt-4 text-4xl font-semibold  border-l-4 border-[#ef6f18]">
        Our Pet Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {data.map((photo) => {
          return (
            <div key={photo._id}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={photo.imageLink}
                alt="pets gallery"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
