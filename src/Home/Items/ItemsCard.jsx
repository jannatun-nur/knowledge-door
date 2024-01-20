import { useContext } from "react";
import { AuthContext } from "../../../public/Provider/AuthProvider";
import Swal from "sweetalert2";

const ItemsCard = ({ book}) => {
  const {user} =useContext(AuthContext)
  const handleBuy =(event)=>{
    event.preventDefault()

    {
      user?.(
        Swal.fire({
          
          text: "Your order has been taken",
          icon: "success"
        })

      )
    
    }
    
  }
  const { name, image, title, price, button, button2 } = book;

  return (
    <div className="w-7/12 border border-[#AD6A34] py-4 rounded-lg shadow-lg">
      <div className="flex justify-center gap-8">
        <section>
          <img className="lg:h-32" src={image} alt="" />
        </section>
        <section className="text-gray-800">
          <p className="text-sm lg:text-xl">{name}</p>
          <p className="font-semibold">{title}</p>
          <p>{price}</p>
       
          <button
           onClick={handleBuy}
            className="text-[#AD6A34] rounded-lg px-4"
          >
            {button2}
          </button>
          {/* Removed <MyCart mycart={mycart}/> */}
        </section>
      </div>
    </div>
  );
};

export default ItemsCard;
