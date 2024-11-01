// root-layout : 모든 페이지에 공통적으로 보여지는 요소
// (헤더, 푸터, 네비게이션 바, 사이드바 등)를 정의
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {LayoutContainer, MainContent} from "../styled/RootLayout.styled";
import {Outlet} from "react-router-dom";

// <Outlet/> : 부모 컴포넌트 내에서 자식 컴포넌트가 어디에 렌더링될지 지정
// 여기서는 부모 컴포넌트가 RootLayout(path: '/')
// 자식 컴포넌트는 App.jsx의 children 요소들(HomePage, Movies)
const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <LayoutContainer>
                <Sidebar/>
            <MainContent>
                <Outlet/>
            </MainContent>
            </LayoutContainer>
        </>
    );
};

export default RootLayout;