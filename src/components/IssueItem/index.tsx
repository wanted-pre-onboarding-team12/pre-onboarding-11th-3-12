/** @jsxImportSource @emotion/react */
import React from 'react';

const IssueItem = () => {
  return (
    <li>
      <div>
        <div>
          <span>#{/*number */}</span>
          <span>{/* title */}</span>
        </div>
        <div>
          <span>작성자:{/* user.login */}</span>
          <span>작성일:{/* created_at */}</span>
        </div>
      </div>
      <span>코멘트:{/* comments */}</span>
    </li>
  );
};

export default IssueItem;
