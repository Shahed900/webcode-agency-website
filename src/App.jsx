import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoading(false);
    };

    if (document.readyState === "complete") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPageLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
