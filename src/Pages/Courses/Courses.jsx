import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../../components/Course/Course";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className='grid lg:grid-cols-6 grid-cols-1 gap-4'>
      <div className='lg:col-start-1 lg:col-end-2 grid-cols-1'>
        {courses.map((course) => (
          <p>{course.title}</p>
        ))}
      </div>
      <div className='lg:col-start-2 lg:col-end-7 grid-cols-1 bg-red-400'>
        <div className='grid lg:grid-cols-2 w-10/12 mx-auto my-6 gap-10 place-self-center self-center justify-items-center'>
          {courses.map((course) => (
            <Course singleCourse={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
