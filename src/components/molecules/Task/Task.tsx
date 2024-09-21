"use client"
import Image from "next/image"
import "./styles.scss"

const Task: React.FC<{ onClick: () => void, children: string, taskName: string, clickCheckbox: (task: string) => void, checked: boolean }> = (props) => {

    return (
        <div className="taskDiv">
            <div onClick={() => props.clickCheckbox(props.taskName)} className="inputDiv">
                <input checked={props.checked} type="checkbox" className="checkbox" />
                <p>{props.children}</p>
            </div>
            <Image className="trashImage" onClick={props.onClick} src="/images/trash.png" alt="trash" width={18} height={20} />
        </div>
    )
}

export default Task