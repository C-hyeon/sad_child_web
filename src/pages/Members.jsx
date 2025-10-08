import members from '../data/members.json'
import useTitle from '../hooks/useTitle'

export default function Members() {
    useTitle('멤버 | 데이터베이스 연구실')
    return (
        <section>
            <h1>멤버</h1>
            <div className="cards">
                {members.map((m) => (
                    <article className="card" key={m.email}>
                        <img src={m.photo} alt={`${m.name} 사진`} loading="lazy" />
                        <h3>{m.name}</h3>
                        <p>{m.role}</p>
                        <a href={`mailto:${m.email}`}>{m.email}</a>
                    </article>
                ))}
            </div>
        </section>
    )
}
