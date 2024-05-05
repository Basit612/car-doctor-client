import axios from "axios";


const axiosSecure =  axios.create({
  baseURL: 'https://car-doctor-server-d4esldflf-abdul-basits-projects-2ef8b724.vercel.app/bookings',
  withCredentials: true
});

const useAxios = () => {
 
  return axiosSecure;
};

export default useAxios;