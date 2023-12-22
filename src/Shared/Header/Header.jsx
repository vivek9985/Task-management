import { NavLink, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const userName = user?.displayName?.split(" ")[0];
  const logOutHandler = () => {
    logout()
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const nav = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-gray-200 bg-[#1c1c1c] px-4 pt-1 pb-[5px] rounded-full"
              : "px-4 pt-1 pb-[5px]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-gray-200 bg-[#1c1c1c] px-4 pt-1 pb-[5px] rounded-full"
              : "px-4 pt-1 pb-[5px]"
          }
        >
          About
        </NavLink>
      </li>
      {user?.email ? (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 bg-[#1c1c1c] px-4 pt-1 pb-[5px] rounded-full"
                : "px-4 pt-1 pb-[5px]"
            }
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        <></>
      )}
      <li>
        {user?.email ? (
          <button
            onClick={logOutHandler}
            className="px-4 pt-1 pb-[5px] rounded-full"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 bg-[#1c1c1c] px-4 pt-1 pb-[5px] rounded-full"
                : "px-4 pt-1 pb-[5px]"
            }
          >
            Login
          </NavLink>
        )}
      </li>
      <li className="relative group cursor-pointer">
        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
          {user?.email ? (
            <img
              className="w-full h-full bg-lime-400"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <FaUserCircle className="w-full h-full"></FaUserCircle>
          )}
        </div>
        {user?.email ? (
          <div className="absolute -bottom-0.5 left-24 h-0 w-0 bg-gray-300 rounded-full overflow-hidden group-hover:duration-500 group-hover:left-12 group-hover:overflow-visible group-hover:py-1.5 group-hover:px-4 group-hover:w-auto group-hover:h-auto group-hover:opacity-100">
            <div className="relative">
              <h2>{userName}</h2>
              <div className="w-4 h-4 duration-500 rotate-45 bg-gray-300 absolute -left-0 group-hover:-left-5 top-1 bottom-0 -z-30"></div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </li>
    </>
  );
  const mobileMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-gray-200 bg-[#1c1c1c] px-4 pt-1 pb-[5px] rounded-full"
              : "px-4 pt-1 pb-[5px]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-gray-200 bg-[#1c1c1c] px-4 pt-1 pb-[5px] rounded-full"
              : "px-4 pt-1 pb-[5px]"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-gray-200 bg-[#1c1c1c] px-4 pt-1 pb-[5px] rounded-full"
              : "px-4 pt-1 pb-[5px]"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        {user?.email ? (
          <button
            onClick={logOutHandler}
            className="px-4 pt-1 pb-[5px] rounded-full"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 bg-[#1c1c1c] px-4 pt-1 pb-[5px] rounded-full"
                : "px-4 pt-1 pb-[5px]"
            }
          >
            Login
          </NavLink>
        )}
      </li>
      <li className="relative group cursor-pointer">
        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
          {user?.email ? (
            <img className="w-full h-full" src={user?.photoURL} alt="" />
          ) : (
            <FaUserCircle className="w-full h-full"></FaUserCircle>
          )}
        </div>
        {user?.email ? (
          <div className="absolute -bottom-0.5 left-24 h-0 w-0 bg-gray-300 rounded-full overflow-hidden group-hover:duration-500 group-hover:left-12 group-hover:overflow-visible group-hover:py-1.5 group-hover:px-4 group-hover:w-auto group-hover:h-auto group-hover:opacity-100">
            <div className="relative">
              <h2>{user?.displayName}</h2>
              <div className="w-4 h-4 duration-500 rotate-45 bg-gray-300 absolute -left-0 group-hover:-left-5 top-1 bottom-0 -z-30"></div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </li>
    </>
  );

  return (
    <section className="py-4 fixed left-0 right-0 top-2 flex items-center justify-center z-50">
      <ul className="hidden md:flex bg-[#dddddd94] backdrop-blur-sm items-center justify-center gap-1 py-2 px-3 rounded-full font-medium border">
        {nav}
      </ul>
      <div className="bg-red-300 w-10 h-10 flex md:hidden items-center justify-center rounded-full fixed right-8 top-6 z-50">
        {/* <IoCloseSharp className="text-xl"></IoCloseSharp> */}
        <CgMenuRight className="text-xl"></CgMenuRight>
      </div>
      <ul className="hidden">{mobileMenu}</ul>
    </section>
  );
};

export default Header;
