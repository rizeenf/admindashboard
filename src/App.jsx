import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Users from "./pages/Users/Users";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
