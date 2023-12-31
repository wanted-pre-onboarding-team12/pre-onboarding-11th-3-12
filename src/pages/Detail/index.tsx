import React, { useEffect } from 'react';
import styled from '@emotion/styled';
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

  return issue.loading ? (
    <Loading />
  ) : (
    <Wrap>
      <IssueDetail issue={issue.data} />
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  width: 80%;
`;
