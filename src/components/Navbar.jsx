import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = ( ) => {
    logout()
  }
  return (
    <div className="bg-white">
      <div className="navbar bg-white max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-[#697077] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content text-[#697077] bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/servicing">Services</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <details>
                  <summary>Categories</summary>
                  <ul className="p-2  text-[#697077]  border-l-0">
                    <li>
                      <a>Digital marketing</a>
                    </li>
                    <li>
                      <a>Video Editor</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold flex items-center">
            <img src="/logo.png" alt="" />
            <span className="text-[#697077] ml-2 hidden sm:block">Webcode</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#697077]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/servicing">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 bg-white text-[#697077] w-40 z-1">
                  <li>
                    <a>Digital marketing</a>
                  </li>
                  <li>
                    <a>Video Editor</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {currentUser ? (
            <>
              <Link to="/dashboard" className="btn btn-outline outline-primaryBG text-primaryBG hover:text-white  btn-primary hover:bg-primaryBG  px-8  hidden sm:flex  ">
                Dashboard
              </Link>
              <button onClick= {handleLogout} className="btn btn-outline   bg-primaryBG px-8 ">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login"  className="btn btn-outline outline-primaryBG text-primaryBG hover:text-white  btn-primary hover:bg-primaryBG  px-8  hidden sm:flex  ">
                Log In
              </Link>
              <Link className="btn btn-outline   bg-primaryBG px-8 ">
                Start free train
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
