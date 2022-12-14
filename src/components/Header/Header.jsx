import React, { useContext } from "react";
import { BsFillPersonFill } from "react-icons/Bs";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Contexts/AuthContext";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='navbar bg-base-100 justify-between border-b-gray-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <span className='label-text text-base mr-1'>Theme </span>
                  <input type='checkbox' className='toggle toggle-primary' />
                </label>
              </div>
            </li>
            {user ? (
              <li>
                <div>
                  <div
                    className='tooltip'
                    data-tip={
                      user?.displayName
                        ? user?.displayName
                        : "Havent Share Name"
                    }
                  >
                    {user?.photoURL ? (
                      <img
                        className='w-10 h-10 rounded-full'
                        src={user?.photoURL ? user.photoURL : ""}
                        alt=''
                      />
                    ) : (
                      <BsFillPersonFill />
                    )}
                  </div>

                  <button
                    onClick={handleLogout}
                    className='btn btn-outline btn-success'
                    checked
                  >
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              <>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to='/register'>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className='flex'>
          <img className='w-14' src={logo} />
          <a className='btn btn-ghost normal-case text-xl'>Coding Hub</a>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blogs'>Blog</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li>
            <Link to='/courses'>Courses</Link>
          </li>
          <li>
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <span className='label-text text-base mr-1'>Theme </span>
                <input type='checkbox' className='toggle toggle-primary mt-2' />
              </label>
            </div>
          </li>
          {user ? (
            <li>
              <div>
                <div
                  className='tooltip'
                  data-tip={
                    user?.displayName ? user?.displayName : "Havent Share Name"
                  }
                >
                  {user?.photoURL ? (
                    <img
                      className='w-10 h-10 rounded-full'
                      src={user?.photoURL ? user.photoURL : ""}
                      alt=''
                    />
                  ) : (
                    <BsFillPersonFill />
                  )}
                </div>

                {/* <button
                  onClick={handleLogout}
                  className='btn btn-outline btn-success'
                  checked
                >
                  Logout
                </button> */}
              </div>
            </li>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
