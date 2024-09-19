import { Blog } from "../Blog.jsx";
import Courses from "../courses/index.jsx";
import { Header } from "./header";
import { Products } from "./products";

const Home = () => {
  return (
    <>
      <Header />
      <Products />
      <Courses />
      {/* <Instructor /> */}
      <Blog />
    </>
  );
};

export default Home;
