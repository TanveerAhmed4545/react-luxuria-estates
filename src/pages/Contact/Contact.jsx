import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
      <div className=" my-5 lg:my-9">
        <Helmet>
          <title>
          Luxuria Estates || Contact  
          </title>
        </Helmet>
        
  
      <div className="text-center py-8 border-dashed border border-x-0">
        <h2 className="text-neutral-900 text-2xl lg:text-4xl font-extrabold">
        Contact Us
        </h2>
        <p className="text-neutral-900 pt-6 w-full mx-auto lg:w-9/12">
        Contact Luxuria Estates for personalized assistance in discovering your dream residence. Reach us via phone, email, or visit our office for unparalleled luxury living.{" "}
        </p>
      </div>

      <div className="mt-6 lg:mt-12 flex gap-6 flex-col-reverse lg:flex-row px-6">
        

        <form className="lg:basis-3/5 basis-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <label>
              <span className="text-neutral-900 text-xl font-bold">
                Your Name
              </span>{" "}
              <br />
              <input
                className="mt-4 w-full p-5 rounded-xl border-0 outline-0 bg-[#ECF6FE]"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </label>

            {/* input-2 */}

            <label>
              <span className="text-neutral-900 text-xl font-bold">
                Your Email
              </span>{" "}
              <br />
              <input
                className="mt-4 w-full p-5 rounded-xl border-0 outline-0 bg-[#ECF6FE]"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>

            {/* input-3  */}

            <label>
              <span className="text-neutral-900 text-xl font-bold">
                Subject
              </span>{" "}
              <br />
              <input
                className="mt-4 w-full p-5 rounded-xl border-0 outline-0 bg-[#ECF6FE]"
                type="text"
                placeholder="Enter your subject"
                required
              />
            </label>

            {/* input-4  */}

            <label>
              <span className="text-neutral-900 text-xl font-bold">
                Phone Number
              </span>{" "}
              <br />
              <input
                className="mt-4 w-full p-5 rounded-xl border-0 outline-0 bg-[#ECF6FE]"
                type="number"
                placeholder="Enter your phone number"
                required
              />
            </label>
          </div>

          {/* input 5  */}
          <label>
            <span className="text-neutral-900 text-xl font-bold ">Message</span>{" "}
            <br />
            <textarea className="mt-4 w-full p-5 pb-36 lg:pb-64 rounded-xl border-0 outline-0 bg-[#ECF6FE] text-[#9CA3AF] resize-none">
              Write your message
            </textarea>
          </label>

          <button className="btn text-white text-xl font-bold bg-[#1DB2FF] w-full mt-6">
            Send Message
          </button>
        </form>

        <div className="rounded-2xl border border-neutral-900 border-opacity-10 lg:p-12 p-5 lg:basis-2/5 basis-full">
          <div className="p-6 bg-lime-300 bg-opacity-10 rounded-2xl">
            <FaPhoneAlt className="text-2xl text-[#1DB2FF]"></FaPhoneAlt>
            <p className="pt-6">Phone Number :</p>
            <h3 className="font-bold pt-3">(+62) 123-821-543</h3>
          </div>

          <div className="p-6 bg-amber-300 bg-opacity-10 rounded-2xl my-6">
            <MdEmail className="text-2xl text-[#1DB2FF]"></MdEmail>
            <p className="pt-6">Email :</p>
            <h3 className="font-bold pt-3">book@support.com</h3>
          </div>

          <div className="p-6 bg-blue-400 bg-opacity-10 rounded-2xl">
            <IoLocation className="text-2xl text-[#1DB2FF]"></IoLocation>
            <p className="pt-6">Location :</p>
            <h3 className="font-bold pt-3">1230 Uttara , Dhaka</h3>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Contact;