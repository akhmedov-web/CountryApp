import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { URL } from "./api/api";
import SearchAppBar from "./components/SearchAppBar";
import Home from "./pages/Home";
import Country from "./pages/Country";
import axios from "axios";
import PullPage from "./components/PullPage";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(URL)
      .then((base) => setData(base.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <BrowserRouter>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home data={data} />} />

          <Route path="/home" element={<Home data={data} />}></Route>
            <Route path="/home/:name" element={<PullPage />} />
        </Routes>
        <div className="footer card text-center p-4 text-light">
          All Countries 2022
        </div>
      </BrowserRouter>  
    </div>
  );
};

export default App;
