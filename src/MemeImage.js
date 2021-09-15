/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const memeImage = css`
  width: 500px;
  height: auto;
  border: 3px solid #212529;
  border-radius: 10px;
`;

function MemeImage(props) {
  const url = `https://api.memegen.link/images/${props.memeData[2]}/${props.memeData[0]}/${props.memeData[1]}`;

  return <img src={url} alt="Meme" css={memeImage} />;
}

export default MemeImage;
