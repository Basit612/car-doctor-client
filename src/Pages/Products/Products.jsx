import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";


const Products = () => {
  const [products,setProducts]= useState([]);

  useEffect(() =>{
 fetch('services.json')
 .then(res => res.json())
 .then(data =>{
  setProducts(data)
 })
  },[])
  return (
    <div className="mr-4">
      <div className="text-center">
        <h2 className="text-2xl mt-3 text-[#ff3811]  font-normal"> Popular Products </h2>
        <h2 className="text-5xl mt-3 text-black font-bold">Browse Our Products</h2>
        <p className="mt-3">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          products.map(product => <ProductsCard key={products._id} product={product}></ProductsCard>)
        }
      </div>
    </div>
  );
};

export default Products;