

const ItemsCard = ( {book}) => {
    const {name ,image,title ,price,button ,button2} = book;

    return (
        <div className=" w-7/12  border border-[#AD6A34] py-4 rounded-lg shadow-lg">
          <div className="flex justify-center gap-8">
            <section className=""> 
            <img className="lg:h-32" src={image} alt="" />
            </section>
            <section className="text-gray-800">
                <p className="text-sm lg:text-xl">{name}</p>
                <p className="font-semibold">{title} </p>
                <p>{price} </p>
                <button className="text-white bg-[#AD6A34] rounded-lg px-4">{button}</button>
                <button  className="text-[#AD6A34] rounded-lg px-4">{button2}</button>
            </section>
          </div>
        </div>
    );
};

export default ItemsCard;