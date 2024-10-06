import React from 'react';
import './Button.css';

function Button({ onClick, children, style, type = 'button', disabled = false }) {
  return (
    <button 
    className="custom-button"
    type={type} 
    onClick={onClick} 
    style={style} 
    disabled={disabled}
    >
      {children} {/* children : 버튼 안에 들어갈 내용 */}
    </button>
  );
}

export default Button;