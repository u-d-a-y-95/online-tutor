import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import Home from "./pages/home";
import { Instructor } from "./pages/Instructor";
import { Blog } from "./pages/Blog";
import { BlogSinglePage } from "./components/common/BlogSinglePage";
import Courses from "./pages/courses";

export const routes = (
  <Routes>
    <Route path="" Component={Layout}>
      <Route path="/" Component={Home} />
      <Route path="/courses" Component={Courses} />
      <Route path="/instructor" Component={Instructor} />
      <Route path="/blog" Component={Blog} />
      <Route path="/single-blog" Component={BlogSinglePage} />
    </Route>
  </Routes>
);
