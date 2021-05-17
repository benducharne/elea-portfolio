import React, { useState, useEffect, useCallback } from "react";
import "./ScrollHelper.css";

function ScrollHelper() {
  const [active, setActive] = useState(true);

  const onScroll = useCallback(
    (e) => {
      if (window.scrollY === 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    },
    [setActive]
  );

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <div
        className={active ? "scroll-helper-active" : "scroll-helper-inactive"}
      >
        Scrollez vers le bas
      </div>
    </>
  );
}

export default ScrollHelper;
