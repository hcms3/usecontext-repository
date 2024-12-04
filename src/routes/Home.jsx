import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import ToggleThemeButton from "../components/ToggleThemeButton"
import Description from "../components/Description"
import Links from "../components/Links"

export default function Home() {
    const { theme, toggleTheme, user } = useContext(ThemeContext)
    return (
        <React.Fragment>
            <h2>Utilização do useContext()</h2>
            <h3>Acesse o repositório e confira o código</h3>
            <div style={{
                display: "flex",
                gap: "10px"
            }}>

            <Links route={"https://github.com/heitor2002"} title={"GitHub"} />
            <Links route={"https://github.com/hcms3/usecontext-repository"} title={"Repositório"} />
            </div>
            <Description />
            <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
            <div>
                <h2>Usuário:</h2>
                <p>Nome: {user.name}</p>
                <p>E-mail: {user.email}</p>
            </div>
        </React.Fragment>
    )
}