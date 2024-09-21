"use client"
import Image from "next/image"
import "./styles.scss"
import { MouseEventHandler } from "react"

const Task: React.FC<{ onClick: MouseEventHandler<HTMLImageElement>, children: string, taskName: string }> = (props) => {
    const handleClick = () => {
        console.log(props.taskName)
    }

    return (
        <div className="taskDiv">
            <div className="inputDiv">
                <input onClick={handleClick} type="checkbox" className="checkbox" />
                <p>{props.children}</p>
            </div>
            <Image className="trashImage" onClick={props.onClick} src="/images/trash.png" alt="trash" width={18} height={20} />
        </div>
    )
}

export default Task