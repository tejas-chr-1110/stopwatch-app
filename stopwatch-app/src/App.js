// import "./App.css";
import ContactPage from "./component/contact";
import LandingPage from "./component/landingpage/indiex";
import LandingPageNew from "./component/landingPageNew";
import ProjectsPage from "./component/projectpages";
// import Stopwatch from "./component/stopwatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/noto-sans"; // Defaults to weight 400
import "@fontsource/noto-sans/700.css";
import { useEffect, useState } from "react";
function App() {
  let mock = ["apple", "apple2", "banana", "cheery"];
  const [list, setList] = useState([]);
  const [showResult, setshowResult] = useState(false);

  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setinputValue(value);
    const filterlist = mock.filter((item) => {
      return item.toLowerCase().includes(value.toLowerCase());
    });
    setList(filterlist);
    if (filterlist.length > 0) {
      setshowResult(true);
    } else {
      setshowResult(false);
      setList([]);
    }
  };
  return (
    <div className="tejas_div">
      {/* <Stopwatch /> */}
      {/* <LandingPageNew /> */}
      {/* Lets Begin ... */}
      {/* <LandingPage /> */}
      <input
        className="tejas_div_input"
        value={inputValue}
        onChange={(e) => {
          handleChange(e);
        }}
        onBlur={() => {
          setshowResult(true);
        }}
      />
      {list.length > 0 &&
        list?.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      {list.length == 0 && !showResult && <div>No Result is found</div>}
    </div>
    //   <Router>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/projects" element={<ProjectsPage />} />
    //     <Route path="/contact" element={<ContactPage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
