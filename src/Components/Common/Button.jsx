/* eslint-disable react/prop-types */

const Button = ({ value}) => {
  return (
    <button className={`rounded-full font-bold border-solid border-2 bg-[#ef6f18] transition delay-300 text-white py-2 px-4 hover:bg-gray-700 hover:text-gray-100 `}>
      {value}
    </button>
  );
};


export default Button;
