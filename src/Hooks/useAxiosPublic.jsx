import axios from "axios";

 
const instance = axios.create({
     baseURL : 'https://pat-match-adoption-server.vercel.app/api/v1'
 })

const useAxiosPublic = () => {
    return instance;
};

export default useAxiosPublic;