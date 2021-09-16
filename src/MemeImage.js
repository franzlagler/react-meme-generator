/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';

const memeImage = css`
  width: 500px;
  height: auto;
  border: 3px solid #212529;
  border-radius: 10px;
`;

const noImage = css`
  display: flex;
  justify-content: center;
`;

function MemeImage(props) {
  const url = `https://api.memegen.link/images/${props.totalData[2]}/${props.totalData[0]}/${props.totalData[1]}`;

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.setAttribute('download', `meme${props.totalData[2]}.png`);
          a.style = 'display: none';
          a.click();
        });
    }
  }, [props.totalData, url]);
  return (
    <div>
      {props.totalData[0] && <img src={url} alt="Meme" css={memeImage} />}
      {!props.totalData[0] && <p css={noImage}>No meme available to display</p>}
    </div>
  );
}

export default MemeImage;
