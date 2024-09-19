import Image from "next/image"
import "./styles.scss"

const Task = () => {
    return (
        <div className="taskDiv">
            <div className="inputDiv">
                <input type="checkbox" className="checkbox" />
                <p>Fazer um bolo</p>
            </div>
            <Image src="/images/trash.png" alt="trash" width={18} height={20} />
        </div>
    )
}

export default Task