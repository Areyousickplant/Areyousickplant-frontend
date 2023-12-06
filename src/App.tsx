import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Graph from "pages/Graph";
import Header from "components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Graph" element={<Graph />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
