import React from "react";
import Header from "./Components/Header";
import HomePages from "./pages/HomePages";
import Adduser from "./pages/Adduser";
import Alluser from "./pages/Alluser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleUser from "./pages/SingleUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/add" element={<Adduser />} />
          <Route path="/all" element={<Alluser />} />
          <Route path="/update/:_id" element={<Adduser />} />
          <Route path="/:_id" element={<SingleUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
