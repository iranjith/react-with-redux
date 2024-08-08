import "./App.css";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import PageNotFound from "./components/PageNotFound";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
