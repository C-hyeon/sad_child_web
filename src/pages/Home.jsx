import useTitle from '../hooks/useTitle'

export default function Home() {
    useTitle('데이터베이스 연구실')
    return (
        <section>
            <h1>데이터베이스 연구실</h1>
            <p>데이터베이스 기술 기반의 응용시스템을 연구하고 개발하는 곳입니다.</p>
            <p>프로젝트/논문/세미나 소식은 멤버·소개 페이지에서 확인할 수 있습니다.</p>
        </section>
    )
}
