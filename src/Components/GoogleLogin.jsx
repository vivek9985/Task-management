import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { loginwithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const googleLoginHandler = () => {
    console.log("first");
    loginwithGoogle()
      .then((res) => {
        const userInfo = {
          userName: res.user?.displayName,
          email: res.user?.email,
          photo: res.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <button
      onClick={googleLoginHandler}
      className="w-full py-2.5 px-4 text-gray-100 font-medium bg-orange-500 rounded-full"
    >
      Login with Google
    </button>
  );
};

export default GoogleLogin;
