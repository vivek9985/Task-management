import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const UpdateTask = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useLoaderData([]);
  const { id } = useParams();
  console.log(data, id);

  const updatTaskHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;
    const updateTask = {
      title,
      description,
      deadline,
      priority,
    };
    axiosPublic.put(`/task/${data?._id}`, updateTask).then((res) => {
      toast.success("Updated task!");
    });
  };
  return (
    <section className="mt-36">
      <h2 className="text-center text-3xl mb-12">Edit Task</h2>
      <div className="w-10/12 mx-auto mb-20">
        <form
          onSubmit={updatTaskHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <label>Title</label>
            <input
              className="w-full py-4 px-3 border focus:outline-none rounded-lg mt-3"
              type="text"
              required
              name="title"
              placeholder="task title . . ."
            />
          </div>
          <div>
            <label>Description</label>
            <input
              className="w-full py-4 px-3 border focus:outline-none rounded-lg mt-3"
              type="text"
              required
              name="description"
              placeholder="task description . . ."
            />
          </div>
          <div>
            <label>Deadline</label>
            <input
              className="w-full py-4 px-3 border focus:outline-none rounded-lg mt-3"
              type="date"
              required
              name="deadline"
              placeholder="task description . . ."
            />
          </div>
          <div>
            <label>Priority</label>
            <select
              id="task-type"
              name="priority"
              required
              placeholder="select"
              className="w-full py-4 px-3 border rounded-lg mt-3"
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
          <input
            type="submit"
            value="Update Task"
            className="w-full py-3 mt-7 bg-purple-400 hover:bg-green-400 rounded-lg md:col-span-2 active:scale-95 duration-200"
          />
        </form>
      </div>
    </section>
  );
};

export default UpdateTask;
