import CancelButton from "@/components/atoms/CancelButton/CancelButton"
import "./styles.scss"
import DeleteButton from "@/components/atoms/DeleteButton/DeleteButton"
import { Dispatch, SetStateAction } from "react"
import { iTask } from "@/components/templates/Homepage"

const DeleteTask: React.FC<{ onClick: () => void, taskId: number, setTasksList: Dispatch<SetStateAction<iTask[]>>, tasksList: iTask[], setDeleteTaskModal: Dispatch<SetStateAction<boolean>> }> = (props) => {
    const handleClick = () => {
        if (props.taskId >= 0) {
            const newTasks = props.tasksList.filter((_, index) => index !== props.taskId)
            props.setDeleteTaskModal(false)
            props.setTasksList(newTasks)
        }
    }
    
    return (
        <div className="mainDiv">
            <div className="divTask">
                <h1 className="mainTitle">Deletar tarefa</h1>
                <p className="textDelete">Tem certeza que você deseja deletar essa tarefa?</p>
                <div className="divButtons">
                    <CancelButton onClick={props.onClick} />
                    <DeleteButton onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default DeleteTask