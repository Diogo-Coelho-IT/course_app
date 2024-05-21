import Image from "next/image";
import Link from "next/link";

const Newsletter = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-5 pb-32 md:gap-28 lg:pb-20 xl:flex-row">
      <div className="flex flex-col flexCenter w-full">
        <div className="border w-full border-blue-30 my-16" />
        <p className="bold-20 mt-6 text-whiterino-50 text-center">
          Se quiseres mais conteúdo de graça, junta-te à Newsletter clicando na imagem abaixo
        </p>
        <Link className="mt-6" target="_blank" href="https://dixcomplicar.beehiiv.com/subscribe">
          <Image src="/gmail.svg" alt="logo" width={38} height={38} />
        </Link>   
      </div>
    </section>
  );
};

export default Newsletter;
