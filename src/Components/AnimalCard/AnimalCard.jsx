// import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TbCategoryPlus, TbWorld } from "react-icons/tb";
import { FaRegCalendarAlt, FaTransgender } from "react-icons/fa";
import PropTypes from "prop-types";
import Button from "../Common/Button";

const AnimalCard = ({ animal }) => {
  const { category, name, location, gender, image, _id } = animal || {};

  return (
    <section>
      <div className="group rounded-md bg-cover bg-center bg-no-repeat max-w-sm flex justify-center items-center mx-auto relative">
        <div className=" group-hover:opacity-40 hover:bg-opacity-60 ">
          <img
            className=" bg-[#f4f1e9] md:w-96 md:h-80 w-full hover:bg-opacity-35 hover:shadow-xl shadow-xl"
            src={image}
            alt="Dogs"
          />
          <div className="relative -top-12 h-[150px] z-50 w-80 mx-auto bg-slate-100 rounded-lg p-4">
            <h1 className="font-bold text-2xl text-center text-[#ef6f18]">
              {name}
            </h1>
            <div className="flex justify-between mt-3">
              <p className="flex items-center gap-1 ">
                <FaRegCalendarAlt></FaRegCalendarAlt> Birth :2024
              </p>
              <p className="flex items-center gap-1 ">
                <TbWorld></TbWorld> {location}
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <p className="flex items-center gap-1 ">
                <FaTransgender /> {gender}
              </p>
              <p className="flex items-center gap-1 ">
                <TbCategoryPlus /> {category}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute opacity-0 group-hover:opacity-80">
          <div className="pt-8 text-center">
                      <Link to={`/animals/${_id}`} className="">
              <Button value={"details"}></Button>
              {/* <button className="text-center bg-[#ef6f18] rounded-full p-4 hover:bg-[#c85b13] font-bold text-lg">
              <Button value={"details"}></Button>
            </button> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

AnimalCard.propTypes = {
  animal: PropTypes.object.isRequired,
};

export default AnimalCard;
