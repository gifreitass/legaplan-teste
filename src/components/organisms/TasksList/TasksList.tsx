import "./styles.scss"
import { Dispatch, SetStateAction, useState } from "react"
import { iTask } from "@/components/templates/Homepage"
import Task from "@/components/molecules/Task/Task"

const TasksList: React.FC<{ onClick: () => void, tasksList: iTask[], setTasksList: Dispatch<SetStateAction<iTask[]>>, setTaskId: Dispatch<SetStateAction<number>> }> = (props) => {

    const handleClick = (clickedTask: string) => {
        const newTaskList =[...props.tasksList];
        const taskInList = newTaskList.find((task) => clickedTask === task.name)
        if (taskInList) {
            taskInList.checked = !taskInList.checked
        }

        props.setTasksList(newTaskList)
    }

    return (
        <div className="tasksListDiv">
            <p className="taskTitle">Suas tarefas hoje</p>
            {props.tasksList.map((task, index) => {
                if (!task.checked) {
                    return <Task checked={task.checked} clickCheckbox={handleClick} taskName={task.name} key={index} onClick={() => {
                        props.setTaskId(index)
                        props.onClick()
                    }}>{task.name}</Task>
                }
            })}
            <p className="taskTitle">Tarefas finalizadas</p>
            {props.tasksList.map((task, index) => {
                if (task.checked) {
                    return <Task checked={task.checked} clickCheckbox={handleClick} taskName={task.name} key={index} onClick={() => {
                        props.setTaskId(index)
                        props.onClick()
                    }}>{task.name}</Task>
                }
            })}
        </div>
    )
}

export default TasksList