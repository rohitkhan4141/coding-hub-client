import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext";

const Register = () => {
  const { createUser, googleAuth, githubAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const hendleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    createUser(email, password)
      .then((userdata) => {
        const user = userdata.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  const googleLogIn = () => {
    googleAuth()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  const githubLogIn = () => {
    githubAuth()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold mb-4'>Please Register now!</h1>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={hendleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
              />
              <label className='label'>
                <Link to='/login' className='label-text-alt link link-hover'>
                  Have an accout ? Login!
                </Link>
              </label>
            </div>
            <h6 className='pt-2 text-center text-blue-500 cursor-pointer'>
              Register With
            </h6>
            <div className='w-50 mx-auto py-2 flex gap-4'>
              <FaGoogle
                className='text-center cursor-pointer hover:text-blue-500'
                onClick={googleLogIn}
              />
              <FaGithub
                className='text-center cursor-pointer hover:text-blue-500'
                onClick={githubLogIn}
              />
              <FaFacebookF className='text-center cursor-pointer hover:text-blue-500' />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
