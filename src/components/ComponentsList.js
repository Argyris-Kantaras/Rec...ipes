function ComponentsList(props) {
  return (
    <ul>
      <h3>
        <u>Components</u>
      </h3>
      {props.array
        ? props.array.map((item) => {
            return <li key={item.id}>{item.raw_text}</li>;
          })
        : ""}
    </ul>
  );
}

export default ComponentsList;
