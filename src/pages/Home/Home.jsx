import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Estates from "./Estates/Estates";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const estates = useLoaderData();
    // console.log(estates);
    return (
        <div>
            <Helmet>
                <title>Luxuria Estates || Home</title>
            </Helmet>
         <Banner></Banner>
        <div className="my-5 lg:my-10">
        <div className="text-center py-8 ">
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

     
{/* meet our agent section */}

        <div className="text-center py-5 px-5">
        <h2 className="text-neutral-900 text-2xl lg:text-4xl font-extrabold">
        Meet Our
Agents
        </h2>
        <p className="text-neutral-900 pt-6 w-full mx-auto lg:w-9/12">
        Get in touch with our real estate experts.{" "}
        </p>
      </div>


      <div className="px-5 my-5 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 flex justify-center flex-col items-center shadow-lg rounded-lg">
                <img className="max-w-32 max-h-32 rounded-xl" src={'https://i.ibb.co/2KFVj5C/agent-male-1-1-300x300.jpg'} />
                <h3 className="font-semibold mt-2 hover:text-[#1CB2FF]">Nathan James</h3>
                <p className="text-[#1CB2FF]  mt-2">1-234-456-7893</p>
                <p className="font-medium  mt-2">nathan@james.com</p>
                </div>
            <div className="p-5 flex justify-center flex-col items-center shadow-lg rounded-lg">
                <img className="max-w-32 max-h-32 rounded-xl" src={'https://i.ibb.co/2shZGfH/agent-female-7-1-300x300.jpg'} />
                <h3 className="font-semibold mt-2 hover:text-[#1CB2FF]">Melissa William</h3>
                <p className="text-[#1CB2FF]  mt-2">1-234-456-7892</p>
                <p className="font-medium  mt-2">melissa@william.com</p>
                </div>
            <div className="p-5 flex justify-center flex-col items-center shadow-lg rounded-lg">
                <img className="max-w-32 max-h-32 rounded-xl" src={'https://i.ibb.co/JKV6cYZ/agent-female-6.jpg'} />
                <h3 className="font-semibold mt-2 hover:text-[#1CB2FF]">Alice Brian</h3>
                <p className="text-[#1CB2FF]  mt-2">1-234-456-7891</p>
                <p className="font-medium  mt-2">alice@brain.com</p>
                </div>
            <div className="p-5 flex justify-center flex-col items-center shadow-lg rounded-lg">
                <img className="max-w-32 max-h-32 rounded-xl" src={'https://i.ibb.co/4wk0Nqn/agent-male-2.jpg'} />
                <h3 className="font-semibold mt-2 hover:text-[#1CB2FF]">John David</h3>
                <p className="text-[#1CB2FF]  mt-2">1-234-456-7890</p>
                <p className="font-medium  mt-2">john@david.com</p>
                </div>
            
        </div>


      {/* our partner section  */}

        <div className="text-center py-5 px-5">
        <h2 className="text-neutral-900 text-2xl lg:text-4xl font-extrabold">
        Our
Partners
        </h2>
        <p className="text-neutral-900 pt-6 w-full mx-auto lg:w-9/12">
        We honoured to have these amazing partners.{" "}
        </p>
      </div>

        <div className="px-5 my-5 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 flex justify-center items-center"><img className="w-auto" src={'https://i.ibb.co/MVhYt7g/AA-Builders.jpg'} /></div>
            <div className="p-5 flex justify-center items-center"><img className="w-auto" src={'https://i.ibb.co/126f7Hc/Adobe-Homes.jpg'} /></div>
            <div className="p-5 flex justify-center items-center"><img className="w-auto" src={'https://i.ibb.co/g9M5qBg/Ironwood-Apartments.jpg'} /></div>
            <div className="p-5 flex justify-center items-center"><img className="w-auto" src={'https://i.ibb.co/8XV4Dhb/Rosewood-Homes.jpg'} /></div>
            
        </div>

        </div>
    );
};

export default Home;