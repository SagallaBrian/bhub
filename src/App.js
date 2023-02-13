import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./blocks/header/header";
import Donate from "./components/donate/donate";
import Page404 from "./blocks/notfound";
import Dashboard from "./components/dashboard/dashboard";
import Footer from "./blocks/footer/footer";

function App() {
  return (
    <div className="pt-3">
      <Header title={"Bhub"}></Header>
      <Routes>
        <Route path="donate" element={<Donate />} />
        <Route path="/" element={<Navigate to="/donate" replace={true} />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
