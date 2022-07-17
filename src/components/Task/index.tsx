import { Trash } from "phosphor-react";
import { FC } from "react";
import styles from "./Task.module.css";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
  onToggleTaskCompletion: (arg: string) => void;
  onRemoveTask: (arg: string) => void;
}

export const Task: FC<Task> = (props) => {
  const { id, title, isComplete, onToggleTaskCompletion, onRemoveTask } = props;

  return (
    <div className={styles.task}>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={isComplete}
          onClick={() => onToggleTaskCompletion(id)}
        />
        <span></span>
        <span>{title}</span>
      </label>
      <button type="button" onClick={() => onRemoveTask(id)}>
        <Trash size={14} />
      </button>
    </div>
  );
};
