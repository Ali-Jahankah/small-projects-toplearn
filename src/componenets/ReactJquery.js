import styles from "../css/jquery.css";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import { useRef } from "react";
import JqueryHOC from "./JqueryHOC";

const ReactJquery = () => {
  const image = useRef(null);
  const showing = () => {
    $(findDOMNode(image.current)).slideToggle();
  };
  return (
    <>
      <JqueryHOC>
        <img src="/images/2$.jpg" alt="pentagram"></img>
        <h1>666</h1>
      </JqueryHOC>
      <div className={styles.image_div} ref={image}>
        <img src="/images/1$.jpg" alt="pentagram"></img>
      </div>
      <button onClick={showing}>Toggle 666</button>
    </>
  );
};

export default ReactJquery;
