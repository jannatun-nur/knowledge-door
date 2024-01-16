import { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";


const Items = () => {
const [books , setBooks] = useState([])
const [cart, setCart] = useState([]);

useEffect( ()=>{
    fetch('items.json')
    .then(res => res.json())
    .then(data =>setBooks(data))
},[])

const handleAddToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };
    return (
        <div>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-2">
                {
                    books.map( book=><ItemsCard key={book.name} book={book}>onAddToCart={() => handleAddToCart(book)}</ItemsCard>)
                }
            </div>
        </div>
    );
};

export default Items;