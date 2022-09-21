import styles from "../css-modules/HolidayList.module.css";

function HolidayList(props) {
  const setTagHandler = function (e) {
    e.preventDefault();
    props.tag(e.target.id);
  };

  return (
    <div className={styles.holidayList}>
      Holidays
      <ul onClick={setTagHandler} className={styles.list}>
        <li id="christmas">Christmas</li>
        <li id="easter">Easter</li>
        <li id="fourth_of_july">4th July</li>
        <li id="black_history_month">Black history month</li>
        <li id="halloween">Halloween</li>
        <li id="thanksgiving">Thanksgiving</li>
        <li id="juneteenth">Juneteenth</li>
        <li id="valentines_day">Valentines day</li>
        <li id="st_patrick_s_day">St. Patrick's day</li>
        <li id="lunar_new_year">Lunar new year</li>
        <li id="mothers_day">Mothers day</li>
      </ul>
    </div>
  );
}

export default HolidayList;
