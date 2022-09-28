import accountImg from "../icons/account-icon.png";
import styles from "../css-modules/Account.module.css";

function Account() {
  return (
    <div className={styles.account}>
      <img className={styles.accountImg} src={accountImg} alt="no-image" />
      <label>Argy</label>
    </div>
  );
}

export default Account;
