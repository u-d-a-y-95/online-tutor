import React from "react";
import { courses } from "../../components/assets/data/dummydata";

import { CourseCard } from "./courseCard";

const Courses = () => {
  return (
    <>
      <section className="courses bg-[#F3F4F8] py-16 ">
        <div className="w-4/5 m-auto">
          <div className="heading mb-16">
            <h1 className="text-3xl font-semibold text-black">
              Find The Right <br />
              Online Course For You
            </h1>
            <span className="text-sm mt-2 block">
              you don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
            {courses.map((item, index) => (
              <CourseCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
