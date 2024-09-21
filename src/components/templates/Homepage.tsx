"use client"
import { useState } from "react"
import MainButton from "../atoms/MainButton/MainButton"
import NavBar from "../organisms/NavBar/NavBar"
import TasksList from "../organisms/TasksList/TasksList"
import "./styles.scss"
import NewTask from "../organisms/NewTask/NewTask"
import DeleteTask from "../organisms/DeleteTask/DeleteTask"

const Homepage = () => {
    const [newTaskModal, setNewTaskModal] = useState<boolean>(false)
    const [deleteTaskModal, setDeleteTaskModal] = useState<boolean>(false)
    const [tasksList, setTasksList] = useState<string[]>([])
    const [actualTask, setActualTask] = useState<string>('')

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
            {newTaskModal && <NewTask setNewTaskModal={setNewTaskModal} tasksList={tasksList} actualTask={actualTask} setTasksList={setTasksList} setActualTask={setActualTask} onClick={handleClickTaskButton} />}
            {deleteTaskModal && <DeleteTask onClick={handleClickDeleteButton} />}
            <NavBar />
            <main>
                <TasksList tasksList={tasksList} onClick={handleClickDeleteButton} />
                <MainButton onClick={handleClickTaskButton} />
            </main>
        </div>
    )
}

export default Homepage