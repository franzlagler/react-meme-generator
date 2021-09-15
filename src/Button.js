/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const button = css`
  display: block;
  width: 150px;
  height: 50px;
  margin: 30px auto 0 auto;
  padding: 10px;
  background-color: #212529;
  border: 0;
  border-radius: 10px;
  color: #f8f9fa;
  font-size: 20px;
  &:active {
    transform: scale(0.98);
  }
`;

function Button(props) {
  return (
    <button css={button} onClick={props.handleButtonClick}>
      {props.name}
    </button>
  );
}

export default Button;
