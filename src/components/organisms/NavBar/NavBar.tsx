import "./styles.scss"
import Image from "next/image"

const NavBar = () => {
    return (
        <div className="navBar">
            <Image src="/images/logo.png" alt="logo" width={150} height={36} />
            <div className="title">Bem-vindo de volta, Marcus</div>
            <div className="date">Segunda, 01 de dezembro de 2025</div>
        </div>
    )
}

export default NavBar