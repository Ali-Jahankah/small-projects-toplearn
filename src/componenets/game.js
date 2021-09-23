import styles from "../css/game.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../actions/courseActions";
import { withRouter } from "react-router-dom";

const Game = ({ match, history }) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const game = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(getCourse(match.params.id));
  }, []);

  if (errors) {
    history.push("/Games");
    return null;
  }
  return (
    <>
      <div className={styles.game_container}>
        <div className={styles.info_div}>
          <h1 className={styles.game_info}>Name: {game.name}</h1>
          <h1 className={styles.game_info}>Year: {game.year}</h1>
          <h1 className={styles.game_info}>Type: {game.type}</h1>
          <h1 className={styles.game_info}>Price: ${game.price}</h1>
        </div>
        <div className={styles.image_div}>
          <img src={game.src} alt={game.name}></img>
        </div>
      </div>
    </>
  );
};

export default withRouter(Game);
