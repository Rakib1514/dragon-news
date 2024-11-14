import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/12">

      </div>

      <div className="nav space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/career"}>Career</Link>
      </div>

      <div className="login">
        <div className="flex gap-2 items-center">
          <div>
            <img src="https://i.ibb.co.com/vwQbtJJ/user.png" alt="" />
          </div>
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
