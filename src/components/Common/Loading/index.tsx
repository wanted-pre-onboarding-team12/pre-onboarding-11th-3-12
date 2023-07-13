import styled from '@emotion/styled';
import { IconLoading } from '../../../assets';
import { keyframes } from '@emotion/react';

const Loading = () => {
  return (
    <Wrap>
      <IconLoading />
      <h2>Loading</h2>
    </Wrap>
  );
};

const infiniteAnimation = keyframes`
  from{
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    margin-bottom: 16px;
    width: 60px;
    height: 60px;
    transform: rotate(360deg);
    animation: ${infiniteAnimation} 3s infinite;
  }
`;

export default Loading;
