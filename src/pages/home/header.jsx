import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import heroImg from "../../components/assets/images/hero.png";
import heroImgback from "../../components/assets/images/hero-shape-purple.png";
import { Pill } from "./pill";

export const Header = () => {
  return (
    <>
      <section className="bg-red-50 py-10 md:h-full">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center md:flex-row  gap-3">
            <div className="left sm:w-1/2 text-black md:w-full px-6">
              <h1 className="text-2xl sm:text-4xl leading-tight text-black font-semibold ">
                Learn <span className="text-red-600">Anything</span>
              </h1>
              <h1 className="inline-block text-2xl sm:text-4xl leading-tight mt-2 font-semibold bg-red-600 px-4 text-white">
                Anytime
              </h1>
              <h3 className="text-base mt-3">
                Unlimited access to all 60+ instructors.
              </h3>
              <span className="text-[14px]">
                2 passes (with access to all classes) for $240
              </span>

              <div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
                <input
                  className="py-3 text-sm  bg-white rounded-md pl-10 focus:outline-none w-full sm:max-w-[80%]"
                  placeholder="Search..."
                  autocomplete="off"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <FiSearch />
                  </button>
                </span>
              </div>
            </div>
            <div className="right sm:w-1/2 md:w-full relative">
              <div className="images relative w-64 sm:w-2/3">
                <div className="img h-[85vh] w-full">
                  <img
                    src={heroImg}
                    alt=""
                    className="h-full w-full object-contain z-20 relative "
                  />
                </div>
              </div>
              <div className="content">
                <Pill
                  icon={<BsFillLightningChargeFill size={25} />}
                  title="Congrstulations"
                  subtitle="Your admission completed"
                  classNames="left-12 top-60 sm:left-0 "
                  color="#fb923c"
                />
                <Pill
                  icon={<FaUsers size={25} />}
                  title="User Experience Class"
                  subtitle="Tomorrow is our"
                  classNames="right-0 top-[420px]"
                  color="#6366f1"
                />

                <Pill
                  icon={<FaGraduationCap size={25} />}
                  title="450K"
                  subtitle="Assisted Student"
                  classNames="left-1/4 bottom-16 min-w-[200px]"
                  color="#60a5fa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
