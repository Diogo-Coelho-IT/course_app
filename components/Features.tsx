import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className=" text-whiterino-50 flex-col flexCenter overflow-hidden bg-center bg-no-repeat pb-36">
      {" "}
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/rubiks-cube.png"
            alt="rubiks-cube"
            width={440}
            height={1000}
            className="feature-rubiks"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64">Curso para o Exame</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 ">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start ">
      <div className="rounded-full p-4 lg:p-7 bg-orange-30">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
