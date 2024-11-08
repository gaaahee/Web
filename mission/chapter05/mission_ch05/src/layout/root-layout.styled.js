import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  flex: 1; /* 사이드바를 제외한 나머지 공간을 차지 */
  background-color: #000;
  padding: 10px 40px;
  color: #fff;
`;