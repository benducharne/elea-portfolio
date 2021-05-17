import React from "react";
import "./ParcoursItem.css";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

function ParcoursItem({
  children,
  isFirst,
  isLast,
  title,
  date,
  id,
  goto,
  image,
}) {
  let history = useHistory();
  return (
    <div
      className={isFirst ? "parcours-item-first" : "parcours-item-not-first"}
      id={id}
    >
      <div className="parcours-text-container">
        <div className="parcours-title">{title}</div>
        <div className="parcours-text">{children}</div>
        {isLast ? (
          <button
            className="primary-button"
            style={{ marginTop: "3em" }}
            onClick={() => history.push("/Rugby")}
          >
            PARLONS RUGBY !
          </button>
        ) : (
          <Link to={goto} smooth={true} duration={1000}>
            <button className="primary-button" style={{ marginTop: "3em" }}>
              SUIVANT
            </button>
          </Link>
        )}

        <div className="parcours-date">{date}</div>
        <img className="parcours-image" src={image} alt=""></img>
      </div>
    </div>
  );
}

export default ParcoursItem;
