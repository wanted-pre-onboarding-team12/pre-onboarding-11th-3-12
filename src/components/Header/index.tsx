import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { IconGithub } from '../../assets/index';
import { useNavigate } from 'react-router-dom';
import { useIssuesState } from '../../contexts/IssuesContext';
import { orgRepoName } from '../Common/OrgRefoName';

const Header = () => {
  const navigate = useNavigate();
  //@ts-ignore
  const { issues, issue } = useIssuesState();
  const { orgName, repoName } = orgRepoName(issues.data);

  return (
    <HeaderBox>
      <TitleWrap onClick={() => navigate('/')}>
        <IconGithub />
        {orgName} / {repoName}
      </TitleWrap>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  width: 100%;
  min-width: 400px;
  font-size: 24px;
  font-weight: 800;
  padding-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleWrap = styled.div`
  letter-spacing: 0.5px;
  cursor: pointer;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 32px;
    height: 32px;
    padding-right: 4px;
    fill: #1f2328;
  }
`;

export default Header;
