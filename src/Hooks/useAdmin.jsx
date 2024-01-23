import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivet from "./useAxiosPrivet";

const useAdmin = () => {
    const { user ,loader} = useAuth();
    const axios = useAxiosPrivet();

    const { data:isAdmin, isLoading, refetch} = useQuery({
        queryKey: ['isAdmin', axios, user?.email],
        enabled :!loader,
        queryFn: async () => {
            const res = await axios.get(`user-admin/${user?.email}`);
            return res?.data?.admin;
        }
    })
    // console.log(isAdmin.admin);
    
    return [isAdmin, isLoading, refetch]
};

export default useAdmin;