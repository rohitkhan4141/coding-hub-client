import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../../components/Course/Course";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className='grid lg:grid-cols-6 grid-cols-1 gap-4'>
      <div className='lg:col-start-1 lg:col-end-2 grid-cols-1'>
        {courses.map((course) => (
          <p>{course.title}</p>
        ))}
      </div>
      <div className='lg:col-start-2 lg:col-end-7 grid-cols-1 bg-slate-200'>
        <div className='courses-container grid lg:grid-cols-3 md:grid-cols-2 gap-y-10  mx-auto my-10  place-self-center self-center justify-items-center px-3'>
          {courses.map((course) => (
            <Course singleCourse={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
