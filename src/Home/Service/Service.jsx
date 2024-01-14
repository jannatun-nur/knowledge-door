import { FaSearch } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
const Service = () => {
  return (
    <div>
      Our services
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <section className="bg-gray-800 ">
          <p className="text-4xl lg:ml-48">
            <MdGroups2 />
          </p>
          <p className="text-center">Find Partner</p>
          <p className="">
            Group study is a collaborative learning approach where individuals
            come together to study and work on academic tasks as a team. This
            method has gained popularity because of its potential benefits in
            enhancing comprehension, knowledge retention, and overall academic
            performance.By online gruop stuy, it will helps you to safe time also
            get new knowledge through your online partner.
          </p>
        </section>
        {/* serach */}
        <section className="bg-gray-800 ">
          <p className="text-4xl lg:ml-48">
            <FaSearch />
          </p>
          <p className="text-center">Search Books</p>
          <p>
            
          </p>
        </section>
        {/* opinion */}
        <section className="bg-gray-800 ">
          <p className="text-4xl lg:ml-48">
            <GiDiscussion />
          </p>
          <p className="text-center">Share opinion</p>
        </section>
      </div>
    </div>
  );
};

export default Service;
