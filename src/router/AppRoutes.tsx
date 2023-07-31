import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../app/admin/page/dashboard/AdminDashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Protected route */}
        <Route element={<ProtectedRoute redirectTo="/login" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
        {/* Add other public or unprotected routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
