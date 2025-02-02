import { Route, Routes, useLocation } from "react-router-dom";
import {AuthenticationLayout} from 'src/layouts'
import SignInPage from "src/pages/signin";

const Component = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route element={<AuthenticationLayout pathname={location?.pathname} />}>
        <Route path={"/"} element={<SignInPage />} />
      </Route>
    </Routes>
  );
};

export default Component;
