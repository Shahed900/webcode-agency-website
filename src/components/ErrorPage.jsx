import { Link } from "react-router";
import ErrorIcon  from "../assets/rocket-icon.png"

const ErrorPage = () => {
  return (
    <div className="bg-white   flex-col space-y-4 flex justify-center items-center text-center min-h-screen">
        
            <img src={ErrorIcon} alt="Icon" />
           
                <h1 className=" text-4xl text-gray-700  font-bold">Page Not Found</h1>
                <p className="text-gray-600 mx-auto w-full md:w-1/2 ">Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis</p>

                <Link to="/" className=" mt-6 shadow-md px-6 p-3 transition text-white bg-green-500 hover:bg-green-600 rounded-lg ">Go to Homepage</Link>
            
        
    </div>
  )
}

export default ErrorPage