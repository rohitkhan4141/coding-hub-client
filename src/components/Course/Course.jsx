import React from "react";

const Course = ({ singleCourse }) => {
  console.log(singleCourse);
  const { title, image_url } = singleCourse;
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={image_url} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
