import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import Pricing from "./pages/home/Pricing.jsx";
import Services from "./pages/home/Services.jsx";
import Blogs from "./pages/blogs/blogs.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* Main layout */}
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/servicing" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* error */}
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* dashboard */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
    ,
  </AuthProvider>,
);
