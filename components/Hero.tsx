import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 text-whiterino-50 lg:bold-88">Explicações</h1>
        <h3 className="bold-28 text-whiterino-50 lg:bold-52">Matemática A</h3>
        <h5 className="bold-16 text-whiterino-50 lg:bold-28">
          Ensino Secundário
        </h5>
        <p className="regular-16 mt-6 text-whiterino-50 text-justify xl:max-w-[520px]">
          A minha forma de ensinar é super prática.{" "}
          <b>Nada de teorias secantes</b>. Vou direto ao assunto para
          descomplicar isto tudo e ficares um craque na Matemática. Os{" "}
          <b>preços</b> são <b>acessíveis</b> e ainda há <b>descontos</b> se
          quiseres ter em grupo ou com os teus amigos. Se optares por comprares
          packs tens descontos e ainda o <b>curso para o exame de graça </b>(até
          ao final desta época de exame). É tudo <b>online</b>, por isso podes
          aprender de pijama, sem stress! E quanto aos horários? Combinamos
          todas as semanas para teres um{" "}
          <b>horário que te seja mais conveniente</b>. Clica no botão abaixo
          para saberes mais informação. Ou marca já explicações antes que
          esgote!
        </p>
        <p className="regular-16 mt-6 text-blue-30 text-justify xl:max-w-[520px]">
          <b>
            A primeira explicação é de graça, onde discutimos horários, preços,
            que dúvidas tens e começamos a meter as mãos à obra.
          </b>
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-whiterino-50">
            36
            <span className="regular-16 lg:regular-20 ml-1">
              Avaliações Excelentes
            </span>
          </p>
        </div>

        <div className="flex flex-col flexCenter w-full gap-3 sm:flex-row xl:flexStart">
          <Link href="/explicacoes">
            <Button type="button" title="Sabe mais aqui" variant="btn_orange" />
          </Link>
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
      <div className="relative flex flex-1 flex-col gap-4 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Localização</p>
                <p className="bold-20 text-white">Online</p>
              </div>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">
                  Máx. pessoas por sessão
                </p>
                <p className="bold-20 text-white">4</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Tempo por sessão</p>
                <p className="bold-20 text-white">1h</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col hidden lg:block p-6 ml-4">
          <a href="/quem_sou_eu">
            <Image
              src="/quem-sou-eu.png"
              key="photo"
              alt="photo"
              width={480}
              height={480}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
