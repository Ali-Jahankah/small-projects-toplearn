import styles from "../css/game.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../actions/courseActions";

const Game = ({ match }) => {
  const game = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourse(match.params.id));
  }, []);
  return (
    <div className={styles.game_container}>
      <div className={styles.info_div}>
        <h1 className={styles.game_info}>Name: {game.name}</h1>
        <h1 className={styles.game_info}>Year: {game.year}</h1>
        <h1 className={styles.game_info}>Type: {game.type}</h1>
        <h1 className={styles.game_info}>Price: {game.price}</h1>
      </div>
      <div className={styles.image_div}>
        <img src={game.src} alt={game.name}></img>
      </div>
    </div>
  );
};

export default Game;
