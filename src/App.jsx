import HomePage from "./Components/HomePage";
// import Booking from "./Components/Booking";
import ManageBooking from "./Components/ManageBooking";
import Explore from "./Components/Explore/Explore";
import Profile from "./Components/Profile";
import Stats from "./Components/Stats";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/booking", element: <ManageBooking /> },
    { path: "/profile", element: <Profile /> },
    { path: "/stats", element: <Stats /> },
    {
      path: "/explore",
      element: <Explore />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
