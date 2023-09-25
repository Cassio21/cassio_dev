import { Link } from "react-router-dom";
import { BsListTask } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

//**Estaticos */
import "./NavBar.css";
// import Pic from "../assets/Pic.jpeg";
import logo from "../Cassio_dev/logo_dev.png";

const NavBar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirMenu = () => {
    setMenuAberto(true);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <div
      className={`rotas block-header--fixed ${menuAberto ? "menu-aberto" : ""}`}
    >
      <img src={logo} alt="foto Cássio" />
      {menuAberto ? (
        <AiOutlineClose onClick={fecharMenu} className="icone-menu" />
      ) : (
        <BsListTask onClick={abrirMenu} className="icone-menu" />
      )}

      <Link to={"/"} className="link">
        Home
      </Link>
      <Link to={"/about"} className="link">
        Sobre
      </Link>
      <Link to={"/projetos"} className="link">
        Projetos
      </Link>
      <Link to={"/contato"} className="link">
        Contato
      </Link>
      {menuAberto && (
        <ul className={`lista-rotas`}>
          <li className="link-first">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="link-first">
            <Link to={"/about"}>Sobre</Link>
          </li>
          <li className="link-first">
            <Link to={"/projetos"}>Projetos</Link>
          </li>
          <li className="link-first">
            <Link to={"/contato"}>Contato</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
