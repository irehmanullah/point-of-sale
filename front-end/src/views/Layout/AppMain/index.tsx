import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Login from "src/views/Auth/Login";
import ForgotPassword from "src/views/Auth/ForgotPassword";
import PageNotFound from "src/views/Components/PageNotFound";
import Layout from "../Layout";
import Dashboard from "src/views/Dashboard";
import Products from "src/views/Client/Inventory/Products/Products";

const AppMain = () => {
  const appRoutes = [
    { path: "/dashboard", name: "Dashboard", Component: <Dashboard /> },
    { path: "/inventory/products", name: "Products", Component: <Products /> },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          {/* @ts-ignore */}
          {appRoutes.map(({ path, Component, name }: any) => (
            <Route path={path} key={uuid()} element={Component} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppMain;
