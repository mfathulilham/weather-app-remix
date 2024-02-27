import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type="button" className="p-2 bg-gray-700 border border-slate-50 rounded-xl text-white w-40 shadow-sm">
      {children}
    </button>
  );
};

export default Button;