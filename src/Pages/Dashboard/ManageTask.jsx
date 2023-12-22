import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useDrop } from "react-dnd";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const ManageTask = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });



  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-200 rounded-lg p-3">
          <p className="text-purple-500 text-lg font-semibold capitalize mb-4">
            To do list
          </p>
          <div className="grid grid-cols-1 gap-4">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-[#903ddd50] border p-2 rounded-lg"
              >
                <div className="relative">
                  <div>
                    <h2>{task?.title}</h2>
                    <p className="text-gray-500 text-[15px]">
                      {task?.description}
                    </p>
                  </div>
                  <Link to={`/task/${task?._id}`}>
                    <button className="w-8 h-8 text-xl flex items-center justify-center absolute top-1 right-1 bg-[#ffffffb7] px-2 py-1 rounded-full">
                      <CiEdit></CiEdit>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="bg-gray-200 rounded-lg p-3">
          <p className="text-orange-500 text-lg font-semibold capitalize mb-4">
            ongoing list
          </p>
          <div className="grid grid-cols-1 gap-4">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-[#dd6a3d50] border p-2 rounded-lg"
              >
                <h2>{task?.title}</h2>
                <p className="text-gray-500 text-[15px]">{task?.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg p-3">
          <p className="text-green-500 text-lg font-semibold capitalize mb-4">
            completed list
          </p>
          <div className="grid grid-cols-1 gap-4">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-[#4add3d50] border p-2 rounded-lg"
              >
                <h2>{task?.title}</h2>
                <p className="text-gray-500 text-[15px]">{task?.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ManageTask;
