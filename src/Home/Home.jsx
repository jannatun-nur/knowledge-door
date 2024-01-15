import Banner from "./Banner/Banner";

import Books from "./Books/Books"
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";
import ItemsCard from "./Items/ItemsCard";
import Service from "./Service/Service";
import Writer from "./Writer/Writer";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Books/>
           <Writer/>
           <ItemsCard/>
         
           <Service/> 
           <Faq/>
           <Contact/>
        </div>
    );
};

export default Home;