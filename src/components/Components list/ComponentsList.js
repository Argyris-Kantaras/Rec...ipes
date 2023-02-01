import styles from "./ComponentsList.module.css";

function ComponentsList(props) {
  return (
    <ul className={styles.components}>
      <h2>
        <u>Components</u>
      </h2>
      {props.array
        ? props.array.map((item) => {
            return (
              <li className={styles.listItem} key={item.id}>
                {item.raw_text}
              </li>
            );
          })
        : ""}
    </ul>
  );
}

export default ComponentsList;
