import Link from "next/link";

export default function Home() {
    return (
        <div>
            <section className='px-6 pt-6'>
                <div className='mb-3'>
                    <h1 className='text-2xl font-bold'>
                        AU CampusPay 사용 가이드
                    </h1>
                    <p>
                        환영합니다! AU CampusPay를 통해 쉽고 빠른 결제 경험을 시작하세요.<br/>
                        이 문서는 AU CampusPay를 처음 접하는 사용자를 위한 단계별 안내를 제공합니다.
                    </p>
                </div>
                <div>
                    <p>
                        더 자세한 정보가 필요하신가요?<br/>
                        아래 링크를 통해 상세 안내를 확인할 수 있습니다.
                    </p>
                    <Link href='/docs/get-started'>
                        자세히 알아보기
                    </Link>
                </div>
            </section>
            <section>
                <ul>
                    <h1>Get Started</h1>
                    <li><Link href='/'>시작하기</Link></li>
                </ul>
                <ul>
                    <h1>User Manual</h1>
                    <li><Link href='/'>로그인/회원가입</Link></li>
                    <li><Link href='/'>메인 대시보드</Link></li>
                    <li><Link href='/'>메뉴 페이지</Link></li>
                    <li><Link href='/'>식권 결제 페이지</Link></li>
                    <li><Link href='/'>식권 사용 페이지</Link></li>
                    <li><Link href='/'>공지사항</Link></li>
                </ul>
                <ul>
                    <h1>Admin Manual</h1>
                    <li><Link href='/'>로그인/회원가입</Link></li>
                    <li><Link href='/'>어드민 대시보드</Link></li>
                    <li><Link href='/'>공지사항 관리</Link></li>
                    <li><Link href='/'>주문 내역 관리</Link></li>
                    <li><Link href='/'>QR Code 스캐너</Link></li>
                    <li><Link href='/'>공지사항</Link></li>
                </ul>
            </section>
        </div>
    )
}
