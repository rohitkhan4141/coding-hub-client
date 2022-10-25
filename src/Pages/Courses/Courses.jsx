import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../../components/Course/Course";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className='grid lg:grid-cols-6 grid-cols-1 gap-4'>
      <div className='lg:col-start-1 lg:col-end-2 grid-cols-1 pt-5'>
        <div className='grid grid-cols-2 lg:flex lg:flex-col lg:gap-8 text-center'>
          {courses.map((course) => (
            <Link
              className='px-2 text-base font-medium border-2 lg:border-0 my-2 lg:border-b-4 border-indigo-200 mx-2 md:ml-3 py-2 hover:text-indigo-500 rounded-md'
              key={course._id}
              to={`/courses/${course._id}`}
            >
              {course.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='lg:col-start-2 lg:col-end-7 grid-cols-1 bg-slate-200'>
        <div className='courses-container grid lg:grid-cols-3 md:grid-cols-2 gap-y-10  mx-auto my-10  place-self-center self-center justify-items-center px-3'>
          {courses.map((course) => (
            <Course singleCourse={course} key={course._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
