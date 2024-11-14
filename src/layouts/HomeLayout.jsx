import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftAside from "../components/layout-component/LeftAside";
import RightAside from "../components/layout-component/RightAside";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>

      <nav className="w-11/12 mx-auto py-4">
        <Navbar />
      </nav>

      <main className="w-11/12 mx-auto pt-5 md:grid grid-cols-12 gap-6">
        <aside className="left_aside col-span-3 ">
          <LeftAside />
        </aside>

        <section className="main_section col-span-6 ">
          <Outlet/>
        </section>

        <aside className="right_aside col-span-3 ">
          <RightAside/>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
