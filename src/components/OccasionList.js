import styles from "../css-modules/OccasionList.module.css";

function OccasionList(props) {
  const setTagHandler = function (e) {
    e.preventDefault();
    props.tag(e.target.id);
  };

  return (
    <div className={styles.occasionList}>
      Occasion/Meal
      <ul className={styles.list}>
        <li>
          Occasion
          <ul onClick={setTagHandler}>
            <li id="branch">brunch</li>
            <li id="bbq">BBQ</li>
            <li id="date_night">date night</li>
            <li id="happy_hour">happy hour</li>
            <li id="weeknight">weeknight</li>
            <li id="special_occasion">Special occasion</li>
            <li id="casual_party">casual party</li>
            <li id="indulgent_sweets">indulgent sweets</li>
          </ul>
        </li>
        <li>
          Meal
          <ul onClick={setTagHandler}>
            <li id="breakfast">breakfast</li>
            <li id="lunch">lunch</li>
            <li id="dinner">dinner</li>
            <li id="sides">sides</li>
            <li id="snacks">snacks</li>
            <li id="bakery_goods">bakery goods</li>
            <li id="appetizers">appetizers</li>
            <li id="drinks">drinks</li>
            <li id="desserts">desserts</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default OccasionList;
