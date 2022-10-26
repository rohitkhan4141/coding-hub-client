import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const courseData = useLoaderData();
  const { title } = courseData;
  return <div>This is a checkout page for {title}</div>;
};

export default CheckOut;
