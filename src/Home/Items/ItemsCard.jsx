

const ItemsCard = ( {book}) => {
    const {name ,image,title ,price } = book;

    return (
        <div>
          <div className="flex justify-center gap-8">
            <section>
            <img className="lg:h-28" src={image} alt="" />
            </section>
            <section>
                <p>{name}</p>
                <p>{title} </p>
                <p>{price} </p>
                <button>hi</button><button>hi</button>
            </section>
          </div>
        </div>
    );
};

export default ItemsCard;