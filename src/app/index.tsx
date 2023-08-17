import { Link } from 'expo-router';

export default () => {
  return (
    <>
      <Link href="/">메인페이지</Link>
      <Link href="/login">로그인</Link>
      <Link href="/search">검색</Link>
      <Link href="/mypage">마이페이지</Link>
    </>
  );
};
