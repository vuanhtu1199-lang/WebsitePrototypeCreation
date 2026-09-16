import { createBrowserRouter } from "react-router";
import SplashScreen from "./pages/auth/SplashScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import OTPScreen from "./pages/auth/OTPScreen";
import RegisterScreen from "./pages/auth/RegisterScreen";
import RegisterSuccessScreen from "./pages/auth/RegisterSuccessScreen";
import KYCUploadScreen from "./pages/kyc/KYCUploadScreen";
import KYCConfirmScreen from "./pages/kyc/KYCConfirmScreen";
import KYCStatusScreen from "./pages/kyc/KYCStatusScreen";
import { AppLayout } from "./components/layout/AppLayout";
import HomeScreen from "./pages/home/HomeScreen";
import ShopScreen from "./pages/shop/ShopScreen";
import NetworkScreen from "./pages/network/NetworkScreen";
import ProfileScreen from "./pages/profile/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/otp",
    element: <OTPScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/register-success",
    element: <RegisterSuccessScreen />,
  },
  {
    path: "/kyc",
    element: <KYCUploadScreen />,
  },
  {
    path: "/kyc-confirm",
    element: <KYCConfirmScreen />,
  },
  {
    path: "/kyc-status",
    element: <KYCStatusScreen />,
  },
  {
    path: "/app",
    Component: AppLayout,
    children: [
      { index: true, Component: HomeScreen },
      { path: "home", Component: HomeScreen },
      { path: "shop", Component: ShopScreen },
      { path: "network", Component: NetworkScreen },
      { path: "profile", Component: ProfileScreen },
    ],
  },
]);
