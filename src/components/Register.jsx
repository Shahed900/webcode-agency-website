import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const { signUpWithEmail , googleLogin} = useAuth();


  const handleGoogleLogin =  async () => {
    try {
       await googleLogin()
       navigate("/")
    } catch (error) {
      console.error(error)
    }
  }


  const onSubmit = async (data) => {
    try {
      await signUpWithEmail(data.email, data.password);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Register me!",
      }).then((result) => {
        if (result.isConfirmed)
          Swal.fire({
            title: "Registration successful!",
            text: "Provide your email and password to login.",
            icon: "success",
          });
      });

      navigate("/login")
    } catch (error) {
      console.error("Registration Failed", error.message);
    }
  };

  // google Login

  
  return (
    <div className="bg-gray-100 p-4 flex justify-center items-center min-h-screen">
      <div className="max-w-md space-y-3 p-10 w-full    bg-white rounded-lg shadow-md flex-col ">
        <h1 className="text-gray-800 text-2xl font-bold  text-center">
          Please Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="">
            <label className="block text-gray-800 mb-2 font-bold text-sm ">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className=" text-black w-full px-4 placeholder-gray-500 border border-gray-200 py-2 focus:outline-none  focus:ring-2 focus:ring-blue-400  rounded-lg "
            />
            {errors.email && (
              <p className="text-red-500 italic mt-2">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-800 mb-2 font-bold text-sm ">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="text-black w-full px-4 placeholder-gray-500 focus:ring-blue-400  border border-gray-200 py-2 focus:outline-none  focus:ring-2  rounded-lg "
            />
            {errors.password && (
              <p className="text-red-500 italic mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg cursor-pointer">
            Sign Up
          </button>
        </form>

        <div className="mt-6 space-y-6">
          <p className="text-gray-700 text-lg text-center">Or sign-up with</p>

          <div className="flex flex-col gap-4  sm:flex-row justify-center items-center spa">
            <button onClick={handleGoogleLogin} className="bg-red-500 space-x-2 flex justify-center items-center w-full  hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md">
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
        <p className="text-center text-sm text-gray-500 mt-6 ">
          Hove an account ? Please{" "}
          <Link className="text-blue-500 hover:underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
