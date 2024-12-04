import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/user"}>Usuário</Link></li>
            </ul>
        </nav>
    )
}