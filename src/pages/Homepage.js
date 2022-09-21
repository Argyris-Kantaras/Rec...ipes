import searchResults from "../modules/searchResults";
import { useEffect, useState } from "react";
import ShowResults from "../components/ShowResults";
import Header from "../components/Header";
import styles from "../css-modules/Homepage.module.css";
import ShowRecipe from "../components/ShowRecipe";
import getRecipeInfo from "../modules/getRecipeInfo";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [tag, setTag] = useState("");
  const [recipeInfo, setRecipeInfo] = useState({});
  const [query, setQuery] = useState("");
  useEffect(() => {
    // if (tag !== "") searchResults(setRecipes, tag, "");
    // if (query !== "") searchResults(setRecipes, "", query);
  }, [tag, query]);
  return (
    <div className={styles.mainPage}>
      <Header querySetter={setQuery} tagSetter={setTag} />
      <div className={styles.resultsSection}>
        <ShowResults infoSetter={setRecipeInfo} data={recipes} />
        <ShowRecipe data={recipeInfo} />
      </div>
    </div>
  );
}

export default Homepage;
