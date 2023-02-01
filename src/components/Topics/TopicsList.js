import styles from "./TopicsList.module.css";

function TopicsList(props) {
  return (
    <div>
      {props.topics
        ? props.topics.map((topic) => {
            return (
              <div key={topic.name} className={styles.topics} id={topic.name}>
                {topic.name}
              </div>
            );
          })
        : ""}
    </div>
  );
}
export default TopicsList;
