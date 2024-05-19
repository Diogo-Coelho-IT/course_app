import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { GROUP_PRICES, INDIVIDUAL_PRICES } from "@/constants";

const Prices = () => {
  return (
    <section className="text-whiterino-50 flex-col flexCenter overflow-hidden bg-center bg-no-repeat pb-36">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col">
          <div className="flex flexCenter relative py-4">
            <h2 className="bold-40 lg:bold-64">Preços</h2>
          </div>
          <div className="flex flexCenter w-full gap-20 py-4 flex-col lg:flex-row">
            {INDIVIDUAL_PRICES.map((price) => (
              <IndividualPriceItem
                key={price.title}
                title={price.title}
                prices={price.prices}
                description={price.description}
              />
            ))}
            {GROUP_PRICES.map((price) => (
              <GroupPriceItem
                key={price.title}
                title={price.title}
                pricestwo={price.pricestwo}
                pricesthree={price.pricesthree}
                pricesfour={price.pricesfour}
                description={price.description}
              />
            ))}
          </div>
          <div className="self-center text-center relative pt-20">
            <h4 className="text-blue-30 bold-18 lg:bold-20">
              Tens interesse em teres explicações comigo? Marca já antes que
              esgote.
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
          </div>
        </div>
      </div>
    </section>
  );
};

type PriceValueItemProps = {
  prices: number[];
};

const PriceValueItem = ({ prices }: PriceValueItemProps) => {
  return (
    <div>
      <p className="text-orange-30 pt-5 bold-20">1-5</p>
      <p>{prices[0]}€</p>
      <p className="text-orange-30 pt-5 bold-20">6-10</p>
      <p>{prices[1]}€</p>
      <p className="text-orange-30 pt-5 bold-20">11-15</p>
      <p>{prices[2]}€</p>
      <p className="text-orange-30 pt-5 bold-20">16-20</p>
      <p>{prices[3]}€</p>
    </div>
  );
};

type IndividualPriceItemProps = {
  title: string;
  prices: number[];
  description: string;
};

const IndividualPriceItem = ({
  title,
  prices,
  description,
}: IndividualPriceItemProps) => {
  return (
    <div className="text-center lg:max-w-1/3 box-border min-h-500 border-2 rounded-2xl border-whiterino-50 p-4">
      <p className="bold-32 text-blue-30">{title}</p>
      <p className="text-gray-10">{description}</p>
      <PriceValueItem prices={prices} />
    </div>
  );
};

type GroupPriceItemProps = {
  title: string;
  pricestwo: number[];
  pricesthree: number[];
  pricesfour: number[];
  description: string;
};

const GroupPriceItem = ({
  title,
  pricestwo,
  pricesthree,
  pricesfour,
  description,
}: GroupPriceItemProps) => {
  return (
    <div className="text-center lg:max-w-1/3 min-h-500 box-border border-2 rounded-2xl border-whiterino-50 p-4">
      <p className="bold-32 text-blue-30">{title}</p>
      <p className="text-gray-10">{description}</p>
      <div className="flex flex-row flexCenter gap-4">
        <div>
          <p className="text-whiterino-50 pt-5 bold-18">duas pessoas</p>
          <PriceValueItem prices={pricestwo} />
        </div>
        <div>
          <p className="text-whiterino-50 pt-5 bold-18">três pessoas</p>
          <PriceValueItem prices={pricesthree} />
        </div>
        <div>
          <p className="text-whiterino-50 pt-5 bold-18">quatro pessoas</p>
          <PriceValueItem prices={pricesfour} />
        </div>
      </div>
    </div>
  );
};

export default Prices;
