import React from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header';
import IssueDetail from '../../components/IssueDetail';

const Detail = () => {
  const issue = JSON.parse(localStorage.getItem('data') || '{}');
  return (
    <Wrap>
      {/* <Header /> */}
      <IssueDetail issue={issue} />
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  width: 80%;
`;
