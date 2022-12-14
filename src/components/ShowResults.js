import { useState } from "react";
import styles from "../css-modules/ShowResults.module.css";
import getRecipeInfo from "../modules/getRecipeInfo";

function ShowResults(props) {
  const [active, setActive] = useState("");
  const results = props.data;
  return (
    <ul className={styles.sidebar}>
      {results.length !== 0
        ? results.map((recipe) => {
            return (
              <li
                key={recipe.id}
                onClick={() => {
                  setActive(recipe.id);
                  getRecipeInfo(props.infoSetter, recipe.id);
                }}
                id={recipe.id}
                className={styles.sideRecipe}
                style={
                  active === recipe.id
                    ? { backgroundColor: "yellow" }
                    : { backgroundColor: "rgb(239, 227, 153)" }
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
