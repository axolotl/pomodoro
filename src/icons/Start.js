import React from 'react';
import Button from '../styles/Button';

const Start = ({ onClick }) => (
  <Button>
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Button>
);

export default Start;
