import { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";
import MyCart from "./MyCart";

const Items = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('items.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const handleAddToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  return (
    <div>
      <p className=" w-32 lg:w-2/12 mx-auto my-4 l lg:my-6 text-sm lg:text-2xl bg-[#AD6A34] text-white text-center rounded-tr-xl shadow-lg">Books For You</p>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-2">
        {books.map((book) => (
          <ItemsCard
            key={book.name}
            book={book}
            onAddToCart={handleAddToCart} // Pass the handler to the child component
          />
        ))}
      </div>
      <MyCart mycart={cart} /> {/* Pass the cart data to MyCart component */}
    </div>
  );
};

export default Items;