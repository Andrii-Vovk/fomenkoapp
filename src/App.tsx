import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./ui/components/DefaultLayout";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import "dayjs/locale/uk";
import dayjs from "dayjs";
import ProtectedRoute from "./ui/components/ProtectedRoute";

dayjs.locale("uk");

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-search",
    element: (
      <ProtectedRoute>
        <DefaultLayout>
          <UserList />
        </DefaultLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
