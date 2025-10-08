import useTitle from '../hooks/useTitle'

export default function About() {
    useTitle('연구실 소개 | 데이터베이스 연구실')
    return (
        <section>
        <h1>연구실 소개</h1>
        <p>데이터베이스 가빈의 응용시스템에 다양한 융복합 기술을 활용하는 것이 목표입니다.</p>
        <ul>
            <li>주요 키워드 : 데이터베이스, 응용시스템, 융복합기술</li>
            <li>담당 교수 : 신판섭</li>
        </ul>
        </section>
    )
}
