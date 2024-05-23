import { FEATURES_TUTORING } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "./Button";

const Tutoring = () => {
  return (
    <section className=" text-whiterino-50 flex-col flexCenter overflow-hidden bg-center bg-no-repeat pb-36">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col">
          <div className="self-center relative">
            <h2 className="bold-40 lg:bold-64">Explicações</h2>
          </div>
          <div className="self-center relative">
            <h4 className="text-blue-30 text-center bold-32 lg:bold-40">
              O que podem esperar das explicações
            </h4>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 ">
            {FEATURES_TUTORING.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
          <div className="self-center text-center relative pt-20">
            <h4 className="text-blue-30 bold-18 lg:bold-32">
              Tens interesse em teres explicações comigo? Dá um check nos preços
              ou marca já antes que esgote.
            </h4>
          </div>
          <div className="flex flex-row flex-wrap flexCenter gap-4 pt-8">
            <Link target="_blank" href="https://forms.gle/qfkDnL3MbDEo6dCZA">
              <Button
                type="button"
                title="Marca explicações"
                icon="/calendar-add.svg"
                variant="btn_white_text"
              />
            </Link>
            <Link href="/precos">
              <Button
                type="button"
                title="Preços por pessoa"
                variant="btn_orange"
              />
            </Link>
          </div>
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

export default Tutoring;
