import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home.page";
import { SignupPage } from "../pages/signup.page";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};
