import CancelButton from "@/components/atoms/CancelButton/CancelButton"
import "./styles.scss"
import AddButton from "@/components/atoms/AddButton/AddButton"
import { Dispatch, MouseEventHandler, SetStateAction } from "react"

const NewTask: React.FC<{ onClick: MouseEventHandler<HTMLButtonElement>, setActualTask: Dispatch<SetStateAction<string>>, setTasksList: Dispatch<SetStateAction<string[]>>, actualTask: string, tasksList: string[], setNewTaskModal: Dispatch<SetStateAction<boolean>> }> = (props) => {
    const handleChange = (evt: any) => {
        props.setActualTask(evt.target.value)
    }

    return (
        <div className="mainDiv">
            <div className="divTask">
                <h1 className="mainTitle">Nova Tarefa</h1>
                <div className="divInputText">
                    <label htmlFor="titleTask">Título</label>
                    <input onChange={handleChange} className="inputText" id="titleTask" type="text" placeholder="Digite" />
                </div>
                <div className="divButtons">
                    <CancelButton onClick={props.onClick} />
                    <AddButton setNewTaskModal={props.setNewTaskModal} tasksList={props.tasksList} actualTask={props.actualTask} setTasksList={props.setTasksList} />
                </div>
            </div>
        </div>
    )
}

export default NewTask