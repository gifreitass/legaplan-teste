"use client"
import { MouseEventHandler } from "react"
import "./styles.scss"

const MainButton: React.FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = (props) => {
    return (
        <button onClick={props.onClick} className="button">Adicionar nova tarefa</button>
    )
}

export default MainButton