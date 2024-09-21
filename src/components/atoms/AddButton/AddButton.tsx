import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import "./styles.scss"

const AddButton: React.FC<{ onClick: () => void }> = (props) => {
    
    return (
        <button onClick={props.onClick} className="addButton">Adicionar</button>
    )
}

export default AddButton