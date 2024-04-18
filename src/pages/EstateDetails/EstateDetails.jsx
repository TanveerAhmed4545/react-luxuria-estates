import { Helmet } from "react-helmet-async";
import { useParams,useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const estateData = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);

    const details = estateData.find(d => d.id === idInt);
    // console.log(typeof id);
    // console.log(details);
    const {segment_name,estate_title,price,status,image,location,description,area_sq_ft,facilities} = details;
    return (
        <div className="card    hover:shadow-xl hover:shadow-[#acd0e0]   my-5 lg:my-10 mx-5">
            <Helmet>
                <title>
                      Luxuria Estates || Estate Details
                </title>
            </Helmet>
  <div className="  ">
  <figure><img className="rounded-2xl lg:h-screen lg:w-full" src={image}/></figure>
  
  </div>
  <div className="p-5 lg:p-10 space-y-5 ">
    <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-[#1DB2FF]">{estate_title}</h2>
    <p className="text-xl"><span className="font-semibold ">Segment : </span> <span className="text-blue-gray-600">{segment_name}</span></p>
    <p className="text-xl"><span className="font-semibold ">Price :</span> <span className="text-blue-gray-600">{price}</span></p>
    <p className="text-xl"><span className="font-semibold ">Status :</span> <span className="text-blue-gray-600">{status}</span></p>
    <p className="text-xl"><span className="font-semibold ">Location :</span> <span className="text-blue-gray-600">{location}</span></p>
    <p className="text-xl"><span className="font-semibold ">Description : </span>  <span className="text-blue-gray-600">{description}</span></p>
    <p className="text-xl"><span className="font-semibold ">Area : </span> <span className="text-blue-gray-600">{area_sq_ft}</span> <span className="text-blue-gray-600">sq ft</span></p>
    <div className="flex lg:items-center gap-3 text-xl">
        <p className="font-semibold">Facilities:</p>
    <div>{
        facilities.map((facilite,idx) => <button className="mr-3 mb-3 lg:mr-5  border-none btn rounded-full text-white bg-[#257197]" key={idx}>{facilite}</button>)
        }</div>
    </div>
    
  </div>
</div>
    );
};

export default EstateDetails;