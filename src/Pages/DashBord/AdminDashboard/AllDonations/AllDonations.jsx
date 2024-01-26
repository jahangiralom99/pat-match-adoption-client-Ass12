import { useQuery } from "@tanstack/react-query";
import useAxiosPrivet from "../../../../Hooks/useAxiosPrivet";
import Loader from "../../../../Components/Common/Loader";
import {  NavLink } from "react-router-dom";
import { FaEdit, FaRegPauseCircle } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const AllDonations = () => {
  const axios = useAxiosPrivet();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["all-pets"],
    queryFn: async () => {
      const res = await axios.get("/all-donate-pets-admin");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`/donation-pet-delete/${id}`);
        // console.log(res);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const handlePauseBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Paused this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Paused it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const info = { donate: false };
        const result = await axios.patch(`/donation-pet-pause/${id}`, info);
        // console.log(res);
        if (result.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Pause !",
            text: "Your file has been Paused",
            icon: "success",
          });
        }
      }
    });
  };

  const handleUnpauseBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Unpaused this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Unpaused it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const info = { donate: true };
        const result = await axios.patch(`/donation-pet-Unpause/${id}`, info);
        // console.log(res);
        if (result.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Unpause !",
            text: "Your file has been Unpaused",
            icon: "success",
          });
        }
      }
    });
  }


  return (
    <section>
      <h1 className="text-3xl font-bold border-l-4 border-[#ef6f18]">
        All Pets
      </h1>
      <p className="text-[#ef6f18] font-bold border-l-4 border-[#040404]">
        pets
      </p>
      {/* table for shoe data */}
      <div>
        <div className="p-6 overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                    #
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                    Photo
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                    Name
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                    Action
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                    Action
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                    Action
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((table, idx) => {
                return (
                  <tr key={table._id}>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div>
                        <p>{idx + 1}</p>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div>
                        <img
                          src={table.image}
                          alt="John Michael"
                          className="inline-block relative object-cover object-center !rounded-full w-9 h-9"
                        />
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p>{table.name}</p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center">
                      <div onClick={() => handleDeleteBtn(table._id)}>
                        <button className="p-2 border bg-red-500 rounded-lg hover:bg-red-700">
                          <MdOutlineDeleteOutline className="text-2xl text-white" />
                        </button>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div>
                        <NavLink
                          to={`/dashboard/update-donations/${table._id}`}
                          className="flex gap-2 justify-center items-center border bg-[#ef6f18] hover:bg-[#934511] rounded-lg p-1 text-white "
                        >
                          <FaEdit className="text-xl " /> Update
                        </NavLink>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      {table?.donate ? (
                        <div onClick={() => handlePauseBtn(table._id)}>
                          <button className="flex gap-2 justify-center items-center border bg-[#ef6f18] hover:bg-[#934511] rounded-lg p-1 text-white ">
                            <FaRegPauseCircle className="text-xl " />
                            Pause
                          </button>
                        </div>
                      ) : (
                        <button onClick={()=>handleUnpauseBtn(table._id)} className="flex gap-2 justify-center items-center border bg-green-500 hover:bg-green-700 active:bg-green-800 p-1 rounded-md text-white ">
                          <FaRegPauseCircle className="text-xl " />
                          Unpause
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllDonations;
