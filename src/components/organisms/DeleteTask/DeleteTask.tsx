import AddButton from "@/components/atoms/AddButton/AddButton"
import CancelButton from "@/components/atoms/CancelButton/CancelButton"
import { MouseEventHandler } from "react"
import "./styles.scss"
import DeleteButton from "@/components/atoms/DeleteButton/DeleteButton"

const DeleteTask: React.FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = (props) => {
    return (
        <div className="mainDiv">
            <div className="divTask">
                <h1 className="mainTitle">Deletar tarefa</h1>
                <p className="textDelete">Tem certeza que você deseja deletar essa tarefa?</p>
                <div className="divButtons">
                    <CancelButton onClick={props.onClick} />
                    <DeleteButton />
                </div>
            </div>
        </div>
    )
}

export default DeleteTask