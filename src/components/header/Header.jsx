import "./header.scss"

export function Header() {
    return (
        <nav className="header">
            <h1> Neika's Portfolio</h1>
            <ul>
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        
    )
}