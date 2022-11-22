import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore, { SignInUser } from "../../../store";

interface Props {
  children: React.ReactNode;
  role: UserRole | UserRole[];
  fallback: string;
}

const getHasAccess = (role: UserRole | UserRole[], user: SignInUser) => {
  return Array.isArray(role)
    ? role.includes(user.role as UserRole)
    : role === user.role;
};

const ProtectedRoute: React.FC<Props> = ({ children, role, fallback }) => {
  const store = useUserStore();
  const navigate = useNavigate();

  const hasAccess = useMemo(
    () => getHasAccess(role, store.user),
    [role, store.user]
  );

  useEffect(() => {
    if (store.user.userId == null) {
      navigate("/login");
    } else if (!hasAccess) {
      navigate(fallback);
    }
  }, [store.user.userId, hasAccess]);

  return <>{children}</>;
};

export default ProtectedRoute;
