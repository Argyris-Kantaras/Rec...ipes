function StepsList(props) {
  return (
    <ul>
      <h3>
        <u>Steps</u>
      </h3>
      {props.array
        ? props.array.map((item) => {
            return (
              <li key={item.id}>
                {item.position} {")"} {item.display_text}
              </li>
            );
          })
        : ""}
    </ul>
  );
}

export default StepsList;
