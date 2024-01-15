import gif from "../../../../public/assets/image/about.gif";

const About = () => {
  return (
    <div>
      <div className="flex justify-between text-gray-800">
        <section>
          <p className="">knowledge Door</p>
          <p>About Us</p>
          <p>
            Online libraries have become integral in the digital age,
            revolutionizing the way people access and interact with information.
            They offer a wealth of resources, including e-books, academic
            papers, journals, and multimedia content, all accessible from the
            comfort of one's home. Knoeledge Door update this facility for bookworms.    
          </p>
          <button className="px-3 bg-[#AD6A34] text-white">Learn More</button>
        </section>
        <section className="w-1/2">
          <img src={gif} alt="" />
        </section>
      </div>
    </div>
  );
};

export default About;
