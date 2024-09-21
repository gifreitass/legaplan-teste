import Task from "@/components/molecules/Task/Task"
import "./styles.scss"
import { MouseEventHandler } from "react"

const TasksList: React.FC<{ onClick: MouseEventHandler<HTMLImageElement>, tasksList: string[] }> = (props) => {

    return (
        <div className="tasksListDiv">
            <p className="taskTitle">Suas tarefas hoje</p>
            {props.tasksList.map((task, index) => {
                return <Task taskName={task} key={index} onClick={props.onClick}>{task}</Task>
            })}
            <p className="taskTitle">Tarefas finalizadas</p>
        </div>
    )
}

export default TasksList