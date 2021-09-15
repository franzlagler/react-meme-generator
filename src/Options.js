import { useState } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

// Options morgen nochmals anschauen!
function Options() {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(`https://api.memegen.link/templates`).then((res) =>
      res.json(),
    );
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      value={selectedValue}
      getOptionLabel={(e) => e.name}
      getOptionValue={(e) => e.name}
      loadOptions={loadOptions}
      onInputChange={handleInputChange}
      onChange={handleChange}
    />
  );
}
export default Options;
