import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

const CheckOut = () => {
  const courseData = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  const { title, image_url, total_students } = courseData;
  return (
    <div className='flex justify-center items-center mt-20 px-3 '>
      <div className='card w-96 bg-base-100 shadow-xl image-full '>
        <figure>
          <img src={image_url} alt='Shoes' className='rounded-lg' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>Total Students enrolled : {total_students}</p>
          <p>Buyer Name : {user?.displayName}</p>
          <p>Email : {user?.email}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
