import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import "./styles.scss"

const AddButton: React.FC<{ setTasksList: Dispatch<SetStateAction<string[]>>, actualTask: string, tasksList: string[], setNewTaskModal: Dispatch<SetStateAction<boolean>> }> = (props) => {
    const handleClick = () => {
        const newList = [...props.tasksList, props.actualTask]
        props.setNewTaskModal(false)
        props.setTasksList(newList)
    }

    return (
        <button onClick={handleClick} className="addButton">Adicionar</button>
    )
}

export default AddButton