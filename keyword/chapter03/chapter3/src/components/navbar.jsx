import {Link} from "react-router-dom";

// Navbar 컴포넌트 : 홈 페이지로 이동하는 링크와 영화 목록 페이지로 이동하는 링크를 포함
// <nav> : 페이지 전환을 위한 링크 목록을 제공
// <Link> : <a> 태그와 비슷하지만, 페이지 전체를 새로고침하지 않고 URL만 변경하여 페이지 전환
const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}>홈 페이지로 이동</Link>
            <Link to='/movies'>영화 목록 페이지로 이동</Link>
        </nav>
    );
};

export default Navbar;