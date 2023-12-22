import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="home">
      <div className="py-32 md:py-48 lg:py-56 xl:py-56 bg-[#6971e28a]">
        <div className="w-10/12 mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mt-8 uppercase monoton">
            Task <span className="ml-1 text-red-500">Management</span>
            <br />
            system
          </h2>
          <p className="mt-3 ml-2 text-lg font-medium">
            Make your tasks easy here.
          </p>
          {user?.email ? (
            <Link to="/dashboard">
              <button className="bg-gray-900 text-gray-200 px-6 py-2 text-lg font-medium rounded-lg mt-7">
                Let's Explore
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-gray-900 text-gray-200 px-6 py-2 text-lg font-medium rounded-lg mt-7">
                Let's Explore
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
