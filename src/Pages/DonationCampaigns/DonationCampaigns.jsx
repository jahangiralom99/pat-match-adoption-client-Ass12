import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Common/Loader";
import DonationCampingCard from "../../Components/DonationCampingCard/DonationCampingCard";
import ScrollToTop from "react-scroll-to-top";

const DonationCampaigns = () => {
  const axios = useAxiosPublic();

  const { data: donations, isLoading } = useQuery({
    queryKey: ["donate"],
    queryFn: async () => {
      const res = await axios.get("all-donate-pets");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="mt-6 max-w-screen-xl mx-auto">
      <ScrollToTop
        className="flex items-center justify-center transition duration-100000"
        color="#ef6f18"
        smooth
      />
      <h1 className="text-3xl font-bold border-l-4 border-[#ef6f18]">
        Donation Campaigns section
      </h1>
      <p className="text-[#ef6f18] font-bold border-l-4 border-[#040404]">
        Donate Pets
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donations.map((donate) => (
          <DonationCampingCard
            key={donate._id}
            donate={donate}
          ></DonationCampingCard>
        ))}
      </div>
    </section>
  );
};

export default DonationCampaigns;
