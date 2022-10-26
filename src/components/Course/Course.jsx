import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = ({ singleCourse }) => {
  const { title, image_url, details, _id } = singleCourse;
  return (
    <div className='card w-80 bg-base-100 shadow-xl'>
      <figure className='card-image'>
        <img src={image_url ? image_url : ""} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <>
          {details.length > 50 ? (
            <p>
              {details.slice(0, 50) + "...  "}{" "}
              <Link className='text-blue-600' to={`/courses/${_id}`}>
                Read more
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </>
        <div className='card-actions justify-end'>
          <Link className='btn btn-primary' to={`/courses/${_id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
