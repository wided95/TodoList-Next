import React from 'react';

interface InputSearchProps {}

const InputSearch: React.FC<InputSearchProps> = (props) => {
  return (
    <input {...props} className="border outline-none  border-solid border-A3A3B9 rounded-full px-4 py-1" placeholder='Search task...'/>
  );
};

export default InputSearch;
