/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from '@emotion/styled';
import { IconLeaf } from '../../assets';
import { IconMessage } from '../../assets';

const IssueDetail = ({ issue }: any) => {
  console.log({ issue });
  return (
    <main>
      <Article>
        <LeftContainer>
          <img src={issue.user.avatar_url} alt="userimage" />
          <div>
            <IconLeaf />
            {issue.state.toUpperCase()}
          </div>
        </LeftContainer>

        <LeftDiv>
          <p className="leftp">
            <span># {issue.number}</span>
            {issue.title}
          </p>
          <p className="rightp">
            <span>작성자:{issue.user.login}</span>
            <span>작성일:{issue.created_at}</span>
          </p>
        </LeftDiv>
        <RightDiv>
          <IconMessage />
          <div> {issue.comments}</div>
        </RightDiv>
      </Article>
      <Section>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {/* body */}body
        </ReactMarkdown>
      </Section>
    </main>
  );
};

const LeftContainer = styled.div`
  width: 60px;
  height: 80px;
  margin-right: 8px;

  > div {
    display: flex;
    align-items: center;
    margin-top: 4px;
    padding: 6px 8px;
    border-radius: 20px;
    background-color: #268741;
    font-size: 12px;
    color: white;

    > svg {
      width: 12px;
      height: 12px;
      margin: 0 2px -2px 0;
      fill: white;
    }
  }

  > img {
    width: 100%;
    border-radius: 4px;
  }
`;

const Article = styled.article`
  width: 100%;
  padding: 16px;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  > .leftp {
    font-size: 20px;
    padding-bottom: 8px;

    > span {
      padding-right: 8px;
    }
  }
  > .rightp {
    font-size: 12px;
    font-weight: 200;

    > span {
      padding-right: 8px;
    }
  }
`;

const RightDiv = styled.div`
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

const Section = styled.section`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 40px;
  border-radius: 0px 40px 40px 40px;
  border: 0.5px solid #d0d7de;
  font-weight: 300;

  h1,
  h2 {
    width: 100%;
    padding: 20px 0;
    margin-bottom: 20px;
    border-bottom: 0.5px solid #d0d7de;
  }

  p,
  li {
    margin: 20px 0;
    line-height: 1.2;
  }

  code {
    white-space: break-spaces;
    width: 100%;
    background-color: #eee;
    border-radius: 3px;
    padding: 0 3px;
  }

  img {
    margin: 20px 0;
    width: 100%;
    max-width: 600px;
  }
`;

export default IssueDetail;
