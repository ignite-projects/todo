import imgClipboard from "../../assets/clipboard.svg";
import styles from "./Empty.module.css";

export const Empty = () => {
  return (
    <div className={styles.root}>
      <img src={imgClipboard} alt="clipboard" width={56} height={56} />
      <div className={styles.contents}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
};
