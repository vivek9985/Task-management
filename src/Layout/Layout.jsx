import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Layout = () => {
  return (
    <main className="">
      <Header></Header>
      <Outlet></Outlet>
    </main>
  );
};

export default Layout;
