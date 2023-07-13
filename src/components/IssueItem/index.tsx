/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { IconMessage } from '../../assets';
import { IconLeaf } from '../../assets';

const IssueItem = ({ issue }: any) => {
  const navigate = useNavigate();
  //const goDetail = () => navigate(`/detail/${number}`);

  return (
    <Center>
      <Padding16>
        <IconLeaf />
      </Padding16>
      <Article>
        <Left>
          <Title>
            <span># {issue.number} </span>
            {issue.title}
          </Title>

          <Bottom>
            <span>작성자 : {issue.username} </span>
            <span>작성일 : {issue.created_at.slice(0, 10)}</span>
          </Bottom>
        </Left>
        <Right>
          <IconMessage />
          <div>{issue.comments}</div>
        </Right>
      </Article>
    </Center>
  );
};
const Padding16 = styled.div`
  padding: 16px;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
`;
const Article = styled.article`
  width: 100%;
  padding: 16px;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: calc(100% - 50px);
  height: 100%;
`;

const Right = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  font-size: 12px;
  vertical-align: center;

  > svg {
    width: 30px;
    height: 30px;
    opacity: 0.2;
  }

  > svg,
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  > div {
    opacity: 0.4;
    padding-bottom: 4px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  padding-bottom: 8px;

  > span {
    padding-right: 8px;
  }
`;
const Bottom = styled.p`
  font-size: 12px;
  font-weight: 200;

  > span {
    padding-right: 8px;
  }
`;

export default IssueItem;
