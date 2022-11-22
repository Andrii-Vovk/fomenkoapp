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
import Main from "./pages/Main";

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
        <Main />
      </ProtectedRoute>
    )
  }, {
    path: "/home",
    element: (
      <ProtectedRoute role="user" fallback="/user-search">
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-search",
    element: (
      <ProtectedRoute role={["organization", "admin"]} fallback='/'>
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
