import { FaSearch } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
const Service = () => {
  return (
    <div>
    <p className=' w-32 lg:w-2/12 mx-auto my-4 lg:my-6 text-sm lg:text-2xl bg-[#AD6A34] text-white text-center rounded-tr-xl shadow-lg'> Our Services</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
        <section className="bg-white border border-[#AD6A34] rounded-lg ">
          <p className="text-4xl lg:ml-48">
            <MdGroups2 />
          </p>
          <p className="text-center">Find Partner</p>
          <p className="">
            Group study is a collaborative learning approach where individuals
            come together to study and work on academic tasks as a team. This
            method has gained popularity because of its potential benefits in
            enhancing comprehension, knowledge retention, and overall academic
            performance.By online gruop stuy, it will helps you to safe time
            also get new knowledge through your online partner.
          </p>
        </section>
        {/* serach */}
        <section className="bg-white border border-[#AD6A34] rounded-lg ">
          <p className="text-4xl lg:ml-48">
            <FaSearch />
          </p>
          <p className="text-center">Search Books</p>
          <p>
            Searching for a book is an integral part of the reading and learning
            process. Whether you're looking for a specific title, researching a
            topic, or exploring new interests, the act of searching for a book
            involves a series of thoughtful steps and considerations. Knowledge
            Door is providing a new service for our bookworm. It is helps once
            to find his/her favorite books easily.
          </p>
        </section>
        {/* opinion */}
        <section className="bg-white border border-[#AD6A34] rounded-lg">
          <p className="text-4xl lg:ml-48">
            <GiDiscussion />
          </p>
          <p className="text-center">Share opinion</p>
          <p>
           Sharing opinions is a fundamental aspect of human communication
            and interaction. It involves expressing one's thoughts,
            perspectives, and beliefs on various topics. By shareing your opinion,
            we can get to know how you're feelings about our services, what we have to add
            and update. Put your opinion here and let us know your experiences and 
            opinions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Service;
