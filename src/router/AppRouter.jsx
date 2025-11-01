import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Layout from "../layouts/Layout";
import SpecialLayout from "../layouts/SpecialLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Credit from "../pages/credit/Credit";
import Booking from "../pages/booking/Booking";
import EarnRewards from "../pages/earnRewards/EarnRewards";
import HelpDesk from "../pages/helpDesk/HelpDesk";
import History from "../pages/history/History";
// import Voucher from "../pages/voucher/Voucher";
import CreatedVoucher from "../pages/voucher/createdVoucher/CreatedVoucher";
import AllVouchers from "../pages/voucher/AllVouchers/AllVouchers";
import CreditPurchase from "../pages/credit/CreditPurchase";
import ScrollToTop from "../components/ScrollToTop";
import SignInLayout from "../layouts/SignInLayout";
import OtpVerify from "../pages/auth/OtpVerify";
import ResetPassword from "../pages/auth/ResetPassword";
import ForgotPassword from "../pages/auth/ForgotPassword";



const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<SignIn />} /> */}
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* Wrapper layout with right image always visible */}
        <Route path="/" element={<SignInLayout />}>
          <Route index element={<SignIn />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="otp" element={<OtpVerify />} />
          <Route path="reset" element={<ResetPassword />} />
        </Route>

        {/* Normal dashboard layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/credit" element={<Credit />} />
          <Route path="/dashboard/credit/buy" element={<CreditPurchase />} />
          <Route path="/dashboard/earn-rewards" element={<EarnRewards />} />
          <Route path="/dashboard/help-desk" element={<HelpDesk />} />
          <Route
            path="/dashboard/voucher/all-vouchers"
            element={<AllVouchers />}
          />
        </Route>

        {/* Special layout for booking , voucher and history */}
        <Route element={<SpecialLayout />}>
          <Route path="/dashboard/booking" element={<Booking />} />
          <Route path="/dashboard/history" element={<History />} />
          <Route
            path="/dashboard/voucher/created-voucher"
            element={<CreatedVoucher />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
