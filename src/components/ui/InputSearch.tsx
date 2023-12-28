import React from "react";

interface InputSearchProps {
  onSearch: (searchTodo: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({
  onSearch,
  ...props
}: InputSearchProps) => {
  return (
    <input
      {...props}
      className="border outline-none  border-solid border-A3A3B9 rounded-full px-4 py-1"
      placeholder="Search task..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default InputSearch;
