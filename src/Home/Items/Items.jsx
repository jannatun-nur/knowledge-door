import { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";


const Items = () => {
  const [books, setBooks] = useState([]);
 

  useEffect(() => {
    fetch('items.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);



  return (
    <div>
      <p className=" w-32 lg:w-2/12 mx-auto my-4 l lg:my-6 text-sm lg:text-2xl bg-[#AD6A34] text-white text-center rounded-tr-xl shadow-lg">Books For You</p>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-2">
        {books.map((book) => (
          <ItemsCard
            key={book.name}
            book={book}
           
          />
        ))}
      </div>
     
    </div>
  );
};

export default Items;