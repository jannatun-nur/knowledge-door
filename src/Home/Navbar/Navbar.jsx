import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../public/Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-[#AD6A34] text-white gap-4 lg:gap-0">
        <div className="flex-1">
          <a className="text-white bg-[#AD6A34]">Knowledge <span className="text-[#AD6A34] bg-white px-1 lg:px-2 rounded-tr-box">
            Door</span></a>
        </div>
        <div className="flex-none">
          <ul className="flex gap-1 lg:gap-4">
            <li className="hover:text-[#AD6A34] hover:bg-white px-2"><Link to="/">Home</Link></li>
            <li className="hover:text-[#AD6A34] hover:bg-white px-2"><Link to="/about">About Us</Link></li>
            {user ? (
              <li className=" px-2 flex">
               
                <button onClick={logout} className="hover:text-[#AD6A34] hover:bg-white px-2">LogOut</button>

              </li>
            ) : (
              <li className="hover:text-[#AD6A34] hover:bg-white px-2"><Link to="/signin">Sign In</Link></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;