import { useQuery } from "@tanstack/react-query";
import useAxiosPrivet from "../../../../Hooks/useAxiosPrivet";
import Loader from "../../../../Components/Common/Loader";
import { MdOutlineAddBox,} from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const AllPets = () => {
  const axios = useAxiosPrivet();

  const { data, isLoading } = useQuery({
    queryKey: ["all-pets"],
    queryFn: async () => {
      const res = await axios.get("/all-pets");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  console.log(data);

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
                    Status
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
                      <div>
                        <NavLink
                          to={`/dashboard/update/${table._id}`}
                          className="flex gap-2 justify-center items-center border bg-[#ef6f18] hover:bg-[#934511] rounded-lg p-2 text-white "
                        >
                          <FaEdit className="text-xl " /> Update
                        </NavLink>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div>
                        <Link
                          to="/dashboard/Add-pets"
                          className="flex gap-2 justify-center items-center border bg-[#ef6f18] hover:bg-[#934511] rounded-lg p-2 text-white "
                        >
                          <MdOutlineAddBox className="text-xl " /> Add pet
                        </Link>
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

export default AllPets;
