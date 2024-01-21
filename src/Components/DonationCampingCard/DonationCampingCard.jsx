import { Link } from "react-router-dom";
import Button from "../Common/Button";
import PropTypes from "prop-types";

const DonationCampingCard = ({ donate }) => {
  const { _id, name, image, amount, maximum_donation } = donate || {};

  return (
    <div>
      <div className="flex-shrink-0 mt-6 relative overflow-hidden bg-white rounded-lg shadow-lg group">
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
          <img className="relative w-full rounded-lg" src={image} alt="" />
        </div>
        <div className="relative  px-6 pb-6 mt-6 space-y-3 ">
          <span className="block font-semibold text-xl ml-3 border-l-4 border-[#ef6f18]">
            {name}
          </span>
          <span className="block font-semibold text-sm ml-3">
            Maximum Donation :{" "}
            <span className="text-red-500"> $ {maximum_donation}</span>
          </span>
          <div className="flex justify-between">
            <span className=" bg-white rounded-full text-orange-500 text-[16px] font-bold px-3 py-2 leading-none flex items-center">
              Donate : {amount} $
            </span>
            <Link to={`/details/${_id}`}>
              <Button value={"details"}></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationCampingCard.propTypes = {
  donate: PropTypes.object.isRequired,
};
export default DonationCampingCard;
