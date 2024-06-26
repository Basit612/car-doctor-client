import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SingUp = () => {
  const {createUser}= useContext(AuthContext);
  const location = useLocation();
  const navigate =useNavigate();

  const handleSingUp = event =>{
    event.preventDefault();
    const form= event.target;
    // const name= form.name.value;
    const email= form.email.value;
    const password= form.password.value;
    // console.log(name,email,password);
    
    createUser(email,password)
    .then (result =>{
      const user = result.user;
      console.log(user);
      navigate(location?.state ? location?.state : '/')
    })
    .catch(error => console.log(error));
  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className=" w-1/2 mr-12">
       <img src={img} alt="" />
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSingUp} className="card-body">
        <h1 className="text-4xl font-bold text-center">SingUp now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name='name'
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
              placeholder="email"
              name='email'
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name='password'
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="Submit" value="SingUp" />
          </div>
        </form>
        <p className='my-4 text-center'>Already have an account<Link className='text-[#ff3811] font-bold ' to='/login'>Login</Link></p>
      </div>
    </div>
  </div>
  );
};

export default SingUp;