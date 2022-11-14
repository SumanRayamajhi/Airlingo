import { useEffect } from "react";
import { gapi } from "gapi-script";
import {
  useLocation,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import { AIRLINGO_ACCESS_TOKEN, API_URL } from "./constants/contants";
import TryAgain from "./components/TryAgain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userProfile",
    loader,
    element: (
      <RequireAuth>
        <UserProfile />
      </RequireAuth>
    ),
    errorElement: <TryAgain />,
  },
]);

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return <RouterProvider router={router} />;
}

function loader() {
  // let test = Date.now() % 2 === 0 ? "test" : "";
  if (localStorage.getItem(AIRLINGO_ACCESS_TOKEN)) {
    return fetch(API_URL, {
      headers: {
        Authorization: localStorage.getItem(AIRLINGO_ACCESS_TOKEN),
      },
    });
  }
}

function RequireAuth({ children }) {
  let location = useLocation();

  if (!localStorage.getItem(AIRLINGO_ACCESS_TOKEN)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default App;
