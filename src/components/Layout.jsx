import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import '../styles/layout.scss'

export default function Layout() {
  return (
    <div className="layout">
        <Nav />
        <main className="container">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
