import React from "react";
import "./Rugby.css";
import { useHistory } from "react-router-dom";

import ScrollHelper from "../helpers/ScrollHelper";

import journal from "../images/rugby_journal.jpg";
import diplome from "../images/rugby_diplome.jpg";
import groupe_ext from "../images/rugby_groupe_ext.jpg";
import groupe_int from "../images/rugby_groupe_int.jpg";

function Rugby() {
  let history = useHistory();

  return (
    <>
      <ScrollHelper />
      <div className="rugby-one">
        <div className="rugby-one-text-container">
          <div className="rugby-title">2008 – 2009 : École primaire</div>
          <div className="rugby-text">
            À l’âge de mes 9 ans, j’ai découvert le <span>rugby à XIII</span>{" "}
            par l’intermédiaire de mon école. En effet, à partir de la classe de
            CM1, et sur la fin de l’année scolaire, nous étions obligés de
            participer à un tournoi inter-scolaire.
            <br />
            <br />
            Si on m’avait dit que ce sport prendrait une si grande place dans ma
            vie encore treize ans plus tard, j’aurais franchement ri !
            Compétitrice comme je suis, <span>je me suis pris au jeu</span> car
            perdre n’était alors pas une option. Il fallait impérativement
            gagner car, à l’époque, je n’étais pas une grande fan de notre cher
            Pierre de Coubertin et de sa fameuse maxime : « L’important c’est de
            participer ».
            <br />
            <br />
            Hélas, lorsque mes années en école primaire ce sont terminées, j’ai
            perdu contact avec ce sport…
          </div>
        </div>
      </div>

      <div className="rugby-two">
        <div className="rugby-one-text-container">
          <div className="rugby-title">2011 - 2016 : Caluire Rugby League</div>
          <div className="rugby-text">
            C’est après y avoir été initié en école primaire comme moi, en 2011,
            que mon petit frère s’est{" "}
            <span>inscris dans un club de rugby à XIII</span>. Ce dernier étant
            naissant, il y avait une forte demande de bénévoles pour animer les
            entraînements et ce n’est alors que quelques mois plus tard qu’une
            formation était proposée aux familles pour devenir éducateur
            sportif.
            <br />
            <br />
            De ce fait, mon père et moi-même avons suivi cette formation et
            sommes alors devenus des{" "}
            <span>éducateurs de rugby à XIII diplômés</span>. Il est intéressant
            de souligner que mon père est un fan inconditionnel de football et
            qu’il s’est investi dans ce nouveau sport afin que nous puissions
            partager des moments à trois : mon frère pratiquait tandis que nous
            lui enseignons.
            <br />
            <br />
            En l’espace de cinq ans, le club a connu une croissance folle ! Les
            bénévoles se faisaient de plus en plus nombreux et nous étions alors
            en mesure d’attribuer des tâches spécifiques à chacun
            (entraînements, restauration, administration, …).
          </div>
        </div>
        <div className="rugby-image-container">
          <img className="rugby-image" id="image-one" src={diplome} alt="" />
        </div>
        <div className="rugby-image-container">
          <img className="rugby-image" src={journal} alt="" />
        </div>
      </div>

      <div className="rugby-two">
        <div className="rugby-one-text-container">
          <div className="rugby-title">
            2017 - 2018 : Charpennes Tonkin Tigers Rugby League
          </div>
          <div className="rugby-text">
            Revenue en France pour poursuivre mes études après une année passée
            en Guadeloupe, j’habite désormais chez mon père dans le quartier du
            Tonkin, à Villeurbanne. Celui-ci ayant avec une réputation négative,
            mon père décide donc de monter{" "}
            <span>son propre club de rugby à XIII</span> pour permettre aux
            enfants du coin d’avoir une activité qui leur permette de s’épanouir
            et aux parents de pouvoir souffler le temps d’une matinée.
            <br />
            <br />
            Étant seul dans ce projet, je me suis portée volontaire pour l’aider
            à créer son club le temps d’une année.{" "}
            <span>Je m’occupais du côté sportif</span> (construction des
            entraînements, des échauffements et de petits jeux) tandis que{" "}
            <span>mon père se chargeait de faire connaître notre projet</span>.
            Tous les samedis matin, nous étions présents dans un petit parc du
            Tonkin et nous faisions découvrir notre sport à de jeunes enfants
            qui venaient avec le sourire.
            <br />
            <br />
            Le scénario qui s’était produit à Caluire se reproduisait et les
            enfants se faisaient de plus en plus nombreux ! C’est donc tout
            naturellement que les parents, les grands-parents, voire même les
            éducateurs d’autres clubs voulaient participer à{" "}
            <span>la vie associative des Tigers</span>. Contre toutes attentes,
            après quatre ans d’existence et un travail acharné, nous comptons
            désormais une bonne cinquantaine de licenciés parmi nous.
          </div>
        </div>
        <div className="rugby-image-container">
          <img className="rugby-image" id="image-one" src={groupe_ext} alt="" />
        </div>
        <div className="rugby-image-container">
          <img className="rugby-image" src={groupe_int} alt="" />
        </div>
      </div>

      <div className="big-title">
        COMPETENCES DEVELOPPEES & LIEN AVEC LE MASTER
      </div>

      <div className="rugby-three" style={{ paddingTop: "2rem" }}>
        <div className="rugby-one-text-container">
          <div className="rugby-title">L'intervention</div>
          <div className="rugby-text">
            La première compétence est celle <span>d’intervention</span> face à
            des publics variés lors de séquences de formation en présentiel
            et/ou en distanciel. Être deux éducateurs face à une vingtaine de
            jeunes enfants n’est pas une mission aisée car notre travail
            consiste à enseigner le rugby à XIII à ces futurs rugbymen parfois
            un peu dissipés. À l’époque, je n’étais encore qu’une adolescente et
            mon associé était un père de famille, nous formions un binôme très
            complémentaire car <span>nous nous adaptions</span>, à la fois l’un
            à l’autre, mais également aux enfants. Avant les entraînements, nous
            faisions un point pour savoir ce que nous voulions faire. Chacun
            ayant son propre point de vue, nous faisions alors en sorte
            d’apporter chacun notre pierre à l’édifice. Puis lorsque nous étions
            tombés d’accord, il fallait alors retranscrire les exercices de
            sorte à ce que les enfants les comprennent et s’y intéressent.
            <br />
            Vous trouverez un exemple de séance réalisée avec les Tigers en
            distanciel en cliquant sur{" "}
            <a
              href="https://drive.google.com/drive/folders/1EHRL1lYdoFtlGWsEUnQ_bjGZm1hNcgc8"
              target="_blank"
              rel="noreferrer"
            >
              ce lien
            </a>
            .
            <br />
            <br />
            L’université nous a très rapidement mis dans le bain en termes
            d’intervention. Dès le premier semestre,{" "}
            <span>les travaux de groupe à l’oral</span> sont omniprésents et
            cela est d’autant plus vrai en Master. En effet, avec maintenant
            quatre années d’expérience, nous nous devons d’innover dans nos
            méthodes d’intervention. De plus, avec la situation sanitaire
            actuelle, nous sommes confrontés au cours en distanciel et donc aux{" "}
            <span>présentations orales à distance</span>. Ce nouvel exercice
            nous a montré que capter l’attention d’adultes est très compliqué et
            nous pousse donc à redoubler d’efforts lors de nos interventions par
            crainte que l’ennui ne puisse être présent.
          </div>
        </div>
      </div>

      <div className="rugby-three">
        <div className="rugby-one-text-container">
          <div className="rugby-title">
            Réflexivité et innovation pédagogique
          </div>
          <div className="rugby-text">
            Lorsqu’on est éducateur auprès d’enfants ayant moins de dix ans, il
            est très souvent difficile de <span>capter leur attention</span>,
            surtout une matinée entière. C’est pour cela que nous devons
            perpétuellement <span>perfectionner nos approches</span> quant aux
            exercices que nous souhaitons aborder. Il est aussi nécessaire de
            toujours se poser la question{" "}
            <span>« pourquoi fait-on cet exercice ? »</span>. Quel que soit le
            public, enfants ou adultes, si vous donnez une consigne sans
            expliquer le but de l’exercice, la motivation et l’attention seront
            moindres. C’est pour cela que nous devons sans cesse remettre en
            question notre manière de travailler et améliorer nos méthodes.
            <br />
            <br />
            Avec ce master, j’ai pu <span>me remettre en question</span> lors de
            la réalisation des projets{" "}
            <a
              href="https://drive.google.com/drive/folders/1f5eIEPph8TwRAWRTDqN7qUh1TfVZHZs6"
              target="_blank"
              rel="noreferrer"
            >
              ci-joints
            </a>{" "}
            et ce presque toujours avec les interrogations suivantes :
            <ul>
              <li>Pourquoi est-ce que je fais cela ?</li>
              <li>Quel est mon but ?</li>
              <li>Qu’est-ce que je veux montrer ?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rugby-three" style={{ paddingBottom: "5rem" }}>
        <div className="rugby-one-text-container">
          <div className="rugby-title">
            Conception de dispositifs, d'animations d'équipe, de partenariats
          </div>
          <div className="rugby-text">
            Cette compétence est étroitement liée à la précédente car sans
            réflexivité et innovation pédagogique, je ne serais pas en capacité
            de <span>concevoir une formation</span> ou{" "}
            <span>d’animer une équipe</span>. En tant qu’éducatrice de rugby,
            j’ai passé du temps à créer des échauffements et des entraînements
            toujours plus divertissants ; et cela en me documentant ou en allant
            chercher l’information auprès de personnes plus compétentes.
            <br />
            <br />
            Au risque de me répéter, j’ai travaillé avec des enfants âgés de
            moins de dix ans et ce sont de véritables piles électriques ! C’est
            pour cela que nous devons trouver{" "}
            <span>des méthodes les plus innovantes possibles</span> pour qu’ils
            puissent apprendre tout en s’amusant et en se dépassant. C’est
            toujours très compliqué de garder l’attention d’un public si jeune
            mais c’est donc extrêmement gratifiant quand on commence à y
            arriver. Laissez-moi vous partager les ingrédients qui m’ont permis
            d’y parvenir :
            <ul>
              <li>Être dynamique</li>
              <li>S’exprimer distinctement</li>
              <li>Donner des explications claires et concises</li>
              <li>Être à l’écoute</li>
              <li>Accompagner, encourager et motiver</li>
            </ul>
            <br />
            Grâce au master Métier de l’intervention en formation des adultes,
            j’ai également pu développer mes compétences de{" "}
            <span>conception de dispositifs</span>, mais pour un public plus
            âgé. En témoignent les travaux que vous pouvez trouver sur{" "}
            <a
              href="https://drive.google.com/drive/folders/1iPOeynmB10z5r5tpWGDdfz5fLwqmdkos"
              target="_blank"
              rel="noreferrer"
            >
              ce lien
            </a>
            .
          </div>
        </div>
      </div>

      <div className="big-title">POUR CONCLURE</div>

      <div className="rugby-three" style={{ paddingTop: "2rem" }}>
        <div className="rugby-one-text-container">
          <div className="rugby-title">Ce que cette expérience m'a apporté</div>
          <div className="rugby-text">
            Le rugby a réellement été un tournant dans ma vie. Il m'a non
            seulement permis d'apporter une expérience supplémentaire dans mon
            curriculum vitae, mais il m'a également apporté de{" "}
            <span>nombreuses compétences</span> sur les plans professionnel et
            personnel. Parmis ces compétences, on peut en retrouver dans le
            master que je fais actuellement. En effet, cette expérience de
            bénévole m'a influencée dans mon choix d'études supérieures et m'a
            orientée vers les <span>sciences de l'éducation</span>.
            <br />
            <br />
            Mon passé associatif m'a certainement guidé vers ma licence, mais
            c'est mon tout premier travail étudiant qui m'a conforté dans le
            choix de mon master.
          </div>
          <button
            className="primary-button"
            style={{ marginTop: "2.5rem" }}
            onClick={() => history.push("/Amorino")}
          >
            MON EXPERIENCE CHEZ AMORINO
          </button>
        </div>
      </div>
    </>
  );
}

export default Rugby;
