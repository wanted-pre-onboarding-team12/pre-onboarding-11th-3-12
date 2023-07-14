import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header';
import IssueDetail from '../../components/IssueDetail';
import {
  useIssuesDispatch,
  useIssuesState,
} from '../../contexts/IssuesContext';
import { getIssue } from '../../service/service';
import { useParams } from 'react-router';
import Loading from '../../components/Common/Loading';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useIssuesDispatch();
  //@ts-ignore
  const { issue } = useIssuesState();

  useEffect(() => {
    getIssue(dispatch, Number(id));
  }, [id]);

  return (
    <Wrap>
      <Header />
      <IssueDetail issue={issue.data} />
      {issue.loading && <Loading />}
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  width: 80%;
`;
