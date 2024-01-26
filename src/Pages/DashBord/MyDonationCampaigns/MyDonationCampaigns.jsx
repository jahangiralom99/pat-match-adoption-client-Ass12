import { FaDonate, FaEdit, FaRegPauseCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Common/Loader";
import Swal from "sweetalert2";
import { useState } from "react";

const MyDonationCampaigns = () => {
  const { user, darkMode } = useAuth();
  const axios = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);

  // const data = [];
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["all-pets", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/all-donate-pets?email=${user?.email}`);
      return res.data;
    },
  });

  // payment related data
  const { data: payment, isLoading: paymentLoading } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/payment-collection?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (paymentLoading) {
    return <Loader></Loader>;
  }


// handlePauseBtn 
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
        const result = await axios.patch(
          `/donation-pet-pause-user/${id}`,
          info
        );
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

  // handlePauseBtn 
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
        const result = await axios.patch(
          `/donation-pet-Unpause-user/${id}`,
          info
        );
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
  };

  return (
    <section>
      <h1 className="text-3xl font-bold border-l-4 border-[#ef6f18]">
        My Donation Campaign
      </h1>
      <p className="text-[#ef6f18] font-bold border-l-4 border-[#040404]">
        Donate
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
                    Pet Name
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                    Maximum donation amount
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                    donation progress
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70 text-center">
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
                      <div>{table.name}</div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p>{table.maximum_donation}</p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center">
                      <div className="w-full bg-[#ef6f18]">
                        <div
                          className=" p-0.5 text-center text-xs font-medium leading-none text-white"
                          style={{ width: table.amount }}
                        >
                          {table.amount} %
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 flex gap-3">
                      <div>
                        <Link to={`/dashboard/donation-update/${table._id}`}>
                          <button className="p-1 border bg-red-500 rounded-lg hover:bg-red-700">
                            <FaEdit className="text-xl text-white" />
                          </button>
                        </Link>
                      </div>
                      <div>
                        {table?.donate ? (
                          <div onClick={() => handlePauseBtn(table._id)}>
                            <button className="flex gap-2 justify-center items-center border bg-[#ef6f18] hover:bg-[#934511] rounded-lg p-1 text-white ">
                              <FaRegPauseCircle className="text-xl " />
                              Pause
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleUnpauseBtn(table._id)}
                            className="flex gap-2 justify-center items-center border bg-green-500 hover:bg-green-700 active:bg-green-800 p-1 rounded-md text-white "
                          >
                            <FaRegPauseCircle className="text-xl " />
                            Unpause
                          </button>
                        )}
                      </div>
                      <div onClick={setShowModal}>
                        <button className="flex gap-2 justify-center items-center border bg-[#ef6f18] hover:bg-[#934511] rounded-lg p-1 text-white ">
                          <FaDonate className="text-1xl " />
                          Donation History
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex w-auto overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto p-10">
              {/*content*/}
              <div
                className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full ${
                  darkMode && "bg-[#1e293b]"
                } bg-white text-black outline-none focus:outline-none`}
              >
                {/*header*/}
                <div className="flex items-start justify-between p-10 border-b border-solid border-blueGray-200 rounded-t ">
                  <h3 className="text-3xl font-semibold border-l-4 border-[#ef6f18]">
                    Donation History
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    // onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
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
                            Donate user name
                          </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                          <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                            Donation Amount
                          </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                          <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70 text-center">
                            Transaction Id
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {payment.map((table, idx) => {
                        return (
                          <tr key={table._id}>
                            <td className="p-4 border-b border-blue-gray-50">
                              <div>
                                <p>{idx + 1}</p>
                              </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <div>{table.name}</div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <p className="font-bold text-[#ef6f18]">
                                {table.price} $
                              </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50 flex gap-3">
                              <p className="text-green-500 font-bold">
                                {table.transactionId}
                              </p>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-[#ef6f18] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border rounded-lg hover:bg-[#ef6f18] hover:text-white border-red-500"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  );
};

export default MyDonationCampaigns;
