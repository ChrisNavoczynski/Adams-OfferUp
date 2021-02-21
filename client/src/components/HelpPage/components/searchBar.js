import React from 'react';

const searchBar = () => {
  const BarStyle = {
    width: '30rem', background: '#F2F1F9', border: 'none', padding: '0.5rem',
  };
  return (
    <input
      style={BarStyle}
      placeholder="search for help"

    />
  );
};

export default searchBar;
