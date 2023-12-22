import React, { useContext, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/Ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import toast from "react-hot-toast";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";
import GoogleLogin from "../../Components/GoogleLogin";

const Register = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const { createUser, updateProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const userType = form.userType.value;
    const userInfo = {
      name,
      email,
      photo,
      userType,
    };
    console.log(userInfo);

    createUser(email, password, name, photo)
      .then((res) => {
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        toast.success("Registered!");
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        });

        form.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.error(error);
        toast.error(error.message);
      });
  };
  return (
    <section className="w-10/12 mx-auto mt-36 mb-32">
      <h2 className="text-2xl text-center mb-8 uppercase">Register Here</h2>
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Player
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]"
            autoplay
            loop
            src="https://lottie.host/1ca57ad3-22cb-41da-9757-5696d6fb63f1/aE17M89X9k.json"
          ></Player>
        </div>
        <form
          className="p-2 md:p-10 text-gray-800 dark:text-stone-200"
          onSubmit={registerHandler}
        >
          <div className="relative mb-8 group">
            <label>Your Name</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              type="text"
              placeholder="name"
              required
              name="name"
            />
          </div>

          <div className="relative mb-8 group">
            <label>Your Email</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              type="email"
              placeholder="email"
              required
              name="email"
            />
          </div>
          <div className="relative mb-8 group">
            <label>Your Photo URL</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              type="url"
              placeholder="photo URL"
              required
              name="photo"
            />
          </div>
          <div className="relative mb-8 group">
            <label>Password</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={visible ? "text" : "password"}
              placeholder="password"
              required
              name="password"
            />
            <div
              className="absolute right-1 bottom-[9px] cursor-pointer text-2xl text-gray-700"
              onClick={() => setVisible(!visible)}
            >
              {visible ? (
                <AiFillEye></AiFillEye>
              ) : (
                <AiFillEyeInvisible></AiFillEyeInvisible>
              )}
            </div>
          </div>
          <div className="mb-8">
            <select
              id="user-type"
              name="userType"
              required
              placeholder="select"
              className="w-full py-2 border-2 border-gray-400 rounded-lg"
            >
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="corporate">Corporate</option>
              <option value="bankers">Bankers</option>
              <option value="others">Others</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 rounded-full w-full text-center px-5 py-2 text-lg font-medium text-gray-200 mb-4"
          >
            Register
          </button>
          <GoogleLogin></GoogleLogin>
          <p className="text-sm text-center mt-3">
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-600">
              Login here.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
