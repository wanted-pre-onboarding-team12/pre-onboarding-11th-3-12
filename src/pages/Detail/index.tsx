import React from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header';
import IssueDetail from '../../components/IssueDetail';
import { useIssuesState } from '../../contexts/IssuesContext';

const Detail = () => {
  // const state = useIssuesState();
  // Todo : state를 🔝로 바꿔준 후에 IssueDetail 의 issue={state.data} 로 교체
  const state = JSON.parse(localStorage.getItem('data') || '{}');
  return (
    <Wrap>
      <Header />
      <IssueDetail issue={state} />
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  width: 80%;
`;
