import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Estates from "./Estates/Estates";


const Home = () => {
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div>
         <Banner></Banner>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                estates.map(estate => <Estates key={estate.id} estate={estate}></Estates>)
            }
            </div>   
         

        </div>
    );
};

export default Home;