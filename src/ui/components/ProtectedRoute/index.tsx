import { useNavigate } from "react-router-dom";
import useUserStore from "../../../store";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const store = useUserStore();
  const navigate = useNavigate();

  if (store.user.userId == null) {
    navigate("/login");
  }
  return <>{children}</>;
};

export default ProtectedRoute;
