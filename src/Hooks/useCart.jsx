import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useCart = () => {
  const axios = useAxiosPublic();
  const { user } = useAuth();

  const { data: cartData = [], refetch } = useQuery({
    queryKey: ["cart", axios, user?.email],
    queryFn: async () => {
      const res = await axios.get(`/all-cart?email=${user?.email}`);
      return res?.data;
    },
  });

  return [cartData, refetch];
};

export default useCart;
