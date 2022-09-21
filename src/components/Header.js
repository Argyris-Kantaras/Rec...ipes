import styles from "../css-modules/Header.module.css";
import DietaryList from "./DietaryList";
import CuisineList from "./CuisineList";
import HolidayList from "./HolidayList";
import OccasionList from "./OccasionList";
import { useRef } from "react";
import logo from "../icons/new-logo.png";

function Header(props) {
  const searchInpRef = useRef();

  return (
    <div className={styles.header}>
      <header>
        <div>
          <img className={styles.logo} src={logo} />
          <h1 className={styles.appName}>Rec...ipes</h1>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchInpRef.current.value !== "")
              props.querySetter(searchInpRef.current.value);
          }}
          className={styles.searchForm}
        >
          <input ref={searchInpRef} className={styles.searchInp} type="text" />
          <button className={styles.okBtn}>OK</button>
        </form>
        <div className={styles.quickLists}>
          <CuisineList tag={props.tagSetter} />
          <OccasionList tag={props.tagSetter} />
          <DietaryList tag={props.tagSetter} />
          <HolidayList tag={props.tagSetter} />
        </div>
      </header>
    </div>
  );
}
export default Header;
