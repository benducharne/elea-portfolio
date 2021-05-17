import React, { useEffect } from "react";
import "./Accueil.css";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import elea from "../images/accueil_bienvenue.png";
import glace from "../images/glace.png";
import rugby from "../images/rugby.png";

console.log(glace);

function Accueil() {
  let history = useHistory();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="bienvenue-container" data-aos="fade-up">
        <img className="image-elea" src={elea} alt="" />
        <div className="bienvenue-message">
          <div className="accueil-message-container">
            <div className="accueil-title">Bienvenue !</div>
            <div className="accueil-text">
              Je suis <span>Elëa Harrison</span>, étudiante en première année de
              master Sciences de l’éducation, option Métier de l’intervention en
              formation des adultes.
            </div>
            <div className="accueil-text">
              Laissez moi vous présenter mon portfolio !
            </div>
            <Link to="sommaire" smooth={true} duration={1000}>
              <button id="accueil-button" className="primary-button">
                C'EST PARTI !
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="sommaire-container" id="sommaire">
        <div className="sommaire-message">
          <div className="accueil-message-container">
            <div className="accueil-title">Préambule</div>
            <div className="accueil-text">
              Bien que n’ayant que 22 ans, j’ai côtoyé le monde professionnel à
              de nombreuses reprises; que ce soit par le biais de petits boulots
              comme par celui du bénévolat. Toutefois, dans ce portfolio, j’ai
              décidé de partager avec vous deux expériences qui m’ont
              particulièrement marquée :
            </div>

            <div className="accueil-text-logo">
              <img className="logo" src={rugby} alt="" />
              Mon passé en temps qu’éducatrice dans un club de rugby à XIII
            </div>

            <div className="accueil-text-logo">
              <img className="logo" src={glace} alt="" />
              Mon premier contrat étudiant chez Amorino, glacier du centre
              commercial de la Part-Dieu (Lyon)
            </div>
            <button
              className="primary-button"
              id="accueil-button"
              onClick={() => history.push("/Parcours")}
            >
              MAIS D’ABORD... APPRENEZ À ME CONNAITRE !
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accueil;
