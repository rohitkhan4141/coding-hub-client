import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const singleCourseDetails = useLoaderData();
  console.log(singleCourseDetails);
  return <div>This is course Details page</div>;
};

export default CourseDetails;
