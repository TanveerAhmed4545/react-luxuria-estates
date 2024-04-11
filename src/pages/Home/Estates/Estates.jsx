import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Estates = ({estate}) => {
    // console.log(estate);
    // eslint-disable-next-line react/prop-types
    const {id,segment_name,estate_title,price,status,image,location} = estate;
    return (
        <div>
            <div className="card  p-5 bg-base-100 shadow-xl hover:bg-[#e7f6fd] transition duration-300 ease-in-out">
  <figure><img className="h-auto md:h-44 lg:h-52 w-full rounded-xl" src={image} /></figure>
  <div className="">
    <h2 className="card-title">{estate_title}</h2>
    <p>{location}</p>
    <p>{segment_name}</p>
    <p>{price}</p>
    <p>{status}</p>
    <div className="card-actions ">
      <Link to={`/estateDetails/${id}`}><button className="btn w-full text-white border-none bg-[#1DB2FF]">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Estates;
