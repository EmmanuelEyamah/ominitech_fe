import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SiteLayout } from "./components/Layouts/Site/Layout";
import { AuthLayout } from "./components/Layouts/Auth/Layout";
import { HomePage, AboutPage, Pricing, Services } from "./pages/Site";
import { Login } from "./pages/Auth/Login/Login";
import { Signup } from "./pages/Auth/Signup/Signup";
import { VerifyEmail } from "./pages/Auth/VerifyEmail/VerifyEmail";
import { ProfileLayout } from "./components/Layouts/Profile/Layout";
import { Dashboard } from "./pages/Profile/Dashboard/Dashboard";
import { OminiHub } from "./pages/Site/Ominihub/Ominihub";
import { Hub } from "./pages/Site/Ominihub/Hub/Hub";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SiteLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/pricing", element: <Pricing /> },
        { path: "/services", element: <Services /> },
        { path: "/ominihub", element: <OminiHub /> },
        { path: "/ominihub/service/1234", element: <Hub /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "/auth/login", element: <Login /> },
        { path: "/auth/signup", element: <Signup /> },
        { path: "/auth/verifyemail", element: <VerifyEmail /> },
      ],
    },
    {
      path: "/profile",
      element: <ProfileLayout />,
      children: [
        { path: "/profile/dashboard", element: <Dashboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
