import useTitle from '../hooks/useTitle'
import '../styles/about.scss'

export default function About() {
    useTitle('ETC | DATABASE LAB')
    return (
        <section className="container">
            <h1>위치</h1>
            <p>경기도 포천시 호국로 1007(선단동) 대진대학교 이공학관 다동 B9-403호 데이터베이스 및 응용시스템 실습실</p>
            <div className="googlemap">
                <iframe
                    title="데이터베이스 연구실 위치 지도"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.94291578517195!2d127.15672833846321!3d37.87423079601757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cd100091617eb%3A0x950e64c288e2c9ed!2z642w7J207YSw67Kg7J207IqkIOuwjyDsnZHsmqnsi5zsiqTthZwg7Iuk7Iq17Iuk!5e0!3m2!1sko!2skr!4v1760938655635!5m2!1sko!2skr" 
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="recruit">
                <h1>랩원 모집</h1>
                <img className="recruit_image" src="/images/DBLAB_recruitment.jpg" />
            </div>
        </section>
    )
}
