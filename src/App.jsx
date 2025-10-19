import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/etc" element={<About />} />
      </Route>
    </Routes>
  )
}