import { createBrowserRouter, Link, Navigate, RouterProvider } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Graph from "./pages/Graph";
import Home from "./pages/Home";
import DefaultLayout from "./ui/components/DefaultLayout";

const router = createBrowserRouter([
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
