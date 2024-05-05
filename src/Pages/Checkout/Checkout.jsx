import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, img, price } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    // console.log('hello');

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      customerName: name,
      email,
      img,
      date,
      service:title,
      service_id: _id,
      price: price,
    };
    // console.log(order);

    fetch('https://car-doctor-server-d4esldflf-abdul-basits-projects-2ef8b724.vercel.app/bookings', {
      method: 'POST',
      headers: {
       'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data =>{
      // console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "service book successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  };

  return (
    <div>
      <h1 className="text-center text-4xl mb-5">Book Service: {title}</h1>

      {/* <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{title}</h2>
            <p className="text-xl text-[#ff3811]">Price: ${price}</p>
            <div className="card-actions"></div>
          </div>
        </div>
      </div> */}

      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={price}
              className="input input-bordered text-[#ff3811]"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-block bg-[#ff3811] text-white"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
