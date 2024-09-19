import { AiFillStar } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const CourseCard = ({
  cover,
  title,
  lesson,
  subtitle,
  ratings,
  status,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={cover} alt="Sunset in the mountains" />

      <div className="px-6 py-4 min-h-[150px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaBook />
            <span className="text-[14px] ml-2"> {lesson} lessons</span>
          </div>
          <div className="flex items-center">
            <AiFillStar className="text-orange-500" />
            <span className="text-[14px] ml-2">
              {ratings}({Math.ceil(Math.random() * 100)})
            </span>
          </div>
        </div>
        <div className="font-bold text-md mt-4 mb-1">{title}</div>
        <p className="text-gray-700 text-xs">{subtitle}</p>
      </div>
      <div
        to="/"
        className="flex items-center justify-between border-t border-gray-200 px-6 py-4"
      >
        <span className="text-sm text-primary">{status}</span>
        <NavLink className="text-[14px] ml-2 flex items-center">
          Know Details <HiOutlineArrowNarrowRight />
        </NavLink>
      </div>
    </div>
  );
};
