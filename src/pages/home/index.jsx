import Courses from "../courses/index.jsx";
import { Header } from "./header";
import { Products } from "./products";

const Home = () => {
  return (
    <>
      <Header />
      <Products />
      <Courses />
    </>
  );
};

export default Home;
