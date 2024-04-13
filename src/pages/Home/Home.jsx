import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Estates from "./Estates/Estates";


const Home = () => {
    const estates = useLoaderData();
    // console.log(estates);
    return (
        <div>
         <Banner></Banner>
        <div className="my-5 lg:my-10">
        <div className="text-center py-8 border-dashed border border-x-0">
        <h2 className="text-neutral-900 text-2xl lg:text-4xl font-extrabold">
        Discover Latest Properties
        </h2>
        <p className="text-neutral-900 pt-6 w-full mx-auto lg:w-9/12">
        Newest Properties Around You{" "}
        </p>
      </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-6">
            {
                estates.map(estate => <Estates key={estate.id} estate={estate}></Estates>)
            }
            </div>   
         

        </div>
        </div>
    );
};

export default Home;