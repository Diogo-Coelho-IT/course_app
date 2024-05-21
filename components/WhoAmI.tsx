import Image from "next/image";

const WhoAmI = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-col xl:w-1/2">
        <h1 className="bold-52 text-whiterino-50 lg:bold-88">Quem sou eu?</h1>
        <h3 className="bold-32 text-orange-30 lg:bold-52">Diogo Coelho</h3>
        <h5 className="bold-16 text-whiterino-50 lg:bold-28">
          Tenho um mestrado em Engenharia Informática e dou explicações há 4
          anos
        </h5>
        <p className="regular-16 mt-6 text-whiterino-50 text-justify">
          É uma pergunta complicada... Quem é que eu sou? Eu sou um ser humano,
          nasci em Évora, Portugal e tenho (de momento) 26 anos. No presente,
          moro nos Países Baixos, próximo destino, Sul da Ásia. Sempre sonhei
          que queria viajar para todos os países do mundo, sim, inclusive
          aqueles perigosos. Não gosto da ideia de ter patrões e gosto é de
          viajar então decidi que iria ter projetos meus em que eu tivesse todo
          o poder criativo e que me permitissem viajar pelo mundo fora e nunca
          ficar preso a sítio nenhum. Queria juntar o meu amor pela Matemática e
          a minha{" "}
          <a href="/testemunhos" className="font-bold text-blue-30">
            experiência
          </a>{" "}
          enquanto explicador e o meu mestrado em Engenharia Informática e daí
          nasceu este projecto, o{" "}
          <a href="/dixcomplicar" className="font-bold text-blue-30">
            diXcomplicar
          </a>
          . Gosto muito de falar sobre os meus projectos, ideias, factos
          curiosos, sobre a vida e muita outra coisa, mas não sobre a minha
          pessoa. Cada pessoa vai ver-me de forma diferente então para quê
          explicar a forma como me vejo?! Estou neste momento a construir um{" "}
          <a href="/" className="font-bold text-blue-30">
            blog
          </a>{" "}
          sobre o processo de criação dos meus projectos e as várias coisas que
          me interessam. Não há melhor forma de se conhecer uma pessoa, do que a
          partir das coisas que ela cria/faz. Sou uma pessoa cheia de falhas
          como todos nós, mas estou aqui neste planeta para tornar-me o melhor
          de mim e ajudar outros nesse processo o máximo que conseguir,{" "}
          <a href="/" className="font-bold text-blue-30">
            mete conversa
          </a>{" "}
          se quiseres saber mais e resto dum excelente dia, cheio de amor e
          saúde.
        </p>
      </div>
      <div className="hidden lg:block self-center p-6 ml-4">
        <Image
          src="/quem-sou-eu-2.png"
          key="photo"
          alt="photo"
          width={740}
          height={560}
        />
      </div>
    </section>
  );
};

export default WhoAmI;
