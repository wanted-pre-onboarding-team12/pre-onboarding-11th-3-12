import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './Header';

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Outlet />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 120px;
  background-color: #f6f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
