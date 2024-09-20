import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import Home from "./pages/home";
import Courses from "./pages/courses";

export const routes = (
  <Routes>
    <Route path="" Component={Layout}>
      <Route path="/" Component={Home} />
      <Route path="/courses" Component={Courses} />
    </Route>
  </Routes>
);
