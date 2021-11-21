import * as React from 'react';

const Button = ({ className, name, onClick }) => {
  return (
    <button class={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
