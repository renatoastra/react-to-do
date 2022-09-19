import styles from './taskInput.module.css';
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { List } from '../List/List';
import { v4 as uuid } from 'uuid'

interface Tasks {
    id: string
    description: string,
    isCompleted: boolean;
}

export function TaskInput() {
    const [newTask, setNewTask] = useState<Tasks>({ id: "", description: "", isCompleted: false });
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const taskAmount = tasks.length;
    const [completedTasksAmount, setCompletedTasksAmount] = useState(0);

    function createNewTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTask]);
        setNewTask({ id: uuid(), description: '', isCompleted: false });
    }

    useEffect(() => {

        const getAllCompletedTasks = tasks.filter(item => {
            return item.isCompleted;
        })

        setCompletedTasksAmount(getAllCompletedTasks.length);
    }, [tasks])

    function deleteTask(taskToDelete: string) {
        const tasksUpdated = tasks.filter(item => {
            return taskToDelete != item.id;
        })
        setTasks(tasksUpdated);
    }
    function handleGetNewTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTask({ id: uuid(), description: event.target.value, isCompleted: false });
    }

    function getTaskCompleted(task: Tasks) {
        const updateCompletedStatus = tasks.map(item => {
            if (task.id == item.id) {

                item.isCompleted = !item.isCompleted;
            }
            return item;
        });

        setTasks(updateCompletedStatus);

        const getAllCompletedTasks = updateCompletedStatus.filter(item => {
            return item.isCompleted;
        })
        setCompletedTasksAmount(getAllCompletedTasks.length);
    }
    return (
        <>
            <div className={styles.container}>
                <form action="">
                    <input placeholder='Adicione uma nova tarefa' onChange={handleGetNewTask} type="text" name="" id={newTask.id} value={newTask.description} />
                    <button onClick={createNewTask} type="submit">
                        <div className={styles.buttonElements}>
                            <p>Criar</p>
                            <PlusCircle />
                        </div>
                    </button>
                </form>
            </div>
            <List task={tasks} taskToComplete={getTaskCompleted} tasksAmount={taskAmount} completedTasksAmount={completedTasksAmount} deleteTask={deleteTask} />
        </>
    )
}