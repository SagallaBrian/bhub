import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./blocks/header";
import Donate from "./pages/donate/donate";
import Page404 from "./blocks/notfound";

function App() {
  return (
    <div className=" container mx-auto">
      <Header title={"Bhub"}></Header>
      <Routes>
        <Route path="donate" element={<Donate />} />
        <Route path="/" element={<Navigate to="/donate" replace={true} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
