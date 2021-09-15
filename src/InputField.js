/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputContainer = css`
  display: grid;
  justify-content: center;
`;
const label = css`
  display: block;
  margin: 20px 0 10px 5px;
  font-size: 20px;
  font-weight: bolder;
`;
const input = css`
  display: block;
  width: 300px;
  height: 50px;
  padding: 5px 10px;
  border: 3px solid #212529;
  border-radius: 15px;
  font-size: 20px;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 4px #89b0ae;
  }
`;

function Input(props) {
  return (
    <div css={inputContainer}>
      <label htmlFor={props.id} css={label}>
        {props.name}
      </label>
      <input
        id={props.id}
        name={props.name}
        value={props.value}
        css={input}
        onChange={props.handleInputChange}
      />
    </div>
  );
}

export default Input;
