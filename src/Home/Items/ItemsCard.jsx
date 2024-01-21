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
          title: "Are you sure?",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Buy"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Confirm",
              text: "Your order has been taken.",
              icon: "success"
            });
          }
        })

      )
    
    }
    
  }
  const { name, image, title, price, button, button2 } = book;

  return (
    <div className="w-full lg:w-7/12 border border-[#AD6A34] py-4 rounded-lg shadow-lg">
      <div className="lg:flex lg:justify-center grid-cols-2 gap-3 lg:gap-8">
        <section>
          <img className="lg:h-32 w-full h-28 lg:w-0" src={image} alt="" />
        </section>
        <section className="text-gray-800">
          <p className="text-sm lg:text-xl">{name}</p>
          <p className="font-semibold text-sm md:text-xl">{title}</p>
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
