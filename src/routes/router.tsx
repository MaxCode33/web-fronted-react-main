import { createBrowserRouter } from "react-router-dom";
import Register from "./UserInterface/Register.tsx";
import Login from "./UserInterface/Login.tsx";
import Cards from "./Cards/Cards.tsx";
import Error from "./Error.tsx";
import Card from "./Cards/Card.tsx";
import Playground from "./Playground.tsx";
import Practice from "./Practice.tsx";
import Root from "../layouts/Root.tsx";
import ProtectedRoute from "../components/ProtectedRoute.tsx";
import Profile from "./UserInterface/Profile.tsx";
import CreateCard from "./Cards/CreateCard.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Login /> },
      { path: "/home", element: <Cards /> },
      { path: "/register", element: <Register /> },
      { path: "/cards", element: <Cards /> },
      { path: "/cards/:id", element: <Card /> },
      { path: "/Create", element: <CreateCard /> },

      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      { path: "/practice", element: <Practice /> },
    ],
  },
]);
