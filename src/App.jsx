import "./App.css";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
    </>
  );
}

export default App;
