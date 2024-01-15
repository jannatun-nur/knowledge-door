import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";


const Contact = () => {
    return (
        <div>
            <div className="bg-blue-500 w-8/12 mx-auto">
                <p className="flex gap-2 justify-center">
                <p className="text-2xl"><FaPhone /></p>
                <p  className="text-2xl">+6965260</p>
                </p>
                {/*  */}
                <p className="flex gap-2 justify-center">
                <p className="text-2xl"><MdEmail /></p>
                <p  className="text-2xl">knowledgedoor@gmail.com</p>
                </p>
                {/*  */}
                <p className="flex gap-2 justify-center">
                <p className="text-2xl"><AiOutlineGlobal/></p>
                <p  className="text-2xl">www.knowledgedoor.com</p>
                </p>

            </div>
            
        </div>
    );
};

export default Contact;