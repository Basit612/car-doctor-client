

const Customer = () => {
  return (
    <div className="mt-9 mb-10">
      <div className="text-center">
        <h2 className="text-2xl mt-3 text-[#ff3811]  font-normal">
          {" "}
          Testimonial{" "}
        </h2>
        <h2 className="text-5xl mt-3 text-black font-bold">
          What Customer Says
        </h2>
        <p className="mt-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2  gap-6 mt-9 mb-10">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className=" ml-5 mb-5 h-10 w-10 justify-center"
              src="/Ellipse 2 (1).png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mt-5">Awlad Hossain</h2>
            <p>Businessman.</p>

            <div className="card-actions justify-start">
              <p className="mt-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
              <div>
                <img src="/Group 46.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className=" ml-5 mb-5 h-10 w-10 justify-center"
              src="/Ellipse 2 (2).png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mt-5">Awlad Hossain</h2>
            <p>Businessman.</p>

            <div className="card-actions justify-start">
              <p className="mt-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
              <div>
                <img src="/Group 46.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
