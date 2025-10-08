import useTitle from '../hooks/useTitle'

export default function Location() {
    useTitle('위치 | 데이터베이스 연구실')
    return (
        <section>
            <h1>위치</h1>
            <p>경기도 포천시 호국로 1007(선단동) 대진대학교 이공학관 다동 B9-403호 데이터베이스 및 응용시스템 실습실</p>

            <div style={{ maxWidth: '720px', width: '100%', marginTop: '16px' }}>
                <iframe
                    title="데이터베이스 연구실 위치 지도"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196.83761740154594!2d127.15664897020248!3d37.874283320357584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cd116eee3e1f5%3A0xbf6b10ea80756928!2z64yA7KeE64yA7ZWZ6rWQIOyngOuKpeygleuztOyLnOyKpO2FnOydkeyaqeyLpOyKteyLpA!5e0!3m2!1sko!2skr!4v1759948387945!5m2!1sko!2skr" 
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
