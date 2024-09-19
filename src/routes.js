import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Instructor } from "./pages/Instructor";
import { Blog } from "./pages/Blog";
import { BlogSinglePage } from "./components/common/BlogSinglePage";

export const routes = (
  <Routes>
    <Route path="" Component={Layout}>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/courses" Component={Courses} />
      <Route path="/instructor" Component={Instructor} />
      <Route path="/blog" Component={Blog} />
      <Route path="/single-blog" Component={BlogSinglePage} />
    </Route>
  </Routes>
);
