import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import { Empty } from "./components/Empty";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import "./global.css";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([] as Task[]);

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();
    const task = { id: uuidv4(), title: newTask, isComplete: false };
    setTaskList([...taskList, task]);
    setNewTask("");
  };

  const hasTask = taskList.length > 0;
  const tasksComplete = taskList.filter((task) => task.isComplete === true);

  const handleToggleTaskCompletion = (id: string) => {
    const tasksComplete = taskList.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );
    setTaskList(tasksComplete);
  };

  const handleRemoveTask = (id: string) => {
    setTaskList(() => taskList.filter((task) => task.id !== id));
  };

  return (
    <>
      <Header />
      <main className={styles.root}>
        <div className={styles.wrapper}>
          <form onSubmit={handleCreateTask} className={styles.form}>
            <input
              type="text"
              name="task"
              placeholder="Adicione uma nova tarefa"
              value={newTask}
              onChange={handleNewTaskChange}
              required
            />
            <button type="submit">
              Criar <PlusCircle size={16} weight={"bold"} />
            </button>
          </form>
          <div className={styles.taskInfo}>
            <div className={styles.completedTasks}>
              <p>Tarefas criadas</p>
              <span>{taskList.length}</span>
            </div>
            <div className={styles.createdTasks}>
              <p>Concluídas</p>
              <span>
                {hasTask ? `${tasksComplete.length} de ${taskList.length}` : 0}
              </span>
            </div>
          </div>
          {hasTask ? (
            taskList.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                isComplete={task.isComplete}
                title={task.title}
                onToggleTaskCompletion={handleToggleTaskCompletion}
                onRemoveTask={handleRemoveTask}
              />
            ))
          ) : (
            <Empty />
          )}
        </div>
      </main>
    </>
  );
}
