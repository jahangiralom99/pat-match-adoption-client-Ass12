import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Common/Loader";
import { RiRefund2Line } from "react-icons/ri";
import Swal from "sweetalert2";

const MyDonations = () => {
  const { user } = useAuth();
  const axios = useAxiosPublic();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["update", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/all-donate-pets?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleRefundBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Refund Donate!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Refund it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`/donation-pet-delete-user/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been Refund Donation!",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <section>
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
                  Pet Image
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                  Pet Name
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                  Donated Amount
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
                        className="size-12 border rounded-lg"
                        src={table.image}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p>{table.name}</p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-bold">{table.amount} $</p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <button
                      onClick={() => handleRefundBtn(table._id)}
                      className="flex items-center text-white justify-center bg-red-500 p-1 rounded-lg cursor-pointer hover:bg-red-700"
                    >
                      <RiRefund2Line className="text-xl" /> Refund Donation
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyDonations;
