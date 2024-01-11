import "./App.css";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const analytics = Analytics({
  })
  return (
    <>
      <Header />
      <ToastContainer />
      <Analytics />
    </>
  );
}

export default App;
