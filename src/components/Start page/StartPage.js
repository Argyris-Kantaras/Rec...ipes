import styles from "./StartPage.module.css";
import soupIcon from "../../icons/cream-soup.jpg";
import salmon from "../../icons/salmon.jpg";
import lettuce from "../../icons/lettuce.jpg";
import { useEffect, useState } from "react";
import searchResults from "../../handlers/searchResults";

function StartPage() {
  const [results, setResults] = useState([]);
  //   useEffect(() => {
  //     // if (results.length === 0) searchResults(setResults, "", "fish");
  //     console.log(results);
  //   }, []);
  return (
    <div className={styles.startPage}>
      {/* <div className={styles.coverReccomendations}>
        <div className={styles.backBtn}>{"<"}</div>
        <div className={styles.recommendations}>
          {results.length > 0
            ? results.map((result) => {
                return (
                  <div className={styles.resultContainer}>
                    <div>
                      <img src={result.smallImg} />
                      <h4>{result.name}</h4>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <div>{">"}</div>
      </div> */}
      <div className={styles.section}>
        <img src={lettuce} />
        <div className={styles.text}>
          <h2>Always pick the best and fresh vegetables </h2>
          <p>
            Every place and area has some vegetables shop, search one that
            covers your expectations and you will always have a fresh salad on
            your table.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.text}>
          <h2>Find recipes from all around the world that suit your taste!</h2>
          <p>
            Everyone has a prefered choice on food. Just pick your choice among
            the worlds best recipes and cook it off.
          </p>
        </div>
        <img src={soupIcon} />
      </div>
      <div className={styles.section}>
        <img src={salmon} />
        <div className={styles.text}>
          <h2>Choose healthy and high in protein products</h2>
          <p>
            Even if sometimes frozen food might be kind of tasty, in reality we
            cannot compare them to fresh products that offer to us much better
            taste. They are high in proteins and they are full of flavour,
            especially when cooked the right ways.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
