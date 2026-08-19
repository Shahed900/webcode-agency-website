import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Swal from "sweetalert2";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')

  const auth = getAuth(app);

  const navigate = useNavigate()

//  Google Login

 const handleGoogle = () => {
   const provider = new GoogleAuthProvider();
   signInWithPopup(auth, provider)
   navigate("/")
 }

  const {signUser} = useAuth()




  const handLogin = async(e) => {
    try {
      e.preventDefault()
      await signUser(email,password)
      Swal.fire({
  title: "Login success full! ",
  icon: "success",
  draggable: true
});
      navigate("/")
    } catch  {
      setError("Invalid email or password")
    }
  }
  return (
    <div className="bg-gray-100 p-4 flex justify-center items-center min-h-screen">
      <div className="max-w-md space-y-3 p-10 w-full    bg-white rounded-lg shadow-md flex-col ">
        <h1 className="text-gray-800 text-2xl font-bold  text-center">
          Login
        </h1>

        {
          error && <p className="text-red-500 text-center">{error}</p>
        }

        <form onSubmit={handLogin} className="space-y-4">
          <div className="">
            <label className="block text-gray-800 mb-2 font-bold text-sm ">
              Email
            </label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 text-black placeholder-gray-500 border border-gray-200 py-2 focus:outline-none  focus:ring-2 focus:ring-blue-400  rounded-lg "
            />
          </div>
          <div>
            <label className="block text-gray-800 mb-2 font-bold text-sm ">
              Password
            </label>
            <input
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 text-black placeholder-gray-500 focus:ring-blue-400  border border-gray-200 py-2 focus:outline-none  focus:ring-2  rounded-lg "
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg cursor-pointer">
            Login
          </button>
        </form>

        <div className="mt-6 space-y-6">
          <p className="text-gray-700 text-lg text-center">Or Login with</p>

          <div className="flex flex-col gap-4  sm:flex-row justify-center items-center spa">
            <button onClick={handleGoogle} className="bg-red-500 space-x-2 flex justify-center items-center w-full  hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="bg-gray-500 space-x-2 flex justify-center items-center w-full  hover:bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-md">
              <FaGithub />
              <span>GitHub</span>
            </button>
            <button className="bg-blue-500 space-x-2 flex justify-center items-center w-full  hover:bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md">
              <FaFacebook />
              <span>Facebook</span>
            </button>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6 ">Do not have an account? Please  <Link  className="text-blue-500 hover:underline" to="/register">register</Link></p>
      </div>
    </div>
  )
}

export default Login