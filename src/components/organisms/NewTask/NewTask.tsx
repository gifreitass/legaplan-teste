"use client"
import CancelButton from "@/components/atoms/CancelButton/CancelButton"
import "./styles.scss"
import AddButton from "@/components/atoms/AddButton/AddButton"
import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react"
import { iTask } from "@/components/templates/Homepage"

const NewTask: React.FC<{ onClick: MouseEventHandler<HTMLButtonElement>, setTasksList:  Dispatch<SetStateAction<iTask[]>>, tasksList: iTask[], setNewTaskModal: Dispatch<SetStateAction<boolean>> }> = (props) => {
    const [actualTask, setActualTask] = useState<string>('')
    
    const handleChange = (evt: any) => {
        setActualTask(evt.target.value)
    }

    const handleClick = () => {
        const newList = [...props.tasksList, { name: actualTask, checked: false }]
        props.setNewTaskModal(false)
        props.setTasksList(newList)
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
                    <AddButton onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default NewTask