import { AuthContext } from "#/contexts/authContext";
import { Button } from "codac-ui";
import { useContext } from "react";
import LoginModal from "./login-modal";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return <>{!user ? <LoginModal /> : <Button onClick={() => logout()}>log out</Button>}</>;
};

export default Auth;