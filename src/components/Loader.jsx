import React from 'react';

const Loader = () => {
  const loaderContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(76, 209, 209, 0.3)', // Green transparent background color
    zIndex: 9999, // Ensure it's above the whole page
  };

  const loaderStyle = {
    width: '93px',
    height: '24px',
    borderRadius: '15px',
    background: 'linear-gradient(#D73D00 0 0) 0/0% no-repeat #4cd1d1',
    animation: 'l2 1s infinite steps(10)',
    position: 'relative',
  };

  const invertTextStyle = {
    color: 'white',
  };

  const keyframesStyle = `
    @keyframes l2 {
      100% { background-size: 110%; }
    }
  `;

  return (
    <div style={loaderContainerStyle}>
      <style>{keyframesStyle}</style>
      <div style={loaderStyle}>
        <span style={invertTextStyle} className="font-medium">&nbsp;&nbsp;&nbsp;Beta Health</span>
      </div>
    </div>
  );
};

export default Loader;
