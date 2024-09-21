import "./styles.scss"

const DeleteButton: React.FC<{ onClick: () => void }> = (props) => {
    return (
        <button onClick={props.onClick} className="deleteButton">Deletar</button>
    )
}

export default DeleteButton