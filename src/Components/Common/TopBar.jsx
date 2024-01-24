/* eslint-disable react/prop-types */

const TopBar = ({value}) => {
  return (
      <div
        className="h-[400px] place-items-stretch bg-no-repeat object-cover mx-auto"
        style={{
          backgroundImage: `url(https://i.postimg.cc/gJCG5cTt/aaa.jpg)`,
        }}
      >
        <div className=" bg-opacity-30 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 "></div>
        <div className=" text-neutral-content">
          <div className="ml-16">
            <h1 className="mb-5 text-5xl font-bold"></h1>
                  <div className="flex flex-col justify-center pt-28">
                  <h1 className="text-[#ef6f18] text-4xl font-bold  ">
              Pets Listing - {value}
            </h1>
            </div>
          </div>
        </div>
      </div>
  );
};


export default TopBar;
