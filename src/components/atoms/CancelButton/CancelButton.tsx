import { MouseEventHandler } from "react"
import "./styles.scss"

const CancelButton: React.FC<{ onClick: MouseEventHandler<HTMLButtonElement>  }> = (props) => {
    return (
        <button onClick={props.onClick} className="cancelButton">Cancelar</button>
    )
}

export default CancelButton