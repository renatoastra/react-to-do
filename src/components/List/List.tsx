import styles from './list.module.css'
import clipeImg from '../../assets/Clipboard.png'
import { TaskItem } from '../TaskItem/TaskItem';

interface Tasks {
    id: string;
    description: string;
    isCompleted: boolean;
}
interface ListProps {
    task: Tasks[];
    tasksAmount: number;
    deleteTask: (taskToDelete: string) => void;
    taskToComplete: (task: Tasks) => void;
    completedTasksAmount: number;

}

export function List({ task, tasksAmount, deleteTask, taskToComplete, completedTasksAmount }: ListProps) {
    const hasTask = task.length > 0;

    return (
        <div className={styles.listWrapper}>
            <header>
                <div className={styles.taskCount}>
                    <span>Tarefas criadas</span>
                    <button>{tasksAmount}</button>
                </div>
                <div className={styles.taskFinished}>
                    <span>Concluídas</span>
                    <button>{hasTask ? completedTasksAmount > 0 ? `${completedTasksAmount} de ${tasksAmount} tarefas concluídas` : completedTasksAmount : 0}</button>
                </div>
            </header>

            <div className={styles.noTasks} style={{ display: !hasTask ? 'flex' : 'none' }}>

                <div className={styles.sla}>
                    <img src={clipeImg} alt="" />
                    <div className={styles.text}>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </div>
            </div>
            <div className={styles.hasTask} style={{ display: hasTask ? 'block' : 'none' }}>
                {task.map((item) => {
                    return (
                        <TaskItem
                            key={item.id}
                            deleteTask={() => { deleteTask(item.id) }}
                            description={item.description}
                            taskToComplete={() => { taskToComplete(item) }}
                        />
                    )
                })}
            </div>
        </div >
    )
}