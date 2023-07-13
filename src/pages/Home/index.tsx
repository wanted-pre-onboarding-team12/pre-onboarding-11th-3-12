/** @jsxImportSource @emotion/react */

import React, { useEffect, useState, useRef } from 'react';
import {
  useIssuesDispatch,
  useIssuesState,
} from '../../contexts/IssuesContext';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ul>{/* TODO: issues 나열 */}</ul>
      </main>
    </>
  );
};

export default Home;
