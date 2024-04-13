import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
const Estates = ({estate}) => {
    // console.log(estate);
    // eslint-disable-next-line react/prop-types
    const {id,area_sq_ft,segment_name,estate_title,price,status,image,location} = estate;
    return (
        <div>
            <div className="card  p-5 bg-base-100 border-[#e7f6fd] border-2 hover:border-none hover:shadow-xl hover:shadow-[#e7f6fd] transition duration-300 ease-in-out">
  <div className="relative">
  <figure><img className="h-auto md:h-44 lg:h-52 w-full rounded-xl" src={image} /></figure>
  <button className="absolute top-3 right-3  px-3 py-2 text-white rounded-xl bg-[#1DB2FF]">{status}</button>
  </div>
  <div className="mt-3">
    <h2 className="card-title hover:text-[#2EB8FF]">{estate_title}</h2>
    <p className="flex items-center my-3"><span className="text-[#1DB2FF] mr-2"><IoLocation></IoLocation></span> {location}</p>
    <div className="flex items-center justify-between">
    <p className="flex items-center gap-2">{area_sq_ft}<span>sq ft</span></p>
    <p>{price}</p>
    </div>
    <p className="my-3 font-semibold hover:text-[#2EB8FF]">{segment_name}</p>
    
    <div className="card-actions ">
      <Link to={`/estateDetails/${id}`}><button className="btn w-full text-white border-none bg-[#1DB2FF]">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Estates;
