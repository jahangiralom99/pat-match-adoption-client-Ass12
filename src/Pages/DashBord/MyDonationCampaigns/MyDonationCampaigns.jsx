import { FaEdit, FaRegPauseCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Common/Loader";

const MyDonationCampaigns = () => {
  const { user } = useAuth();
  const axios = useAxiosPublic();

  // const data = [];
  const { data, isLoading } = useQuery({
    queryKey: ["all-pets", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/all-donate-pets?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(data);

  if (isLoading) {
    return <Loader></Loader>;
  }

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
                  <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                    Adoption Status
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
                      <div>
                        <img
                          src={table.name}
                          alt="John Michael"
                          className="inline-block relative object-cover object-center !rounded-full w-9 h-9"
                        />
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p>{table.name}</p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center">
                      <p>{table.category}</p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p>
                        {!table.adopted ? (
                          <spa className="text-red-500 font-bold">
                            Not Adopted
                          </spa>
                        ) : (
                          <spa className="text-green-500 font-bold">
                            Adopted
                          </spa>
                        )}
                      </p>
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
                        <button className="flex gap-2 justify-center items-center border bg-[#ef6f18] hover:bg-[#934511] rounded-lg p-1 text-white ">
                          <FaRegPauseCircle className="text-xl " />
                          Pause
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
    </section>
  );
};

export default MyDonationCampaigns;
