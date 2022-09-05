import React from "react";
import "./Parcours.css";

import ParcoursItem from "../components/ParcoursItem/ParcoursItem";

import image_1999 from "../images/parcours_1999.jpg";
import image_2004 from "../images/parcours_2004.jpg";
import image_2005 from "../images/parcours_2005.jpg";
import image_2016 from "../images/parcours_2016.jpg";
import image_2017 from "../images/parcours_2017.jpg";
import image_2020 from "../images/parcours_2020.jpg";

function Parcours() {
  return (
    <div className="parcours-container">
      <ParcoursItem
        isFirst={true}
        isLast={false}
        title="Naissance en Guadeloupe"
        date="1999"
        id="1999"
        goto="2004"
        image={image_1999}
      >
        Je m’appelle <span>Elëa Irlande Victoria Harrison</span>. Pourquoi
        suis-je en train de vous redonner mon nom ? Plus encore, pourquoi cette
        fois ci je vous donne également mes autres prénoms ?<br />
        <br /> Et bien tout simplement parce qu’ils représentent mes origines et
        sont par conséquent très chers à mes yeux. <span>« Irlande »</span> en
        hommage à mon arrière-grand-mère guadeloupéenne et{" "}
        <span>« Victoria »</span> en hommage à la deuxième reine d’Angleterre.
        Vous l’aurez donc deviné :{" "}
        <span>je suis métissée et j’ai la chance d’être bilingue</span>.
      </ParcoursItem>

      <ParcoursItem
        isFirst={false}
        isLast={false}
        title="Naissance de mon frère"
        date="2004"
        id="2004"
        goto="2005"
        image={image_2004}
      >
        Cinq ans après ma naissance, c'est au tour de{" "}
        <span>mon frère Gabriel</span> de venir au monde. Si je vous le présente
        ici, c'est parce que nous avons toujours eu une relation fusionnelle et
        vous verrez que cela a son importance !<br />
        <br />
        En effet, c'est par son intermédiaire que mon père et moi-même nous
        sommes intéressés au <span>rugby à XIII</span> et que nous sommes ainsi
        devenus <span>bénévoles</span>.
      </ParcoursItem>

      <ParcoursItem
        isFirst={false}
        isLast={false}
        title="Déménagement à Lyon"
        date="2005"
        id="2005"
        goto="2016"
        image={image_2005}
      >
        En raison d'une mutation professionnelle, ma mère et mon petit frère
        sont venus s'installer à <span>Lyon</span> dans le quartier de la{" "}
        <span>Croix-Rousse</span>. Mon père ayant des obligations sur place, ce
        n'est que trois mois plus tard que nous les avons rejoint.
        <br />
        <br />Y ayant fait la plus grande partie de ma scolarité et y ayant
        rencontré la majorité de mes amis, j'affectionne particulière ce
        quartier, et ce encore aujourd'hui.
      </ParcoursItem>

      <ParcoursItem
        isFirst={false}
        isLast={false}
        title="Retour en Guadeloupe"
        date="2016"
        id="2016"
        goto="2017"
        image={image_2016}
      >
        Après pas loin de <span>onze années passées à Lyon</span>, ma mère s’est
        vue proposer une nouvelle opportunité professionnelle sur ses terres
        natales. Ajoutez à cela le fait qu'elle avait le mal du pays et c’est
        tout naturellement que je suis <span>repartie en Guadeloupe</span> pour
        mon année de Terminale.
        <br />
        <br />
        Ce changement à été <span>un véritable challenge</span>. En effet, la
        Terminale étant une année charnière, il a fallu que je{" "}
        <span>m'adapte</span> très rapidement à ce nouvel environnement.
      </ParcoursItem>

      <ParcoursItem
        isFirst={false}
        isLast={false}
        title="Retour à Lyon pour mes études supérieures"
        date="2017"
        id="2017"
        goto="2020"
        image={image_2017}
      >
        Suite à l’obtention de mon baccalauréat ES, je me suis orientée dans un
        portail en{" "}
        <span>
          sciences de l’éducation, psychologie, sociologie et sciences du
          langage
        </span>
        .
        <br />
        <br />
        Choisir mes études supérieures n'a pas été chose facile et c'est pour
        cela que je me suis tournée vers un portail qui touche à des sujets
        variés. Cependant,{" "}
        <span>
          mon expérience en tant que bénévole dans un club de rugby à XIII
        </span>{" "}
        m'a énormément aidé dans mon choix et c'est pour cette raison que j'ai
        décidé de la partager avec vous.
      </ParcoursItem>

      <ParcoursItem
        isFirst={false}
        isLast={true}
        title="Obtention de ma licence"
        date="2020"
        id="2020"
        image={image_2020}
      >
        Suite à ma licence, je me suis orientée vers un master intitulé{" "}
        <span>« Métier de l'intervention en formation des adultes »</span>.
        C'est après mon expérience chez <span>Amorino</span> en 2018 que j'ai
        opté pour un changement radical en passant de la formation pour jeune
        public à un <span>public adulte</span>. <br />
        <br />
        C'est après vous avoir parlé de mon passé de bénévole que vous
        découvrirez comment et pourquoi mon orientation a bifurqué.
      </ParcoursItem>
    </div>
  );
}

export default Parcours;
