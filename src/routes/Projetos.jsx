import BankistWeb from "../assets/projetos/bankist_Web.jpg";
import BankistApp from "../assets/projetos/App_bank.jpg";
import Ch from "../assets/projetos/charlie_blog.jpg";
import Contagem from "../assets/projetos/contagemregr.jpg";
import Coment from "../assets/projetos/deixecometario.jpg";
import Ecommerce from "../assets/projetos/E-commerce.jpg";
import Hatshop from "../assets/projetos/hatShop.jpg";
import InfoFilme from "../assets/projetos/infoFilme.jpg";
import Mapyt from "../assets/projetos/mapyt.jpg";
import Omnifood from "../assets/projetos/omnifood.jpg";
import QualPalavra from "../assets/projetos/qual_a_palavra.jpg";
import QualNumber from "../assets/projetos/qual_number.jpg";
import QuizDev from "../assets/projetos/quizDev.jpg";
import TaksList from "../assets/projetos/taks_list.jpg";

const Projetos = () => {
  const redirectToRepository = (repositoryUrl) => {
    window.open(repositoryUrl, "_blank");
  };

  return (
    <div className="project">
      <div className="section__title">
        <h3 className="section__header">
          Alguns dos meus Projetos pessoais 😀
        </h3>
      </div>

      <div className="features">
        <img
          src={BankistWeb}
          alt="Computer"
          className="features__img lazy-img"
        />

        <div className="features__feature">
          <h5 className="features__header">Bankist - Web page.</h5>
          <p>
            é uma aplicação web que simula uma interface de banco. Ele foi
            desenvolvido utilizando tecnologias como HTML, CSS e JavaScript. O
            design é responsivo, o que significa que se adapta bem a diferentes
            dispositivos, isso proporciona uma experiência de usuário
            consistente em qualquer plataforma.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://bankistweb.vercel.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>

        <div className="features__feature">
          <h5 className="features__header">Bankist - App</h5>
          <p>
            Uma aplicação que simula um banco. Foi desenvolvida com HTML, CSS e
            JavaScript. <br /> OBS: Para acessar, basta utilizar as credenciais
            (ct - 1111, tm - 2222).
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://bankistaapp.netlify.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>
        <img
          src={BankistApp}
          alt="Computer"
          className="features__img lazy-img"
        />

        <img src={Ch} alt="Blog" className="features__img lazy-img" />
        <div className="features__feature">
          <h5 className="features__header">Charlie Blog</h5>
          <p>
            Um blog simples criado para estudo utilizando a linguagem ReactJS.
            Nesta aplicação, é possível criar e editar posts. Além disso, o blog
            utiliza o Firebase para o armazenamento de dados. Esta experiência
            proporcionou um aprendizado valioso em ReactJS e integração com
            Firebase, aprimorando minhas habilidades de desenvolvimento web.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://charliiebloog.netlify.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>

        <div className="features__feature">
          <h5 className="features__header">Contador Regressivo</h5>
          <p>
            Desenvolvi um contador regressivo como parte dos meus estudos em
            React.js. Neste projeto, o usuário tem a capacidade de definir uma
            data-alvo, personalizar o plano de fundo com uma URL de imagem de
            sua escolha e escolher as cores dos contadores.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://reminder-jet.vercel.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>
        <img src={Contagem} alt="Webpage" className="features__img lazy-img" />

        <img src={Coment} alt="Webpage" className="features__img lazy-img" />

        <div className="features__feature">
          <h5 className="features__header">Modelo de Avaliação de produto</h5>
          <p>
            Desenvolvi um modelo de avaliação de produtos utilizando React.js.
            Nesta aplicação, o usuário tem a opção de inserir seus dados,
            avaliar o produto e posteriormente submeter o formulário. Além
            disso, implementei funcionalidades para fornecer feedback em tempo
            real à medida que o usuário interage com o formulário.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://deixeseucomentario.vercel.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>

        <div className="features__feature">
          <h5 className="features__header">OmniFood</h5>
          <p>
            Desenvolvi um site responsivo com o objetivo de proporcionar aos
            usuários uma experiência intuitiva e de fácil compreensão. Este site
            é dedicado à assinatura de alimentos saudáveis. Implementei recursos
            que facilitam a navegação e a seleção de produtos, garantindo que o
            usuário possa explorar e fazer escolhas informadas de maneira
            simples e eficiente.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://omniifood-cassio.netlify.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>
        <img src={Omnifood} alt="Webpage" className="features__img lazy-img" />

        <img src={QuizDev} alt="Webpage" className="features__img lazy-img" />
        <div className="features__feature">
          <h5 className="features__header">Quiz Dev!</h5>
          <p>
            Desenvolvi um projeto com o propósito de aprimorar meus
            conhecimentos em React.js, com foco especial nos Hooks, uma poderosa
            funcionalidade dessa biblioteca. Este projeto consiste em um site
            interativo onde os usuários podem responder a perguntas relacionadas
            à programação.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://quizdevelopers.vercel.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>

        <div className="features__feature">
          <h5 className="features__header">InfoFilmes</h5>
          <p>
            Desenvolvi um projeto voltado para o estudo da API Themoviedb, uma
            fonte rica de informações sobre os filmes mais populares no mundo
            atual. Neste projeto, o usuário tem a capacidade de realizar
            pesquisas e receber um conjunto abrangente de informações sobre o
            filme de seu interesse.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://infofilmes.vercel.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>
        <img src={InfoFilme} alt="Webpage" className="features__img lazy-img" />

        <img src={Mapyt} alt="Webpage" className="features__img lazy-img" />
        <div className="features__feature">
          <h5 className="features__header">Mapyt</h5>
          <p>
            Desenvolvi um mapa interativo utilizando JavaScript e a API do
            Google Maps. Neste projeto, o usuário tem a capacidade de marcar a
            localização onde ocorreu seu treino, aproveitando as funcionalidades
            do mapa e orientando-se pela sua posição atual. Isso proporciona uma
            maneira intuitiva e personalizada de registrar e visualizar os
            locais de treino.
          </p>
          <button
            onClick={() => redirectToRepository("https://mappytt.netlify.app/")}
          >
            Clique Aqui para ver!
          </button>
        </div>

        <div className="features__feature">
          <h5 className="features__header">Hatshoop</h5>
          <p>
            Desenvolvi o HatShop, um site simulando um e-commerce de vendas de
            chapéus. Utilizei tecnologias como HTML, CSS e JavaScript para criar
            uma experiência interativa e responsiva para os usuários. Este
            projeto não apenas me permitiu aprimorar minhas habilidades em
            design e desenvolvimento web.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://hatshopp.netlify.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>
        <img src={Hatshop} alt="Webpage" className="features__img lazy-img" />

        <img
          src={QualPalavra}
          alt="Webpage"
          className="features__img lazy-img"
        />
        <div className="features__feature">
          <h5 className="features__header">Qual Palavra?</h5>
          <p>
            Pequeno projeto pessoal desenvolvido com o objetivo de aprimorar
            meus conhecimentos em React e estilização. Durante o
            desenvolvimento, busquei explorar novos conceitos e técnicas para
            criar uma aplicação mais robusta e atraente. Este projeto foi uma
            ótima oportunidade para aplicar práticas avançadas e expandir minha
            habilidade em desenvolvimento web utilizando a biblioteca React.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://palavrassecretas.netlify.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>

        <div className="features__feature">
          <h5 className="features__header">Qual o numero?</h5>
          <p>
            Pequeno projeto pessoal desenvolvido com o objetivo de aprimorar
            meus conhecimentos em Javascript e estilização. Durante o
            desenvolvimento.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://adivinheessenumero.netlify.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>
        <img
          src={QualNumber}
          alt="Webpage"
          className="features__img lazy-img"
        />

        <img src={Ecommerce} alt="Webpage" className="features__img lazy-img" />
        <div className="features__feature">
          <h5 className="features__header">Pagina de validação de clientes</h5>
          <p>
            Um sistema de páginas web desenvolvido com HTML, CSS e JavaScript
            puro, sem a necessidade de frameworks ou bibliotecas adicionais. O
            projeto tem como objetivo criar uma experiência interativa na web,
            onde o usuário pode validar e inserir seus dados de forma intuitiva,
            proporcionando uma simulação realista de um ambiente de e-commerce.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://js-validador.vercel.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>

        <div className="features__feature">
          <h5 className="features__header">Lista de tarefas.</h5>
          <p>
            Projeto criado com o objetivo de aprimorar minhas habilidades na
            manipulação do estado no React.js, utilizando TypeScript para
            garantir um código mais seguro e aprimorar meu conhecimento. Durante
            o desenvolvimento, também implementei funcionalidades adicionais
            para enriquecer a experiência do usuário, como animações e
            validações de formulário. Além disso, foquei em seguir as melhores
            práticas de codificação para garantir um código limpo e de fácil
            manutenção.
          </p>
          <button
            onClick={() =>
              redirectToRepository("https://task-master-ts.vercel.app/")
            }
          >
            Clique Aqui para ver!
          </button>
        </div>
        <img src={TaksList} alt="Webpage" className="features__img lazy-img" />
      </div>
    </div>
  );
};

export default Projetos;
