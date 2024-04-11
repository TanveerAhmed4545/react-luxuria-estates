import { useParams,useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const estateData = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);

    const details = estateData.find(d => d.id === idInt);
    // console.log(typeof id);
    console.log(details);
    return (
        <div>
            <h2>Details {id}</h2>
        </div>
    );
};

export default EstateDetails;