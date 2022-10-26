import React, { createRef } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const ref = createRef();
  const singleCourseDetails = useLoaderData();
  const { title, image_url, details, _id, author, rating } =
    singleCourseDetails;
  const options = {
    orientation: "landscape",
  };

  return (
    <div className='w-10/12 mx-auto '>
      <div className='hero max-h-20 mt-10 mb-20'>
        <div className='hero-overlay bg-opacity-60 rounded-lg'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div>
            <h1 className='mb-5 text-2xl font-bold'>
              Download Information About : {title}
            </h1>
            <Pdf targetRef={ref} filename='code-example.pdf' options={options}>
              {({ toPdf }) => (
                <button className='btn btn-primary' onClick={toPdf}>
                  Generate Pdf
                </button>
              )}
            </Pdf>
          </div>
        </div>
      </div>
      <div ref={ref}>
        <div className='flex flex-col gap-10 items-center lg:flex-row lg:justify-evenly lg:shadow-md shadow-stone-300 py-10 rounded-md md:bg-slate-100'>
          <div className='max-w-sm'>
            <img className='rounded-md' src={image_url} alt='' />
          </div>
          <div className='max-w-xl'>
            <h2 className='text-3xl pb-5'>{title}</h2>
            <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center '>
              <div className='flex items-center gap-4'>
                <div>
                  <img className='w-16 rounded-full' src={author.img} alt='' />
                </div>
                <div>
                  <h5>{author.name}</h5>
                  <p>{author.published_date}</p>
                </div>
              </div>
              <div>
                <p>Price</p>
                <span className='text-3xl'>$10.99</span>
              </div>
            </div>
            <div className='mt-5'>
              <p>{details}</p>
            </div>
            <div className='flex justify-between items-center pt-7'>
              <span className='flex items-center gap-1'>
                <span className='text-xl'>Ratings: {rating.number}</span>
                <FaStar />
              </span>
              <div>
                <Link
                  to={`/checkout/${_id}`}
                  className='btn btn-outline btn-success'
                >
                  Get premium access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
