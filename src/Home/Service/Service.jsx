import { FaSearch } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
const Service = () => {
    return (
        <div>
            Our services
           <div>
            <section className="bg-gray-800 w-4/12">
            <p className="text-6xl lg:ml-48"><MdGroups2 /></p> 
                <p className="text-center">Find Partner</p>
            
            </section>
        {/* serach */}
        <section>
        <p><FaSearch /></p>
        <p>Search Question</p>
        </section>
            {/* opinion */}
            <section>
                <p><GiDiscussion/></p>
                <p>Share opinion</p>
            </section>
            </div> 
        </div>
    );
};

export default Service;