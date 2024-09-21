"use client"
import { useEffect, useState } from "react"
import MainButton from "../atoms/MainButton/MainButton"
import NavBar from "../organisms/NavBar/NavBar"
import TasksList from "../organisms/TasksList/TasksList"
import "./styles.scss"
import NewTask from "../organisms/NewTask/NewTask"
import DeleteTask from "../organisms/DeleteTask/DeleteTask"

export interface iTask {
    name: string,
    checked: boolean
}

const Homepage = () => {
    const [newTaskModal, setNewTaskModal] = useState<boolean>(false)
    const [deleteTaskModal, setDeleteTaskModal] = useState<boolean>(false)
    const [tasksList, setTasksList] = useState<iTask[]>([])
    const [taskId, setTaskId] = useState<number>(0)

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks")
        if (storedTasks) {
            const storedTasksParsed = JSON.parse(storedTasks)
            if (storedTasksParsed.length > 0) {
                setTasksList(storedTasksParsed)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksList))
    }, [tasksList])

    const handleClickTaskButton = () => {
        if (!newTaskModal) {
            setNewTaskModal(true)
        } else {
            setNewTaskModal(false)
        }  
    }

    const handleClickDeleteButton = () => {
        if (!deleteTaskModal) {
            setDeleteTaskModal(true)
        } else {
            setDeleteTaskModal(false)
        }  
    }

    return (
        <div>
            {newTaskModal && <NewTask setNewTaskModal={setNewTaskModal} tasksList={tasksList} setTasksList={setTasksList} onClick={handleClickTaskButton} />}
            {deleteTaskModal && <DeleteTask setDeleteTaskModal={setDeleteTaskModal} tasksList={tasksList} setTasksList={setTasksList} taskId={taskId} onClick={handleClickDeleteButton} />}
            <NavBar />
            <main>
                <TasksList setTaskId={setTaskId} tasksList={tasksList} onClick={handleClickDeleteButton} setTasksList={setTasksList} />
                <MainButton onClick={handleClickTaskButton} />
            </main>
        </div>
    )
}

export default Homepage