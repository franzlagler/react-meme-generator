/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const memeImage = css`
  width: 500px;
  height: auto;
  margin: 20px auto;
  border: 3px solid #212529;
  border-radius: 10px;
`;

const noImage = css`
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
`;

function CurrentMeme(props) {
  return (
    <div>
      {props.totalData[0] && (
        <img
          src={props.url}
          alt="Meme"
          css={memeImage}
          onLoad={props.handleImageLoad}
        />
      )}
      {!props.totalData[0] && <p css={noImage}>No meme available to display</p>}
    </div>
  );
}

export default CurrentMeme;
