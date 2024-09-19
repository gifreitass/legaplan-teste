import Task from "@/components/molecules/Task/Task"
import "./styles.scss"

const TasksList = () => {
    return (
        <div className="tasksListDiv">
            <p className="taskTitle">Suas tarefas hoje</p>
            <Task />
            <Task />
            <Task />
            <p className="taskTitle">Tarefas finalizadas</p>
        </div>
    )
}

export default TasksList