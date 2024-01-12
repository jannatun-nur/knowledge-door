import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#AD6A34] text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="flex gap-4">
            <li className="hover:text-[#AD6A34] hover:bg-white px-2"><Link to="/">Home</Link></li>
            <li className="hover:text-[#AD6A34] hover:bg-white px-2"><Link to="/about">About Us</Link></li>
            <li className="hover:text-[#AD6A34] hover:bg-white px-2"><Link to="/signin">Sign In</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
