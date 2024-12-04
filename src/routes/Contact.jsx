import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ToggleThemeButton from "../components/ToggleThemeButton";
import Description from "../components/Description";

export default function Contact() {
    const { theme, toggleTheme, user, setUser } = useContext(ThemeContext)

    const onChangeUser = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    return (
        <React.Fragment>
            <h2>Preencha os dados</h2>
            <Description />
            <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px"
            }}>
            <h4>Nome: {user.name}</h4>
            <h4>E-mail: {user.email}</h4>
            </div>
            <form className="form">
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input value={user.name} type="text" name="name" id="name" onChange={onChangeUser} style={{
                        border: `1px solid ${theme === "light" ? "#333" : "#ccc"}`,
                        color: `${theme === "light" ? "#333" : "#ccc"}`
                    }} />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input value={user.email} type="email" name="email" id="email" onChange={onChangeUser} style={{
                        border: `1px solid ${theme === "light" ? "#333" : "#ccc"}`,
                        color: `${theme === "light" ? "#333" : "#ccc"}`
                    }} />
                </div>
            </form>
        </React.Fragment>
    )
}