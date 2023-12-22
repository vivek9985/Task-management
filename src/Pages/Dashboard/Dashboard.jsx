import { useRef } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ManageTask from "./ManageTask";

const Dashboard = () => {
  const axiosPublic = useAxiosPublic();
  const taskAddHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;
    const task = {
      title,
      description,
      deadline,
      priority,
    };
    axiosPublic.post("/tasks", task).then((res) => {
      console.log(res.data);
    });
    console.log(task);
  };
  const manageTaskSection = useRef();
  const addTaskSection = useRef();

  const manageTask = () => {
    const manageSection = manageTaskSection.current;
    const addSection = addTaskSection.current;
    addSection.style.display = "none";
    manageSection.style.display = "block";
  };
  const addTask = () => {
    const manageSection = manageTaskSection.current;
    const addSection = addTaskSection.current;
    addSection.style.display = "block";
    manageSection.style.display = "none";
  };
  return (
    <section className="w-10/12 mx-auto mt-28 overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="bg-[#7bc4e652] px-4 py-1.5 rounded-full mb-20">
          <ul className="flex items-center gap-5">
            <button onClick={addTask}>Add task</button>
            <button onClick={manageTask}>Manage task</button>
          </ul>
        </div>
      </div>
      <div ref={addTaskSection} className="block mb-20">
        <form
          onSubmit={taskAddHandler}
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
            value="Add Task"
            className="w-full py-3 mt-7 bg-purple-400 hover:bg-green-400 rounded-lg md:col-span-2 active:scale-95 duration-200"
          />
        </form>
      </div>
      <div className="hidden w-full mb-20" ref={manageTaskSection}>
        <ManageTask></ManageTask>
      </div>
    </section>
  );
};

export default Dashboard;
