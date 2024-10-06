import React from 'react';
import './Input.css';

function Input({ value, onChange, placeholder = '', type = 'text', style }) {
  return (
    <input
      className="custom-input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  );
}

export default Input;