import {useState} from 'react';

const App = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  console.log(value);
  console.log(typeof value);
  console.log(Number(value));

  return (
    <div>
      <div>.Hello- 123 World 456?___</div>
      <input
        type="number"
        placeholder="Your fav number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
 