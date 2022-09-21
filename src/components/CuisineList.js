import styles from "../css-modules/CuisineList.module.css";

function CuisineList(props) {
  const setTagHandler = function (e) {
    e.preventDefault();
    props.tag(e.target.id);
  };

  return (
    <div className={styles.cuisineList}>
      Cuisine
      <div className={styles.list}>
        <ul onClick={setTagHandler}>
          <li id="chinese">Chinese</li>
          <li id="indian">Indian</li>
          <li id="thai">Thai</li>
          <li id="taiwanese">Taiwanese</li>
          <li id="american">American</li>
          <li id="british">British</li>
          <li id="french">French</li>
          <li id="italian">Italian</li>
          <li id="greek">Greek</li>
          <li id="cuban">Cuban</li>
          <li id="spanish">Spanish</li>
          <li id="caribbean">Caribbean</li>
          <li id="mexican">Mexican</li>
          <li id="japanese">Japanese</li>
          <li id="vietnamese">Vietnamese</li>
          <li id="african">African</li>
          <li id="seafood">Seafood</li>
          <li id="meat">Meat</li>
        </ul>
      </div>
    </div>
  );
}
export default CuisineList;
