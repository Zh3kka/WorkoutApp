import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Routes from "../Routes";

const AppProviders = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Routes />
    </AuthContext.Provider>
  );
};

export default AppProviders;
