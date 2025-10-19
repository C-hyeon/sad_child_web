import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <header className="nav">
            <div className="nav_inner">
                <NavLink to="/" className="logo">
                    <img src="/DBLABlogo.png" alt="Database Lab 로고" />
                    <span className="logo_text">DATABASE LAB</span>
                </NavLink>
                <nav>
                    <NavLink to="/members">멤버</NavLink>
                    <NavLink to="/etc">기타</NavLink>
                </nav>
            </div>
        </header>
    )
}
