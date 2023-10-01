import { createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Users from "./pages/Users/Users";

function App() {
  const Layout = () => {
    return (
      <>
        <Home />
        <Products />
        <Profile />
        <Users />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
    },
  ]);

  return (
    <>
      <div className="app"></div>
    </>
  );
}

export default App;
