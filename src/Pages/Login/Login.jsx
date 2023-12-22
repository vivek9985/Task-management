import { Player } from "@lottiefiles/react-lottie-player";
import { useContext, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/Ai";
import { AuthContext } from "./../../AuthProviders/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import GoogleLogin from "../../Components/GoogleLogin";

const Login = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (error?.message) {
          toast.error("Please provide valid info!");
        }
      });
  };
  return (
    <section className="w-10/12 mx-auto mt-36 mb-32">
      <h2 className="text-2xl text-center mb-8 uppercase">Login Here</h2>
      <div className="grid md:grid-cols-2">
        <div className="">
          <Player
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            autoplay
            loop
            src="https://lottie.host/f619f47d-0907-45b3-a1d3-6d78b797cf5b/8YDQXfFSg1.json"
          ></Player>
        </div>
        <form
          className="p-2 md:p-10 text-gray-800 dark:text-stone-200 mt-8"
          onSubmit={loginHandler}
        >
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
          <button
            type="submit"
            className="bg-green-400 rounded-full w-full text-center px-5 py-2 text-lg font-medium text-gray-200 mb-4"
          >
            Login
          </button>
          <GoogleLogin></GoogleLogin>
          <p className="text-sm text-center mt-3">
            Don't have an account ?{" "}
            <Link to="/register" className="text-blue-600">
              Register here.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
