import { Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './taskItem.module.css'

interface TaskItemProps {
    description: string;
    deleteTask: () => void;
    taskToComplete: () => void;

}

export function TaskItem({ description, deleteTask, taskToComplete }: TaskItemProps) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className={!isChecked ? styles.taskLabel : styles.taskFinished}>
            <label className={styles.bcontain}>
                <input onClick={taskToComplete} onChange={(e) => setIsChecked(e.target.checked)} type="checkbox" />
            </label>
            <p>{description}</p>
            <button onClick={deleteTask}>
                <Trash />
            </button>
        </div>
    )
}