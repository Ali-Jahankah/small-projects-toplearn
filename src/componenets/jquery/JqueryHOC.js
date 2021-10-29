import styles from "../../css/jquery.css";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import { useRef, useEffect } from "react";
const JqueryHOC = ({ children }) => {
  const container = useRef(null);
  useEffect(() => {
    $(findDOMNode(container.current)).fadeOut(5000);
  }, []);
  return (
    <div className={styles.image_div} ref={container}>
      {children}
    </div>
  );
};

export default JqueryHOC;
