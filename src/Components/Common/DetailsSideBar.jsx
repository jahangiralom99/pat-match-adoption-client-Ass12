import Swal from "sweetalert2";

const DetailsSideBar = () => {
  const handleSubBtn = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Subscribe Email successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="bg-[#143556] h-[550px] p-5 rounded-lg sticky top-2 mt-5 md:mt-0">
      <div className="text-center pt-12 ">
        <img
          className="inline "
          src="https://i.postimg.cc/KY7nHrTr/sn-icon.png"
          alt=""
        />
        <h1 className="text-4xl font-bold text-white mt-5">
          Subscribe Newsletter
        </h1>
        <h4 className="text-2xl font-semibold text-white mt-4">
          Sign-up For Latest News
        </h4>
        <form onSubmit={handleSubBtn}>
          <input
            className="p-4 mt-5 w-full border-none rounded-lg"
            type="text"
            name=""
            id=""
            placeholder="Enter Your Email"
          />
          <div className="w-full mt-5">
            <button className="w-full bg-[#ef6f18] p-5 rounded-lg text-white font-bold transition delay-300 hover:bg-gray-700 hover:text-gray-100 ">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsSideBar;
