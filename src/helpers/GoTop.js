import React, { useState, useEffect, useCallback } from "react";
import "./GoTop.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { animateScroll as scroll } from "react-scroll";

function GoTop() {
  const [buttonActive, setButtonActive] = useState(false);

  const onScroll = useCallback(
    (e) => {
      if (window.scrollY > 80) {
        setButtonActive(true);
      } else {
        setButtonActive(false);
      }
    },
    [setButtonActive]
  );

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <div
        className={
          buttonActive ? "gotop-button-active" : "gotop-button-inactive"
        }
        onClick={buttonActive ? () => scroll.scrollToTop() : null}
      >
        <ExpandLessIcon className="gotop-icon" />
      </div>
    </>
  );
}

export default GoTop;
