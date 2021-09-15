/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const heading = css`
  margin: 10px;
  font-size: 50px;
  text-align: center;
  letter-spacing: 2px;
`;

function Heading() {
  return <h1 css={heading}>Meme Generator</h1>;
}

export default Heading;
