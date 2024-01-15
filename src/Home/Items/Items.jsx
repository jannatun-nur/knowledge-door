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
            <div>
                {
                    books.map( book=><ItemsCard key={book._id} book={book}></ItemsCard>)
                }
            </div>
        </div>
    );
};

export default Items;