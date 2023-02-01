import searchResults from "../handlers/searchResults";
import { useEffect, useRef, useState } from "react";
import ShowResults from "../components/Sidebar/ShowResults";
import Header from "../components/Header/Header";
import styles from "./Homepage.module.css";
import ShowRecipe from "../components/Recipes results/ShowRecipe";
import Footer from "../components/Footer/Footer";
import StartPage from "../components/Start page/StartPage";
import Spinner from "../components/Spinner/Spinner";

function Homepage() {
  const resultsSectionRef = useRef();
  const startPageRef = useRef();
  const [recipes, setRecipes] = useState([]);
  const [tag, setTag] = useState("");
  const [recipeInfo, setRecipeInfo] = useState({});
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tag !== "") searchResults(setRecipes, tag, "", setLoading);
    if (query !== "") searchResults(setRecipes, "", query, setLoading);

    if (recipes.length > 0) {
      startPageRef.current.style.display = "none";
    } else {
      resultsSectionRef.current.style.display = "none";
      startPageRef.current.style.display = "block";
    }
  }, [tag, query]);
  if (loading) return <Spinner />;
  return (
    <div className={styles.mainPage}>
      <Header querySetter={setQuery} tagSetter={setTag} />
      <div ref={resultsSectionRef} className={styles.resultsSection}>
        <ShowResults infoSetter={setRecipeInfo} data={recipes} />
        <ShowRecipe data={recipeInfo} />
      </div>
      <div className={styles.startPage} ref={startPageRef}>
        <StartPage />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
