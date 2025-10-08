import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <header className="nav">
            <div className="nav__inner">
                <NavLink to="/" className="logo">Database Lab</NavLink>
                <nav>
                    <NavLink to="/about">연구실 소개</NavLink>
                    <NavLink to="/members">멤버</NavLink>
                    <NavLink to="/location">위치</NavLink>
                </nav>
            </div>
        </header>
    )
}
