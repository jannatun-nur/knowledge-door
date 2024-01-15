import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Navbar/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Root;