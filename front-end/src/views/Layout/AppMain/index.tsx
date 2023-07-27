import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "src/views/Auth/Login";
import ForgotPassword from "src/views/Auth/ForgotPassword";
import PageNotFound from "src/views/Components/PageNotFound";

const AppMain = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Suspense>
  );
};

export default AppMain;
