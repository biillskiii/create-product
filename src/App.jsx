import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateProduct />} path="/create-product"></Route>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Details/>} path="/details/:productId"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
