import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services,setServices]= useState([]);

  useEffect(() =>{
 fetch('services.json')
 .then(res => res.json())
 .then(data =>{
  setServices(data)
 })
  },[])

  return (
    <div className="mr-4">
      <div className="text-center">
        <h2 className="text-2xl mt-3 text-[#ff3811]  font-normal"> Service </h2>
        <h2 className="text-5xl mt-3 text-black font-bold">Our Service Area</h2>
        <p className="mt-3">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
