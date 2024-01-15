import { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";


const Items = () => {
const [books , setBooks] = useState([])

useEffect( ()=>{
    fetch('items.json')
    .then(res => res.json())
    .then(data =>setBooks(data))
},[])
    return (
        <div>
            <div className="bg-blue-500 h-96">
                {
                    books.map( book=><ItemsCard key={book.name} book={book}></ItemsCard>)
                }
            </div>
        </div>
    );
};

export default Items;