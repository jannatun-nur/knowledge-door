import gif from "../../../../public/assets/image/about.gif";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-2 text-gray-800">
        <section className="text-center lg:mt-32">
          <p className="text-[#AD6A34] lg:text-2xl ">knowledge Door</p>
          <p>About Us</p>
          <p className="">
            Online libraries have become integral in the digital age,
            revolutionizing the way people access and interact with information.
            They offer a wealth of resources, including e-books, academic
            papers, journals, and multimedia content, all accessible from the
            comfort of one's home. Knoeledge Door update this facility for bookworms.    
          </p>
          <button className="px-3 bg-[#AD6A34] text-white my-2">Learn More</button>
        </section>
        <section className="">
          <img className="mt-32 lg:mt-0" src={gif} alt="" />
        </section>
      </div>
    </div>
  );
};

export default About;
