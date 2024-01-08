import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-management-server-ecru-seven.vercel.app/",
  // baseURL: "http://localhost:4000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
