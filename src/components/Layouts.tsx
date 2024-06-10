import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layouts = () => {
  return (
    <div className="layouts">
      <Header />
      <div className="layouts__main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;