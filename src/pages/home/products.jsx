import React from "react";
import { FaBookDead } from "react-icons/fa";
import { ProductCard } from "./productCard";

export const Products = () => {
  return (
    <>
      <section className="about py-20">
        <div className="container flex flex-col gap-10">
          <div className="heading text-center">
            <h1 className="text-3xl font-semibold text-black">
              Why An Scholercity Out Of The Ordinary
            </h1>
            <span className="text-sm mt-2 block">
              you don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5 md:grid-cols-2">
            <ProductCard
              color="bg-[#2D69F0]"
              icon={<FaBookDead size={50} />}
              title="4,000 Online courses"
              desc="You don't have to struggle alone, you've "
            />
            <ProductCard
              color="bg-[#DD246E]"
              icon={<FaBookDead size={50} />}
              title="200+ Instructors"
              desc="You don't have to struggle alone, you've "
            />
            <ProductCard
              color="bg-[#8007E6]"
              icon={<FaBookDead size={50} />}
              title="1,000 Ebooks"
              desc="You don't have to struggle alone, you've "
            />
            <ProductCard
              color="bg-[#0CAE74]"
              icon={<FaBookDead size={50} />}
              title="200 Seminers"
              desc="You don't have to struggle alone, you've "
            />
          </div>
        </div>
      </section>
    </>
  );
};
