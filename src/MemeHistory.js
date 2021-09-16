/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const memeHistoryContainer = css`
  width: 500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const heading = css`
  text-align: center;
`;

const previousImage = css`
  width: 200px;
  margin: 10px;
  border: 2px solid #212529;
  border-radius: 10px;
`;

const noHistoryPara = css`
  margin: 0 auto;
`;

function MemeHistory(props) {
  return (
    <>
      <h2 css={heading}>Meme History</h2>
      <div css={memeHistoryContainer}>
        {props.memeHistory[0] &&
          props.memeHistory.map((el) => {
            return (
              <React.Fragment key={`a-${Math.floor(Math.random() * 10000)}`}>
                <img
                  key={`a-${Math.floor(Math.random() * 10000)}`}
                  src={el}
                  alt="previous meme"
                  css={previousImage}
                />
              </React.Fragment>
            );
          })}
        {!props.memeHistory[0] && <p css={noHistoryPara}>No stored</p>}
      </div>
    </>
  );
}

export default MemeHistory;
