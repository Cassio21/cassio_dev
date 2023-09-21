import { Link } from "react-router-dom";
import "../App.css";
const Home = () => {
  return (
    <div className="home">
      <h1>Olá, meu nome é Cássio Tenório 🤝 </h1>
      <h2>Desenvolvedor web Front-end 👨‍💻</h2>
      <p>
        Sou uma pessoa apaixonada por tecnologia e entusiasta da programação.
      </p>
      <p>
        Estou sempre em busca de novos desafios e projetos que me permitam
        expandir meu conhecimento e aplicar minhas habilidades de forma
        criativa, estou constantemente aprendendo e buscando oportunidades para
        colaborar com outros desenvolvedores em projetos interessantes e
        inovadores.
      </p>
      <h4>
        SAIBA MAIS SOBRE A MINHA HISTÓRIA E CONFIRA MEUS{" "}
        <Link to={"/projetos"}>PROJETOS!</Link>{" "}
      </h4>
    </div>
  );
};

export default Home;
