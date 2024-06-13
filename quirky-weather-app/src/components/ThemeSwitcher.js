import React from 'react';

const ThemeSwitcher = ({ theme, onSwitch }) => {
  return (
    <button className="btn btn-primary mb-3" onClick={onSwitch}>
      Switch to {theme === 'Rwanda' ? 'Sweden' : 'Rwanda'} Theme
    </button>
  );
};

export default ThemeSwitcher;
