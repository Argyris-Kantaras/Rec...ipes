import styles from "./StepsList.module.css";
import spoon from "../../icons/spoon.png";

function StepsList(props) {
  return (
    <ul className={styles.stepsList}>
      <h2>
        <u>Step by step</u>
      </h2>
      {props.array
        ? props.array.map((item) => {
            return (
              <li className={styles.listItem} key={item.id}>
                <h3 style={{ color: "rgb(65, 207, 143)" }}>
                  <img className={styles.dotImg} src={spoon} />
                  <u>Step {item.position}</u>
                </h3>
                {item.display_text}
              </li>
            );
          })
        : ""}
    </ul>
  );
}

export default StepsList;
