import React, { useEffect, useRef } from 'react';

const NumberInput = ({ isNumber, ...rest }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (isNaN(event.key) || event.key < "0" || event.key > "9") {
        event.preventDefault();
      }
    };

    if (isNumber) {
      inputRef.current.addEventListener("keypress", handleKeyPress);
    }

    return () => {
      if (isNumber) {
        inputRef.current.removeEventListener("keypress", handleKeyPress);
      }
    };
  }, [isNumber]);

  return <input ref={inputRef} {...rest} />;
};

export default NumberInput;
