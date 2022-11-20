import { createBrowserRouter, Link, Navigate, RouterProvider } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Graph from "./pages/Graph";
import Home from "./pages/Home";
import DefaultLayout from "./ui/components/DefaultLayout";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <DefaultLayout>
      <Home />
    </DefaultLayout>,
  },
  {
    path: "/user-search",
    element: <DefaultLayout>
      <Graph />
    </DefaultLayout>,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
