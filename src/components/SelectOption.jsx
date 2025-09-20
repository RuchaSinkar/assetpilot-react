import React from 'react';

function SelectOption({ options, placeholder }) {
  return (
    <>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </>
  );
}

export default SelectOption;
