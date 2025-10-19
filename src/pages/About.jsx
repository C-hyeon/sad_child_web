import useTitle from '../hooks/useTitle'

export default function About() {
    useTitle('연구실 소개 | 데이터베이스 연구실')
    return (
        <section>
            <h1>위치</h1>
            <p>경기도 포천시 호국로 1007(선단동) 대진대학교 이공학관 다동 B9-403호 데이터베이스 및 응용시스템 실습실</p>
            <div style={{ maxWidth: '720px', width: '100%', marginTop: '16px' }}>
                <iframe
                    title="데이터베이스 연구실 위치 지도"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196.8373970781896!2d127.1564854312188!3d37.87436577784426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1760880221485!5m2!1sko!2skr" 
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}
