import styled from '@emotion/styled';

const description = `
잘못된 경로 접근으로 인한 에러입니다. 
로고를 클릭하여 home으로 이동해주세요 🤗
`;

const NotFound = () => {
  return (
    <Main>
      <h1> 404 Not Found</h1>
      <p>{description}</p>
    </Main>
  );
};

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
