import { useEffect } from "react";
import ChatPage from "../src/components/Message/ChatPage";
import { gapi } from "gapi-script";
import {
  useLocation,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";
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
  {
    path: "/chatPage/:topicId",
    loader: chatPageLoader,
    element: (
      <RequireAuth>
        <ChatPage />
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
  if (localStorage.getItem(AIRLINGO_ACCESS_TOKEN)) {
    return fetch(`${API_URL}/api/topics`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(AIRLINGO_ACCESS_TOKEN)}`,
      },
    });
  }
}

function chatPageLoader({ params }) {
  if (localStorage.getItem(AIRLINGO_ACCESS_TOKEN)) {
    return fetch(`${API_URL}/api/topics/${params.topicId}/messages`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(AIRLINGO_ACCESS_TOKEN)}`,
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
