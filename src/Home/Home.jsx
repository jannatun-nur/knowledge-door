import Banner from "./Banner/Banner";
import Books from "./Books/Books";
import Service from "./Service/Service";
import Writer from "./Writer/Writer";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Books/>
           <Writer/>
           <Service/> 
        </div>
    );
};

export default Home;