import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
const AppROutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppROutes;
