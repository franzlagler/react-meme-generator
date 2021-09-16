/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const horizontalRuler = css`
  width: 250px;
  margin: 20px auto;
  border: 3px solid #212529;
  border-radius: 5px;
`;
function HorizontalRuler() {
  return <hr css={horizontalRuler} />;
}

export default HorizontalRuler;
