import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="bg-orange-200 text-center">This is home page</h1>
      <Outlet />
    </div>
  );
}

export default App;
