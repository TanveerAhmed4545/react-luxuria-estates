import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex  flex-col my-5">
            
        <div className="w-full  ">
            <img className="rounded-2xl mx-auto" src={'https://i.ibb.co/3fg24ND/404-sorry.jpg'}  />
        </div>

        <div className="mx-auto">
            <Link to='/'> <button className="btn bg-[#C7EBE9]">Go Back to Home</button></Link>
        </div>
    </div>
    );
};

export default ErrorPage;