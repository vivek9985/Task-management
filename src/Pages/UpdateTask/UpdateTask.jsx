import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateTask = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <section>
      <h2>Update task</h2>
    </section>
  );
};

export default UpdateTask;
