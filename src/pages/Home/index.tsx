/** @jsxImportSource @emotion/react */

import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import {
  useIssuesDispatch,
  useIssuesState,
} from '../../contexts/IssuesContext';
import Header from '../../components/Header';
import { getIssues } from '../../service/service';
import Loading from '../../components/Common/Loading';
import Advertisement from '../../components/Advertisement';
import IssueItem from '../../components/IssueItem';
const Home = () => {
  const dispatch = useIssuesDispatch();
  const issues = useIssuesState();

  useEffect(() => {
    const fetchIssues = async () => {
      await getIssues(dispatch, 1);
    };
    fetchIssues();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        {issues.data.map((issue: any, index: any) => {
          return (
            <React.Fragment key={issue.created_at + issue.number}>
              {index % 4 === 0 && index !== 0 && (
                <Advertisement
                  src={adObject.src}
                  alt={adObject.alt}
                  path={adObject.path}
                />
              )}
              <IssueItem issue={issue} />
            </React.Fragment>
          );
        })}
      </Main>
      {issues.loading && <Loading />}
    </>
  );
};
const adObject = {
  src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
  alt: 'wanted',
  path: 'https://www.wanted.co.kr/',
};

const Main = styled.main`
  width: 80%;
  min-width: 400px;

  > div {
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    border: 0.5px solid #d0d7de;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const StateTag = styled.div`
  width: 24px;
  > svg {
    width: 24px;
    height: 24px;
    fill: #217e3b;
  }
`;

export default Home;
