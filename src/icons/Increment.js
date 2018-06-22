import React from 'react';
import Button from '../styles/Button';

const Increment = ({ onClick }) => (
  <Button onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>Increment</title>
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Button>
);

export default Increment;
