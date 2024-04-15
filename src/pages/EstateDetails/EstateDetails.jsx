import { Helmet } from "react-helmet-async";
import { useParams,useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const estateData = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);

    const details = estateData.find(d => d.id === idInt);
    // console.log(typeof id);
    console.log(details);
    const {segment_name,estate_title,price,status,image,location,description,area_sq_ft,facilities} = details;
    return (
        <div className="card lg:card-side   hover:shadow-xl hover:shadow-[#acd0e0]   my-5 lg:my-10 mx-5">
            <Helmet>
                <title>
                      Luxuria Estates || Estate Details
                </title>
            </Helmet>
  <div className=" lg:w-3/4 lg:h-full">
  <figure><img className="rounded-2xl lg:h-screen lg:w-full" src={image}/></figure>
  
  </div>
  <div className="p-5">
    <h2 className="font-bold text-2xl text-[#1DB2FF]">{estate_title}</h2>
    <p className="font-semibold "><span>Segment : </span> {segment_name}</p>
    <p>{price}</p>
    <p>{status}</p>
    <p>{location}</p>
    <p>{description}</p>
    <p>{area_sq_ft}</p>
    <p>{
        facilities.map((facilite,idx) => <span className="mr-2" key={idx}>{facilite}</span>)
        }</p>
    
  </div>
</div>
    );
};

export default EstateDetails;