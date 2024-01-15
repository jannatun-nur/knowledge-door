import { useEffect, useState } from "react";


const Items = () => {
const [books , setBooks] = useState([])

useEffect( ()=>{
    fetch('items.json')
    .then(res => res.json())
    .then(data =>console.log(data))
},[])
    return (
        <div>
            
        </div>
    );
};

export default Items;