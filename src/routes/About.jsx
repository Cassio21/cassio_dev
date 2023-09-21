import { useState } from "react";

import Bot from "../assets/icons/bootstrap_icon.svg";
import Css from "../assets/icons/CSS_icon.svg";
import Git from "../assets/icons/github_icon.svg";
import Html from "../assets/icons/HTML_icon.svg";
import Js from "../assets/icons/Js_icon.svg";
import React from "../assets/icons/React_icon.svg";
import Ts from "../assets/icons/Ts_icon.svg";

import "../App.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    if (currentSlide < 3) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div>
      <div className="about-container">
        <h1>
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais, principalmente em termos de programação e
          tecnologia.
        </h1>
        <div className="about-1">
          <h2>sobre :</h2>

          <div className="slider">
            <div
              className={`slide slide--1 ${currentSlide === 1 ? "active" : ""}`}
            >
              <h3>
                Minha caminhada na programação começou de maneira inesperada.
                Desde a infância, sempre fui curioso e adorava desvendar os
                segredos por trás das coisas. Isso me levou a me apaixonar por
                tecnologia, mesmo sem nunca ter imaginado que um dia estaria
                trabalhando como desenvolvedor web. Ao completar 18 anos, em
                agosto de 2014, ingressei na Força Aérea, onde servi até julho
                de 2022. Durante esse tempo, desempenhei funções importantes no
                protocolo e arquivo da unidade (PIPAR e BREVET). Essa
                experiência foi muito significativa e me proporcionou
                aprendizados valiosos.
              </h3>
            </div>

            <div
              className={`slide slide--2 ${currentSlide === 2 ? "active" : ""}`}
            >
              <h3>
                Contar com o apoio de um mentor próximo,{" "}
                <a
                  href="https://www.linkedin.com/in/erickkeller/"
                  rel="noreferrer"
                  target="_blank"
                  className="erick"
                >
                  Erick Keller
                </a>
                , que é também parte da minha família, foi um privilégio e me
                inspirou a entrar de cabeça no mundo do desenvolvimento. Foi
                então que minha paixão pela programação floresceu, em 2020,
                comecei a cursar o ensino superior tecnológico em Sistemas para
                internet e conclui em dezembro de 2022. Desde então, venho
                concentrando meus esforços em projetos pessoais e no
                aprimoramento constante das minhas habilidades.
              </h3>
            </div>

            <div
              className={`slide slide--4 ${currentSlide === 3 ? "active" : ""}`}
            >
              <h3>
                Apesar de não possuir uma experiencia de modo formal em
                programação ou tecnologias web/mobile, absorvi conhecimento
                rapidamente e conquistei experiências e algumas soft Skills
                valiosas como: <br /> Trabalho em equipe, Disciplina,
                Organização, Resiliência, Foco, Cumprimento de horários,
                Criatividade, Fácil relacionamento, Inteligência emocional,
                Flexibilidade. durante meu periodo de aprendizagem. Atualmente,
                busco uma oportunidade como desenvolvedor Front End Júnior.
                Coloco à disposição minha determinação para aprender e meu
                compromisso em sempre entregar o melhor resultado. Estou ansioso
                para embarcar nessa nova etapa e contribuir para projetos que
                demandem criatividade, eficiência e atenção aos detalhes.
              </h3>
            </div>
            {currentSlide > 1 && (
              <button
                className="slider__btn slider__btn--left"
                onClick={prevSlide}
                disabled={currentSlide === 1}
              >
                &larr;
              </button>
            )}
            {currentSlide < 3 && (
              <button
                className="slider__btn slider__btn--right"
                onClick={nextSlide}
                disabled={currentSlide === 3}
              >
                &rarr;
              </button>
            )}
          </div>
        </div>
        <div className="about-2">
          <h2>Hard Skills :</h2>
          <div className="icons">
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Html} alt="icon html" />
            </a>

            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Css} alt="icon Css" />
            </a>

            <a
              href="https://getbootstrap.com.br/docs/4.1/getting-started/introduction/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Bot} alt="icon Bootstrap" />
            </a>

            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Js} alt="icon Js" />
            </a>

            <a
              href="https://pt-br.legacy.reactjs.org/docs/getting-started.html"
              rel="noreferrer"
              target="_blank"
            >
              <img src={React} alt="icon React.js" />
            </a>

            <a
              href="https://www.typescriptlang.org/pt/docs/handbook/typescript-from-scratch.html"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Ts} alt="icon TypeScript" />
            </a>

            <a
              href="https://docs.github.com/pt/get-started"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Git} alt="icon GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
