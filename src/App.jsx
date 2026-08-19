import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
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
