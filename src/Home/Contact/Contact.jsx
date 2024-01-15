import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";


const Contact = () => {
    return (
        <div>
            <p className=" w-32 lg:w-2/12 mx-auto my-4 l lg:my-6 text-sm lg:text-2xl bg-[#AD6A34] text-white text-center rounded-tr-xl shadow-lg">Catch Us</p>
            <div className="text-[#AD6A34] border border-[#AD6A34] rounded-lg lg:w-8/12 mx-auto my-2">
                <p className="flex gap-2 justify-center">
                <p className="text- xl lg:text-2xl mt-1"><FaPhone /></p>
                <p  className="text- xl lg:text-2xl">+6965260</p>
                </p>
                {/*  */}
                <p className="flex gap-2 justify-center">
                <p className="text- xl lg:text-2xl mt-1"><MdEmail /></p>
                <p  className="text- xl lg:text-2xl">knowledgedoor@gmail.com</p>
                </p>
                {/*  */}
                <p className="flex gap-2 justify-center">
                <p className="text- xl lg:text-2xl mt-1"><AiOutlineGlobal/></p>
                <p  className="text- xl lg:text-2xl">www.knowledgedoor.com</p>
                </p>

            </div>
            
        </div>
    );
};

export default Contact;