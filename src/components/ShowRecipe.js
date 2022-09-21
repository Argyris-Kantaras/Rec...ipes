import { useEffect, useRef } from "react";
import styles from "../css-modules/ShowRecipe.module.css";
import foodImg from "../icons/traditional-food-around-the-world.jpg";
import ComponentsList from "./ComponentsList";
import StepsList from "./StepsList";
import TopicsList from "./TopicsList";

function ShowRecipe(props) {
  const recipeContainerRef = useRef();
  const recipe = props.data;
  useEffect(() => {
    if (props.data.img !== "")
      recipeContainerRef.current.style.backgroundImage = `url(${props.data.img})`;
  }, [props]);
  return (
    <div ref={recipeContainerRef} className={styles.recipeContainer}>
      <h2>{recipe.name}</h2>
      <div className={styles.topicsContainer}>
        <TopicsList topics={recipe.topics} />
      </div>
      <div className={styles.description}>
        {recipe.description ? recipe.description : ""}
      </div>
      {recipe.sections ? (
        <div className={styles.sectionsContainer}>
          <ComponentsList array={recipe.sections[0].components} />
        </div>
      ) : (
        <div
          className={styles.noResults}
          style={{ backgroundImage: `url(${foodImg})` }}
        >
          <h3>Type in OR pick a tag of your taste and start cooking...</h3>
        </div>
      )}
      {recipe.sections ? (
        <div className={styles.instructions}>
          <StepsList array={recipe.instructions} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShowRecipe;
