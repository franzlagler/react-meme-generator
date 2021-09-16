/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import { useState } from 'react';
import Button from './Button';
import GlobalStyle from './GlobalStyle';
import Heading from './Heading';
import HorizontalRuler from './HorizontalRuler';
import Input from './InputField';
import MemeImage from './MemeImage';
import Options from './Options';

const mainContainer = css`
  display: grid;
  justify-content: center;
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #dee2e6;
`;

function App() {
  const [templateSelection, setTemplateSelection] = useState('');
  const [userInput, setUserInput] = useState(['', '', '']);
  const [totalData, setTotalData] = useState(['', '', '']);

  const handleInputChange = ({ currentTarget }) => {
    console.log(currentTarget);
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

  const handleButtonClick = () => {
    console.log(userInput);
    const totalDataUpdated = userInput.map((element) => {
      return element.toLowerCase().replace(' ', '_');
    });
    setTotalData(totalDataUpdated);
  };

  return (
    <>
      <Global styles={GlobalStyle} />
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
        <Button name="Generate" handleButtonClick={handleButtonClick} />
        <HorizontalRuler />
        <MemeImage totalData={totalData} />
      </div>
    </>
  );
}

export default App;
