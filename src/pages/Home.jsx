import { motion } from 'framer-motion'
import { FaGlobe, FaGamepad, FaRobot, FaDatabase } from 'react-icons/fa'
import useTitle from '../hooks/useTitle'
import PROJECT_DATA from '../data/projects.json'
import '../styles/home.scss'

const ICONS = {
    globe: <FaGlobe />,
    gamepad: <FaGamepad />,
    robot: <FaRobot />,
    database: <FaDatabase />
}

const heroVariants = {
    hidden:  { y: -50, opacity: 0 },
    visible: { y: 0,  opacity: 1, transition: { duration: 3, ease: [0.22, 1, 0.36, 1] } }
}

export default function Home() {
    useTitle('HOME | DATABASE LAB')
    
    const cardAnimation = {
        animate: { x: ['0%', '-143%'] },
        transition: { duration: 18, ease: 'linear', repeat: Infinity }
    }

    return (
        <section className="home">
            <figure className="home_hero">
                <motion.div
                    className="home_imgwrap"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img className="home_image" src="/images/databaseLAB.png" />
                    <figcaption className="home_hero-caption">
                        <h1 className="home_title">데이터베이스 연구실</h1>
                        <p className="home_desc">데이터베이스 기술 기반의 응용시스템을 연구하고 개발하는 곳입니다.</p>
                        <p className="home_desc">기타 프로젝트/논문/세미나 소식은 멤버 및 프로젝트 페이지에서 확인할 수 있습니다.</p>
                    </figcaption>
                </motion.div>
            </figure>

            <h1 className="home_title">프로젝트</h1>
            <div className="home_animate">
                <motion.div className="home_track" {...cardAnimation}>
                    {PROJECT_DATA.map(card => (
                        <article key={`A-${card.id}`} className="home_card">
                            <h3 className="home_card-title">{card.title}</h3>
                            <div className="home_card-icon">{ICONS[card.icon]}</div>
                            <p className="home_card-desc">{card.desc}</p>
                        </article>
                    ))}
                    {PROJECT_DATA.map(card => (
                        <article key={`B-${card.id}`} className="home_card" aria-hidden="true">
                            <h3 className="home_card-title">{card.title}</h3>
                            <div className="home_card-icon">{ICONS[card.icon]}</div>
                            <p className="home_card-desc">{card.desc}</p>
                        </article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
