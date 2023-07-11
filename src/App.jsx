import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useNavigation } from "react-router-dom";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

function App() {
  const navigation = useNavigation();
  return (
    <div className="relative">
      <Navbar />
      <div>
        {navigation.state === "loading" ? (
          <ArrowPathIcon
            className={`animate-spin h-36 w-36 mr-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          ></ArrowPathIcon>
        ) : (
          ""
        )}
      </div>
      {/* <h1 className="bg-orange-200 text-center">This is home page</h1> */}
      <Outlet />
    </div>
  );
}

export default App;
