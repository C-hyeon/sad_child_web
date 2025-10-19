import members from '../data/members.json'
import professor from '../data/professor.json'
import useTitle from '../hooks/useTitle'
import '../styles/member.scss'

export default function Members() {
    useTitle('Member | DATABASE LAB')
    return (
        <section className="container">
            <h1>지도교수</h1>
            <article className="professor-card">
                <div className="professor-box">
                    <img src={professor.photo} alt={`${professor.name} 사진`} loading="lazy" />
                    <h2>{professor.name}</h2>
                </div>

                <dl className="professor-info">
                    <dt>전공</dt>
                    <dd>{professor.major}</dd>

                    <dt>소속 학회</dt>
                    <dd>
                        <ul>{professor.affiliation?.map((org, idx) => (<li key={idx}>{org}</li>))}</ul>
                    </dd>

                    <dt>연구 분야</dt>
                    <dd>{professor.research}</dd>

                    <dt>학력 사항</dt>
                    <dd>
                        <ul>{professor.education?.map((edu, idx) => (<li key={idx}>{edu}</li>))}</ul>
                    </dd>
                    
                    <dt>이메일</dt>
                    <dd><a href={`mailto:${professor.email}`}>{professor.email}</a></dd>
                </dl>
            </article>

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
