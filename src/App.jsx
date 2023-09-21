import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./App.css";
import Wpp from "./assets/whatsapp-svgrepo-com.svg";
import Google from "./assets/google-original.svg";
import Linkedin from "./assets/linkedin-original.svg";
import Github from "./assets/github.svg";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />

      <div className="footer">
        <h2>Entre em contato através das redes sociais ou telefone:</h2>
        <p>
          <a
            href="https://wa.me/5521989560484"
            rel="noreferrer"
            target="_blank"
          >
            <img className="img-contato" src={Wpp} alt="wpp logo" />
          </a>
        </p>
        <p>
          <a
            href="mailto:cassiotenoriosc@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <img className="img-contato" src={Google} alt="Google logo" />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/cassiotenorio/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="img-contato" src={Linkedin} alt="LinkedIn Logo" />
          </a>
        </p>
        <p>
          <a
            href="https://github.com/Cassio21"
            rel="noreferrer"
            target="_blank"
          >
            <img className="img-contato" src={Github} alt="Github logo" />
          </a>
        </p>
        <div className="name">
          <p>Cássio Tenório</p>
          <span>&copy; 2023 - Todos os direitos reservados.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
