/** @jsxImportSource @emotion/react */
import React from 'react';

const IssueDetail = () => {
  return (
    <main>
      <section>
        <div>
          <img src="" alt="" />
        </div>
        <article>
          <div>
            <span>{/*number*/}</span>
            <span>{/*title*/}</span>
          </div>
          <div>
            <span>작성자:{/*user?.login*/}</span>
            <span>작성일:{/*created_at*/}</span>
          </div>
        </article>
        <span> 코멘트:{/*comments*/}</span>
      </section>
      <div>
        <span>{/* body */}</span>
      </div>
    </main>
  );
};

export default IssueDetail;
