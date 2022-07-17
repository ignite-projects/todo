import logoToDo from "../../assets/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logoToDo} alt="logo ToDo List" width={126} height={48} />
    </div>
  );
};
