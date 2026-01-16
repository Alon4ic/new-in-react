import logo from './assets/react.svg'

export default function Header() {
    return (
        <header className="header">
            <nav>
            <img src={logo} className="nav-logo" alt="React logo" />
            <span>ReactFacts</span>
            {/* <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav> */}
            </nav>
        </header>
    )
}