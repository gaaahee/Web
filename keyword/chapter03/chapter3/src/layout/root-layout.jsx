import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";

// <Outlet/> : 부모 컴포넌트 내에서 자식 컴포넌트가 어디에 렌더링될지 지정
// 여기서는 부모 컴포넌트가 RootLayout(path: '/')
// 자식 컴포넌트는 App.jsx의 children 요소들(HomePage, Movies)
const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default RootLayout;