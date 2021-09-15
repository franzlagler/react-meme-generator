/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';

const memeImage = css`
  width: 500px;
  height: auto;
  border: 3px solid #212529;
  border-radius: 10px;
`;

function MemeImage(props) {
  const url = `https://api.memegen.link/images/${props.memeData[2]}/${props.memeData[0]}/${props.memeData[1]}`;
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
          a.setAttribute('download', `meme${props.memeData[2]}.png`);
          a.style = 'display: none';
          a.click();
        });
    }
  }, [props.memeData]);
  return (
    <div>
      {props.memeData[0] && <img src={url} alt="Meme" css={memeImage} />}
    </div>
  );
}

export default MemeImage;
