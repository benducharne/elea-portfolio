import React, { useState } from "react";
import "./Amorino.css";
import ReactPlayer from "react-player";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import ScrollHelper from "../helpers/ScrollHelper";

import kiosque from "../images/amorino_kiosque.jpg";
import organisation from "../images/amorino_organisation.jpg";

function Amorino() {
  const [exempleActive, setExempleActive] = useState(false);

  return (
    <>
      <ScrollHelper />
      <div className="contexte-container">
        <div className="contexte-text-container">
          <div className="amorino-title">Un équilibre à adopter</div>
          <div className="amorino-text">
            Amorino est une enseigne de glaces italiennes, dont les boutiques
            franchisées sont installées dans plusieurs pays à travers le monde.
            Déjà implanté au Vieux Lyon (69005), ce glacier a ouvert{" "}
            <span>
              une nouvelle franchise dans le centre commercial de la Part-Dieu
            </span>{" "}
            (69003) en 2018.
            <br />
            <br /> À la recherche d’un contrat étudiant, j’ai alors saisi cette
            opportunité tout en jonglant avec ma deuxième année de licence. Je
            travaillais <span>quinze heures par semaine</span> et, durant les{" "}
            <span>neuf mois</span> passés dans ce kiosque en plein milieu du
            centre commercial, j’ai appris énormément de choses.
            <br />
            <br />
            N’ayant jamais eu d’expérience dans le monde de la restauration, mes
            connaissances dans ce domaine ont considérablement augmentées… mais
            ce n’est pas tout ! En effet, cela m’a permis d’être confrontée à
            des publics divers et variés mais également de{" "}
            <span>former pour la première fois de ma vie des adultes</span> à
            leur nouveau poste. Poste dans lequel j'étais passée experte étant
            donné que j’ai eu la chance de faire partie de la première vague
            d’employés.
          </div>
        </div>

        <img className="image-kiosque" src={kiosque} alt="" />

        <div className="social-media-container">
          <a
            href="https://www.facebook.com/AmorinoGelato"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="social-media-icon" />
          </a>
          <a
            href="https://www.instagram.com/amorinogelato"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="social-media-icon" />
          </a>
          <a
            href="https://twitter.com/amorinofrance"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="social-media-icon" />
          </a>
        </div>
      </div>

      <div className="competences-title">
        COMPETENCES DEVELOPPEES & LIEN AVEC LE MASTER
      </div>

      <div className="competence-one-container">
        <div className="competence-one-text-container">
          <div className="amorino-title">S'adapter & S'organiser</div>
          <div className="amorino-text">
            Comme pour l’éducation au rugby,{" "}
            <span>savoir s’adapter à son public</span> est une qualité
            indispensable. Dans le cas présent, j'étais sans cesse confrontée à
            des clients d’âges différents, de milieux différents, de
            nationalités différentes ; mais encore des personnes qui viennent
            seules, en grand groupe, en famille, etc…
            <br />
            <br />
            Outre la clientèle qui demandait beaucoup d’adaptation, il y avait
            également <span>l’environnement dans lequel je travaillais</span>.
            En plein milieu d’un grand centre commercial, il y avait énormément
            de passages mais cela jamais de manière constante ! En effet, nous
            pouvions avoir une dizaine de clients en deux heures, des périodes
            fluides entre midi et deux, pour finir par le gros « rush » à partir
            de quinze heures jusqu’à la fermeture (essentiellement les
            week-end).
          </div>
        </div>
        <div className="competence-one-text-container">
          <div className="amorino-text">
            Dans un tel environnement, <span>l'organisation</span> est le maître
            mot. Nous devions par exemple anticiper les parfums de glace qui
            allaient être les plus demandés pour les avoir à proximité et
            toujours remplir les bacs au maximum pour éviter de devoir aller en
            récupérer à la réserve.
            <br />
            De plus, travaillant dans un espace très restreint, nos mouvements
            étaient limités donc chacun d’entre nous avait son rôle à respecter
            ; nous assistions alors presque à une véritable chorégraphie !{" "}
            <span>
              On s’adapte à notre petit environnement et on s’organise en
              conséquence
            </span>
            .
            <br />
            <br />
            Vous trouverez un exemple d’organisation en cliquant sur le bouton
            ci-dessous : lorsque qu’un grand groupe arrivait et faisait une
            commande conséquente, la personne récupérant la commande prenait des
            membres de l’équipe en charge et déléguait les différentes tâches.
          </div>
          <button
            id="organisation-button"
            className="primary-button"
            onClick={() => setExempleActive(true)}
          >
            AFFICHER EXEMPLE
          </button>
          {exempleActive ? (
            <div className="modal-container">
              <div className="modal">
                <img className="modal-image" src={organisation} alt="" />
              </div>
              <button
                id="close-modal-button"
                className="primary-button"
                onClick={() => setExempleActive(false)}
              >
                RETOUR
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="separation-container">
        <div className="separation" />
      </div>

      <div className="competence-one-container">
        <div className="competence-one-text-container">
          <div className="amorino-title">La patience</div>
          <div className="amorino-text">
            La patience est une qualité non négligeable dans n’importe quel
            domaine, que ce soit personnel ou professionnel. Grâce au rugby,
            j’ai pu travailler ma patience avec les jeunes enfants mais ici,
            dans le monde de la restauration,{" "}
            <span>notre patience est mise à l’épreuve</span> à un tout autre
            niveau :
            <ul>
              <li>
                <span>Lors de l’apprentissage des nouvelles techniques</span>{" "}
                (manipulation de la spatule, étapes de conception d’une glace,
                respect des dosages, ...);
              </li>
              <li>
                <span>Auprès des clients</span> pour leur expliquer le concept
                de la franchise ou lorsqu’ils ne savent pas quels parfums
                choisir par exemple;
              </li>
              <li>
                <span>Auprès des membres de l’équipe</span>, entre autres lors
                de leur formation.
              </li>
            </ul>
          </div>
        </div>
        <div className="competence-one-text-container">
          <div className="amorino-text">
            <span>La définition de la patience</span> est l’aptitude à ne pas
            s’énerver des difficultés et à supporter les défaillances et
            erreurs. C’est également un signe de persévérance et de constance à
            faire quelque chose ou à poursuivre un dessein.
            <br />
            <br />
            Il me semble alors que les exemples cités plus tôt en sont la
            parfaite représentation. En effet, lors de l’apprentissage des
            techniques que requièrent le métier, nous devons{" "}
            <span>nous contenir</span> car elles peuvent être relativement
            complexes et longues à prendre en main. De plus,{" "}
            <span>savoir attendre et rester calme</span> face aux clients est
            strictement impératif, et ce peu importe à quel point le client que
            nous avons en fasse de nous peut se montrer désagréable ou impoli.
          </div>
        </div>
      </div>

      <div className="separation-container">
        <div className="separation" />
      </div>

      <div className="competence-three-container">
        <div
          className="contexte-text-container"
          style={{ backgroundColor: "var(--color-light-pink)" }}
        >
          <div className="amorino-title">L'accompagnement</div>
          <div className="amorino-text">
            La dernière compétence acquise que je souhaitais vous partager est
            celle de <span>l’accompagnement des personnes</span> dans les
            démarches d’analyse de l’expérience, de professionnalisation, de
            bilan de compétences ou de validation d’acquis.
            <br />
            <br />
            Avant l’ouverture d’Amorino dans ce grand centre commercial, mes
            collègues et moi-même avons reçu{" "}
            <span>une formation de plusieurs heures</span> nous apprenant
            principalement à confectionner une glace en forme de fleur et
            composer les pots avec parfums illimités. En plus de cette formation
            pratique, nous devions nous documenter et mémoriser des fiches mises
            sur un Padlet dédié à Amorino. Ces fiches expliquent les méthodes à
            mettre en place, les étapes à respecter, les compositions mais aussi
            les nombreux dosages à connaître par cœur.
            <br />
            <br />
            Plusieurs mois sont passés et de nouveaux employés ont été recrutés.
            N’ayant pas le temps de mettre en place une formation comme celle
            que j’avais reçu, c’était alors nous (les anciens) qui avions pour
            mission de les former. Nous avons donc dû, par nous-même, former les
            nouveaux arrivants et leur apprendre les nombreux rouages du métier.
            Cette opportunité m’a permis de{" "}
            <span>développer ma compétence d’accompagnement d’autrui</span>.
            Celle-ci est requise dans le master « Métier de l’intervention en
            formation des adultes » mais je souhaiterais l’approfondir dans le
            domaine de la formation des adultes à la fin mon master.
          </div>
        </div>

        <ReactPlayer
          className="image-kiosque"
          url="https://www.youtube.com/watch?v=C1AnA16ZiVM&ab_channel=Amorino"
          controls
          width={window.innerWidth > 1100 ? "40vw" : "90vw"}
        />
      </div>

      <div className="competences-title">POUR CONCLURE</div>

      <div className="conclusion-container">
        <div className="conclusion-text-container">
          <div className="amorino-title">
            Ce que cette expérience m'a apporté
          </div>
          <div className="amorino-text">
            Mon premier travail étudiant a eu un{" "}
            <span>impact décisif dans mon orientation universitaire</span>. En
            plus d'avoir été une expérience hors du commun pour moi, parce que
            j'alliais pour la première fois les études et le mon professionnel,
            j'ai pu gagner en maturité mais surtout{" "}
            <span>développer de nombreux savoir-faire</span>.
            <br />
            Mon vécu dans le domaine de la restauration m'a permis de mettre en
            application mes connaisances en formation, ce qui m'a fait réaliser
            que{" "}
            <span>
              je prenais beaucoup plus de plaisir à travailler avec un public
              plus âgé
            </span>
            . Suite à cela, c'est tout naturellement que j'ai fait le choix de
            m'inscrire dans un master dédié à{" "}
            <span>la formation des adultes</span>.
            <br />
            <br />À travers ce portfolio, vous avez découvert la personne que je
            suis et constaté mon évolution.
            <br />
            C'est avec plaisir que j'ai partagé mes expériences passées, ce
            qu'elles m'ont apporté professionnellement et personnellement, mais
            aussi comment elles ont impacté mon orientation dans le supérieur.
            <br />
            <br />
            <div className="contact">
              <MailOutlineIcon className="contact-icon" />
              <div className="contact-text">elea.harrison@hotmail.fr</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Amorino;
