import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <main className="">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

export default Layout;
