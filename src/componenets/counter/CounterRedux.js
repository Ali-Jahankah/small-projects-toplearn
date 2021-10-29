import styles from "../../css/redux.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../actions/CounterActions";
import { Helmet } from "react-helmet";

const ReduxCounter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.container}>
        <Helmet>
          <title>Counter Redux | Small Projects</title>
        </Helmet>
        <h1>Redux-Counter</h1>
        <div className={styles.counter_container}>
          <button
            type="button"
            className={styles.buttons}
            onClick={() => dispatch(decrease())}
          >
            -
          </button>
          <span className={styles.number}>{counter}</span>
          <button
            type="button"
            className={styles.buttons}
            onClick={() => dispatch(increase())}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default ReduxCounter;
