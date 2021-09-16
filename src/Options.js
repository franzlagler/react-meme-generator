/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AsyncSelect from 'react-select/async';

const selectContainer = css`
  display: grid;
  justify-content: center;
`;

const label = css`
  display: block;
  margin: 20px 0 10px 5px;
  font-size: 20px;
  font-weight: bolder;
`;

const asyncSelect = {
  option: (provided, state) => ({
    ...provided,
    padding: '10px 15px',
    backgroundColor: state.isFocused ? '#89b0ae' : 'auto',
    color: state.isSelected ? '#212529' : 'auto',
    fontSize: 15,
  }),
  control: (provided, state) => ({
    ...provided,
    width: 300,
    height: 50,
    margin: '0 auto',
    border: '3px solid #212529',
    outline: 0,
    boxShadow: state.isFocused ? ' 0 0 0 4px #89b0ae' : '0',
    '&:hover': {
      border: '3px solid #212529',
    },
    borderRadius: 15,
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: 20,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#212529',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: '#212529',
    border: '1px solid #212529',
    borderRadius: 1,
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: 20,
  }),
};

function Options(props) {
  // load options using API call
  const loadOptions = () => {
    return fetch(`https://api.memegen.link/templates`).then((res) =>
      res.json(),
    );
  };

  return (
    <div css={selectContainer}>
      <label htmlFor="select" css={label}>
        Select Template
      </label>
      <AsyncSelect
        cacheOptions
        defaultOptions
        id="select"
        value={props.templateSelection}
        getOptionLabel={(e) => e.name}
        getOptionValue={(e) => e.id}
        loadOptions={loadOptions}
        onInputChange={props.saveTemplateSelection}
        onChange={props.handleTemplateChange}
        styles={asyncSelect}
        placeholder="No template selected"
      />
    </div>
  );
}
export default Options;
