import { useEffect, useRef } from "react";
import styles from "./ShowRecipe.module.css";
import foodImg from "../../icons/traditional-food-around-the-world.jpg";
import ComponentsList from "../Components list/ComponentsList";
import StepsList from "../Steps list/StepsList";
import TopicsList from "../Topics/TopicsList";
import Spinner from "../Spinner/Spinner";

function ShowRecipe(props) {
  const recipeContainerRef = useRef();
  const recipe = props.data;
  useEffect(() => {
    if (props.data.img !== "")
      recipeContainerRef.current.style.backgroundImage = `url(${props.data.img})`;
  }, [props]);
  return (
    <div ref={recipeContainerRef} className={styles.recipeContainer}>
      <div className={styles.topSection}>
        <h2 className={styles.name}>{recipe.name}</h2>
        <div className={styles.topicsContainer}>
          <TopicsList topics={recipe.topics} />
        </div>
        <span className={styles.description}>
          {recipe.description ? recipe.description : ""}
        </span>
        {recipe.sections ? (
          <div className={styles.sectionsContainer}>
            <ComponentsList array={recipe.sections[0].components} />
          </div>
        ) : (
          ""
        )}
      </div>
      {recipe.sections ? (
        <div className={styles.instructions}>
          <StepsList array={recipe.instructions} />
        </div>
      ) : (
        ""
      )}
      {/* <div */}
      {/* className={styles.noResults}
        style={{ backgroundImage: `url(${foodImg})` }}
      > */}
      {/* <h3>Type in OR pick a tag of your taste and start cooking...</h3> */}
      {/* </div> */}
    </div>
  );
}

export default ShowRecipe;
