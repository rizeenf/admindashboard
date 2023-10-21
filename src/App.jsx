import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
// import Products from "./pages/Products/Products";
// import Profile from "./pages/Profile/Profile";
// import Users from "./pages/Users/Users";
// import Orders from "./pages/Orders/Orders";
// import Home from "./pages/Home/Home";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => delayLazy(import("./pages/Home/Home")));
const Users = lazy(() => delayLazy(import("./pages/Users/Users")));
const User = lazy(() => delayLazy(import("./pages/User/User")));
const Profile = lazy(() => delayLazy(import("./pages/Profile/Profile")));
const Orders = lazy(() => delayLazy(import("./pages/Orders/Orders")));
const Products = lazy(() => delayLazy(import("./pages/Products/Products")));

const delayLazy = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 200);
  }).then(() => promise);
};

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
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
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/users/:id",
          element: <User />,
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
