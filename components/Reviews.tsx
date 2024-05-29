import Image from "next/image";
import React from "react";

const Reviews = () => {
  return (
    <section className=" text-whiterino-50 flex-col flexCenter overflow-hidden bg-center bg-no-repeat pb-36">
      {" "}
      <div className="max-container padding-container relative w-full flex justify-center">
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="flex flex-col flexCenter py-12">
            <h2 className="text-center bold-40 lg:bold-64">
              Testemunhos e Avaliações
            </h2>
            <h3 className="pt-6 bold-16 lg:bold-16 text-justify">
              Eu acredito em{" "}
              <span className="text-blue-30">transparência total</span>, como
              digo muitas vezes, não existe o aluno perfeito nem o explicador
              perfeito. A partir do vosso feedback consigo melhorar a minha arte
              e oferecem-me a possibilidade de vos oferecer um melhor serviço!
              Aqui está o feedback dos alunos que quiseram responder ao
              inquérito para me avaliarem. Os inquéritos são completamente
              anónimos de forma a não fazer qualquer tipo de chantagem com
              nenhum dos meus alunos.
            </h3>
          </div>
          <div className="border border-blue-30 mb-16" />
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 ">
            <li className="flex w-full flex-1 flex-col items-start ">
              <div className="flex flex-row">
                <div className="rounded-full p-4 lg:p-7 lg:h-20 lg:w-20 bg-orange-30">
                  <Image
                    src="/star_empty.svg"
                    alt="map"
                    width={36}
                    height={36}
                  />
                </div>
                <h2 className="ml-4 bold-32 lg:bold-40 mt-5 capitalize">
                  Cotação total
                </h2>
              </div>
              <div className="flex w-full flexCenter">
                <p className="bold-32 mt-4 text-whiterino-50 text-justify lg:bg-none">
                  4.88
                </p>
              </div>

              <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
                <strong>
                  <span className="text-blue-30">21</span>
                </strong>{" "}
                avaliações de{" "}
                <strong>
                  <span className="text-orange-30">5 estrelas</span>
                </strong>{" "}
                e{" "}
                <strong>
                  <span className="text-blue-30">3</span>
                </strong>{" "}
                de{" "}
                <strong>
                  <span className="text-orange-30">4 estrelas</span>
                </strong>{" "}
                .
              </p>
            </li>
            <li className="flex w-full flex-1 flex-col items-start ">
              <div className="flex flex-row">
                <div className="rounded-full p-4 lg:p-7 lg:h-20 lg:w-20 bg-orange-30">
                  <Image src="/like.svg" alt="map" width={36} height={36} />
                </div>
                <h2 className="ml-4 bold-32 lg:bold-40 mt-5 capitalize">
                  Recomendável
                </h2>
              </div>
              <div className="flex w-full mt-4 flexCenter">
                <p className="bold-32 text-whiterino-50 text-justify lg:bg-none">
                  100%
                </p>
              </div>
              <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
                <strong>
                  <span className="text-orange-30">100%</span>
                </strong>{" "}
                dos alunos responderam que me recomendavam aos seus
                amigos/colegas.
              </p>
            </li>
          </ul>
          <div className="border border-blue-30 my-16" />
          <h4 className="flex flexCenter capitalize bold-32 lg:bold-40 text-justify">
            Os Problemas (e não problemas)
          </h4>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 ">
            <li className="flex w-full flex-1 flex-col items-start ">
              <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                Falar rápido
              </h2>
              <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
                Apenas{" "}
                <strong>
                  <span className="text-blue-30">17%</span>
                </strong>{" "}
                dos alunos que fizeram o testemunho disseram que eu falava
                pausadamente. Isto sempre foi um problema meu que estou a
                melhorar aos poucos, mas deve-se principalmente ao tempo de
                explicação ser limitado e querer dar atenção a toda a gente e
                podermos avançar o máximo que conseguirmos. Apesar de falar
                rápido{" "}
                <strong>
                  <span className="text-orange-30">96%</span>
                </strong>{" "}
                dos alunos afirmaram que eu percebia o que estava a explicar e
                que explico bem.
              </p>
            </li>
            <li className="flex w-full flex-1 flex-col items-start ">
              <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                Não ser exigente
              </h2>
              <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
                Apenas{" "}
                <strong>
                  <span className="text-blue-30">21%</span>
                </strong>{" "}
                dos alunos que fizeram o testemunho disseram que eu não era
                exigente. Eu sigo uma ideologia que é, quem quer trabalhar a
                sério trabalha a sério e quem não quiser não trabalha. Eu não
                envio TPCs e sou bastante anti-avaliações. No entanto, nas
                explicações vais sempre trabalhar. O que fazes fora da
                explicação é contigo. Irei estar sempre disponível para qualquer
                dúvida, só tens que as enviar,{" "}
                <strong>
                  <span className="text-orange-30">83%</span>
                </strong>{" "}
                dos alunos dizem que respondo a dúvidas fora de horas
              </p>
            </li>
          </ul>
          <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
            Não ter a letra legível
          </h2>
          <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
            Apenas{" "}
            <strong>
              <span className="text-blue-30">25%</span>
            </strong>{" "}
            dos alunos afirmaram que eu tinha a letra legível. É verdade, quem
            tem a letra feia, bem-vindo ao grupo do pessoal que pensa mais
            rápido do que escreve! É algo que também já ando a tentar melhorar
            há um tempo. Tenho um pen-tablet {/*colocar aqui affiliated link*/}{" "}
            do qual estou a tornar-me mais acostumado, mas devido, mais uma vez,
            ao tempo por sessão ser limitado, sacrifico a beleza da minha letra
            de forma a conseguir dar o máximo nível de atenção possível. Por
            outro lado,{" "}
            <strong>
              <span className="text-orange-30">88%</span>
            </strong>{" "}
            dos alunos dizem que eu uso vocabulário simples.
          </p>
          <div className="border border-blue-30 my-16" />
          <h4 className="flex flexCenter capitalize bold-32 lg:bold-40 text-justify">
            Respostas opcionais e Comentários Extra
          </h4>
          <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
            {" "}
            Há algumas secções do questionário que os alunos têm a opção de
            responder ou não. O que é que fiz bem? O que é que eu fiz mal? E
            algum comentário extra que queiram dar. Pode haver algo que queiram
            comentar que pode não estar bem definido no resto do questionário.
            Aqui estão as frases escritas por alunos meus (estas frases são
            completamente anónimas e prometo que não lhes paguei para dizerem
            isto).
          </p>
          <div className="border w-1/2 self-center border-whiterino-50 mt-16" />
          <div className="py-8">
            <h2 className="text-blue-30 text-center bold-20 lg:bold-32 mt-5 capitalize">
              Testemunhos públicos
            </h2>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              Alguns alunos aceitaram publicamente fazer uma frase, aqui estão
              elas.
            </p>
            <p className="bold-16 mt-5 text-whiterino-50 text-left lg:mt-[30px] lg:bg-none">
              Beatriz Ferro
            </p>
            <p className="regular-16 mt-1 text-whiterino-50 text-left lg:bg-none">
              "O Diogo é um explicador que consegue ser um bom amigo e dá-nos a
              tal confiança para acreditarmos em nós mesmos."
            </p>
            <p className="bold-16 mt-5 text-whiterino-50 text-left lg:mt-[30px] lg:bg-none">
              Matilde Morgadinho
            </p>
            <p className="regular-16 mt-1 text-whiterino-50 text-left lg:bg-none">
              "O Diogo é um ótimo profissional, transmite-nos segurança e
              tranquilidade, não desiste de nós e acredita nas nossas
              capacidades. O seu ar jovem faz com que chegue facilmente até nós,
              e isso é com certeza um ponto a favor."
            </p>
            <p className="bold-16 mt-5 text-whiterino-50 text-left lg:mt-[30px] lg:bg-none">
              Carolina Ventura
            </p>
            <p className="regular-16 mt-1 text-whiterino-50 text-left lg:bg-none">
              "Para além de tornar os piores conceitos matemáticos mais fáceis,
              ainda está sempre disposto a esclarecer as minhas dúvidas! Sem
              dúvida o melhor explicador!"
            </p>
            <p className="bold-16 mt-5 text-whiterino-50 text-left lg:mt-[30px] lg:bg-none">
              Catarina Santos
            </p>
            <p className="regular-16 mt-1 text-whiterino-50 text-left lg:bg-none">
              "O Diogo não é só um explicador, é um amigo. Para além disso
              "percebe o que explica", descomplicando, a nosso ver, a
              matemática. Isto faz dele um grande explicador!"
            </p>
            <p className="bold-16 mt-5 text-whiterino-50 text-left lg:mt-[30px] lg:bg-none">
              Rodrigo Grilo
            </p>
            <p className="regular-16 mt-1 text-whiterino-50 text-left lg:bg-none">
              "O Diogo é um explicador fantástico, super profissional e sempre
              pronto a ajudar."
            </p>
          </div>
          <div className="border w-1/2 self-center border-whiterino-50 mt-16" />
          <div className="py-8">
            <h2 className="text-orange-30 text-center bold-20 lg:bold-32 mt-5 capitalize">
              O que é que fiz bem?
            </h2>
            <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
              "Começar a dar explicações."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              "Explicar de um maneira simples para todos."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-right lg:mt-[30px] lg:bg-none">
              "Explica primeiro a matéria da qual vamos fazer exercícios fazendo
              com que perceba melhor os exercícios e tenha menos dúvidas em vez
              de começarmos logo a fazer exercícios."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              "Em geral tudo mas eu pessoalmente gostei mais da forma como
              esteve sempre disposto a tirar dúvidas pois como era um espaço
              controlado/pequeno havia mais uma ideia de que não havia tempo
              “desperdiçado” pois pouco tempo depois eramos “atendidos” caso
              surgi-se dúvidas."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
              "Tudo, a linguagem muito acessível quando falas connosco.
              Percebes-nos e tentas sempre motivar o pessoal ao máximo, estás
              sempre disposto a responder a dúvidas e a ajudar."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              "Interagias bem, compreendias bem as dúvidas, explicavas bem com
              métodos fáceis de entender."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-right lg:mt-[30px] lg:bg-none">
              "Explicaste sempre tudo muito bem e mostraste sempre muita
              preocupação pelos teus "alunos'."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              "Tudo."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
              "O método de ensino e a forma como nos preparaste para exame
              nacional."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              "Começaste a dar explicações."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-right lg:mt-[30px] lg:bg-none">
              "Explicar bem e de maneira divertida."
            </p>
          </div>
          <div className="border w-1/2 self-center border-whiterino-50 mt-16" />
          <div className="py-8">
            <h2 className="text-blue-30 text-center bold-20 lg:bold-32 mt-5 capitalize">
              O que é que fiz mal?
            </h2>
            <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
              "Nada."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              "Foste embora 😭."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-right lg:mt-[30px] lg:bg-none">
              "Penso que as vezes explicavas a matéria de forma muito literal de
              maneira em que tínhamos só de decorar regras mas as vezes era
              confuso onde as tínhamos de aplicar."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              "Não fizeste nada de mal."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
              "Nada :)."
            </p>
          </div>
          <div className="border w-1/2 self-center border-whiterino-50 mt-16" />
          <div className="py-8">
            <h2 className="text-orange-30 text-center bold-20 lg:bold-32 mt-5 capitalize">
              Comentários extra
            </h2>
            <p className="regular-16 mt-5 text-whiterino-50 text-justify lg:mt-[30px] lg:bg-none">
              "És fixe."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              "Acho que como as explicações não são presenciais, para que possa
              tirar mais dúvidas sermos sempre 3 pessoas por explicação."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-right lg:mt-[30px] lg:bg-none">
              "Quando alguém traz uma materia nova para a explicação podias ter
              exercícios teus, predeterminados que sabes que ajudam a “entrar na
              matéria “ de resto acho que sempre foi impecável a explicação e
              consistente."
            </p>
            <p className="regular-16 mt-5 text-whiterino-50 text-center lg:mt-[30px] lg:bg-none">
              "És incrível Diogo, obrigada por tudo. Gosto muito de tiii (como
              explicador e como pessoa)."
            </p>
          </div>
          <div className="border border-blue-30 my-16" />
          <p className="bold-16 mt-5 text-blue-30 text-center lg:mt-[30px] lg:bg-none">
            Mais uma vez, eu não paguei a ninguém para escrever isto e todos
            estes dados provêm de 24 respostas (no presente momento) de alunos
            que se voluntariaram a responder ao inquérito. E essa é a melhor
            parte. Se quiseres saber mais sobre estes inquéritos pergunta na
            nossa primeira explicação. Obrigado a toda gente que respondeu. ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

type ReviewItemProps = {
  title: string;
  icon: string;
  description: string;
};

const ReviewItem = ({ title, icon, description }: ReviewItemProps) => {
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

export default Reviews;
