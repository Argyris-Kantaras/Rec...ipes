import styles from "./DietaryList.module.css";

function DietaryList(props) {
  const setTagHandler = function (e) {
    e.preventDefault();
    props.tag(e.target.id);
  };

  return (
    <div className={styles.dietaryList}>
      Dietary/difficulty
      <ul className={styles.list}>
        <li>
          Difficulty
          <ul onClick={setTagHandler}>
            <li id="easy">easy</li>
            <li id="under_15_minutes">under 15 min</li>
            <li id="under_30_minutes">under 30 min</li>
            <li id="under_45_minutes">under 45 min</li>
            <li id="under_1_hour">under 1 hour</li>
            <li id="5_ingredients_or_less">5 or less ingr/nts</li>
          </ul>
        </li>
        <li>
          Dietary
          <ul onClick={setTagHandler}>
            <li id="healthy">healthy</li>
            <li id="pescaterian">pescaterian</li>
            <li id="vegetarian">vegan</li>
            <li id="low_carb">low carb</li>
            <li id="low_calorie">low calorie</li>
            <li id="low_sugar">low sugar</li>
            <li id="gluten_free">gluten free</li>
            <li id="high_protein">high protein</li>
            <li id="high_fiber">high fiber</li>
            <li id="dairy_free">dairy free</li>
            <li id="keto">keto</li>
            <li id="contains_alcohol">contains alcohol</li>
          </ul>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
export default DietaryList;
