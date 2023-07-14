import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const description = `
잘못된 경로 접근으로 인한 에러입니다. 
"404 Not Found" 문구를 클릭하여 home으로 이동해주세요 🤗
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <H1 onClick={() => navigate('/')}> 404 Not Found</H1>
      <p>{description}</p>
    </Main>
  );
};

const H1 = styled.h1`
  font-size: 32px;
  cursor: pointer;
`;

const Main = styled.main`
  width: 100%;
  padding-top: 100px;
  text-align: center;
  white-space: pre-wrap;
  letter-spacing: 1px;

  > p {
    font-weight: 300;
  }
`;

export default NotFound;
