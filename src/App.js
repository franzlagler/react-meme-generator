/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import CurrentMeme from './CurrentMeme';
import globalStyle from './globalStyle.js';
import Heading from './Heading';
import HorizontalRuler from './HorizontalRuler';
import Input from './InputField';
import MemeHistory from './MemeHistory';
import Options from './Options';

const mainContainer = css`
  display: grid;
  justify-content: center;
  max-width: 800px;
  margin: 50px auto;
  padding: 50px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #dee2e6;
`;

const generateDownloadButtons = css`
  margin: 0 auto;
`;

function App() {
  const storedUrls = JSON.parse(localStorage.getItem('memeHistory'));

  const [templateSelection, setTemplateSelection] = useState('');
  const [userInput, setUserInput] = useState(['', '', '']);
  const [totalData, setTotalData] = useState(['', '', '']);
  const [memeHistory, setMemeHistory] = useState(storedUrls);

  const url = `https://api.memegen.link/images/${totalData[2]}/${totalData[0]}/${totalData[1]}`;

  const handleInputChange = ({ currentTarget }) => {
    const updatedUserInputArray = [...userInput];
    const newValue = currentTarget.value;
    if (currentTarget.id === 'topText') {
      updatedUserInputArray[0] = newValue;
      setUserInput(updatedUserInputArray);
    } else if (currentTarget.id === 'bottomText') {
      updatedUserInputArray[1] = newValue;
      setUserInput(updatedUserInputArray);
    }
  };

  const saveTemplateSelection = (item) => {
    setTemplateSelection(item.name);
  };

  const handleTemplateChange = (item) => {
    const updatedUserInputArray = [...userInput];
    updatedUserInputArray[2] = item.id;
    setUserInput(updatedUserInputArray);
  };

  const handleGenerateClick = () => {
    const totalDataUpdated = userInput.map((element) => {
      if (element.length === 0) {
        element += '-';
      }
      if (element.includes('#')) {
        element = element.replace(/#/g, '~h');
      }
      if (element.includes('?')) {
        element = element.replace(/\?/g, '~q');
      }
      if (element.includes('/')) {
        element = element.replace(/\//g, '~s');
      }

      return element.toLowerCase().replace(/ /g, '_');
    });
    setTotalData(totalDataUpdated);
  };

  const handleDownloadClick = () => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.setAttribute('download', `meme${totalData[2]}.png`);
        a.style = 'display: none';
        a.click();
      });
  };

  const handleImageLoad = () => {
    setMemeHistory((prev) => [...prev, url]);
  };

  const handleDeleteClick = () => {
    const updatedMemeHistoryArray = [...memeHistory];
    updatedMemeHistoryArray.pop();
    setMemeHistory(updatedMemeHistoryArray);
  };

  useEffect(() => {
    localStorage.setItem('memeHistory', JSON.stringify(memeHistory));
    JSON.parse(localStorage.getItem('memeHistory'));
  }, [memeHistory]);
  return (
    <>
      <Global styles={globalStyle} />
      <div css={mainContainer}>
        <Heading />
        <Input
          id="topText"
          name="Top Text"
          value={userInput[0]}
          handleInputChange={handleInputChange}
        />
        <Input
          id="bottomText"
          name="Bottom Text"
          value={userInput[1]}
          handleInputChange={handleInputChange}
        />

        <Options
          handleTemplateChange={handleTemplateChange}
          saveTemplateSelection={saveTemplateSelection}
          templateSelection={templateSelection}
          totalData={totalData}
        />
        <div css={generateDownloadButtons}>
          <Button
            name="Generate"
            backgroundColor=""
            onClick={handleGenerateClick}
          />
          <Button name="Download" onClick={handleDownloadClick} />
        </div>
        <CurrentMeme
          totalData={totalData}
          url={url}
          handleImageLoad={handleImageLoad}
        />
        <HorizontalRuler />

        <MemeHistory memeHistory={memeHistory} />
        <Button
          name="Delete Last"
          backgroundColor="#f94144"
          borderRadius="15px"
          onClick={handleDeleteClick}
        />
      </div>
    </>
  );
}

export default App;
