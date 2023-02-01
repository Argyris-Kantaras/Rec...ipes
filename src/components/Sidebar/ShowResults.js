import { useEffect, useState } from "react";
import styles from "./ShowResults.module.css";
import getRecipeInfo from "../../handlers/getRecipeInfo";

function ShowResults(props) {
  const [active, setActive] = useState("");
  const [clicked, setClicked] = useState(false);
  const results = props.data;
  useEffect(() => {
    if (!clicked && props.data.length > 0) {
      setActive(results[0].id);
      getRecipeInfo(props.infoSetter, results[0].id, props.setLoader);
    }
  }, [props]);
  return (
    <ul className={styles.sidebar}>
      {results.length !== 0
        ? results.map((recipe) => {
            return (
              <li
                key={recipe.id}
                onClick={() => {
                  setClicked(true);
                  setActive(recipe.id);
                  getRecipeInfo(props.infoSetter, recipe.id);
                }}
                id={recipe.id}
                className={styles.sideRecipe}
                style={
                  active === recipe.id
                    ? { backgroundColor: "rgb(65, 207, 143)" }
                    : null
                }
              >
                <img
                  className={styles.icon}
                  alt="no image"
                  src={recipe.smallImg}
                />
                <label className={styles.name}>{recipe.name}</label>
              </li>
            );
          })
        : "No results yet"}
    </ul>
  );
}

export default ShowResults;
