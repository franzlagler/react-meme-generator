/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
  // Emotion Styling
  const button = css`
    display: inline-block;
    width: 150px;
    height: 50px;
    margin: 30px auto 0 auto;
    padding: 10px;
    background-color: ${props.backgroundColor
      ? props.backgroundColor
      : '#212529'};
    border: 0;
    &:first-child {
      border-right: 2px solid #f8f9fa;
      border-radius: 15px 0 0 15px;
    }
    &:last-child {
      border-radius: ${props.backgroundColor === '#f94144'
        ? '15px'
        : '0 15px 15px 0'};
      border-left: 2px solid #f8f9fa;
    }
    color: #f8f9fa;
    font-size: 20px;
    &:active {
      transform: scale(0.98);
    }
  `;
  return (
    <button css={button} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

export default Button;
