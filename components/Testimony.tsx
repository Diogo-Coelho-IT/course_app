//import { PEOPLE_URL } from '@/constants'
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface StudentProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const Student = ({ backgroundImage, title, subtitle }: StudentProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-blue-30 p-4">
            <Image src="/user.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-20 text-black">{title}</h4>
            <p className="bold-16 text-black">"{subtitle}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimony = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-20 lg:mb-10 xl:mb-20">
      <div className="hide-scrollbar flex h-[400px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Student
          backgroundImage="bg-bg-img-1"
          title="Beatriz Ferro"
          subtitle="O Diogo é um explicador que consegue ser um bom amigo e dá-nos a tal confiança pra acreditarmos em nós mesmos."
        />
        <Student
          backgroundImage="bg-bg-img-1"
          title="Estudante B"
          subtitle="Comentário"
        />
        <Student
          backgroundImage="bg-bg-img-1"
          title="Estudante C"
          subtitle="Comentário"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-orange-30 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black">
            <strong>Testemunhos</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-black">
            Aqui estão testemunhos de pessoal que já teve explicação comigo. Eu
            acredito em <strong>transparência máxima</strong>, não existe tal coisa como o
            explicador perfeito e eu vou fazer sempre o meu melhor para melhorar
            a partir do vosso feedback. Qualquer avaliação dada, a não ser que
            contenha texto descriminatório e afins, será apresentada 
             <strong> publicamente</strong> no website. Se quiseres ver mais testemunhos ou
            avaliações feitas por alunos da minha explicação relativas à minha
            pessoa podes clicar no botão abaixo.
          </p>
          <div className="flex flexEnd pt-10">
          <Link href="/testemunhos">
              <Button
                type="button"
                title="Mais Testemunhos"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </Link>
          </div>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="testimony-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimony;
