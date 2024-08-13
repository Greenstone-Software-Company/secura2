import React from 'react';

const Card = (props) => {
  const { style, className, children } = props;

  const defaultStyles = {
    top: '187px',
    left: '121px',
    width: '1265px',
    height: '668px',
    backgroundColor: '#ffffff',
    borderRadius: '26px',
    ...style, // Merge custom styles if provided
  };

  return (
    <div style={defaultStyles} className={className}>
      {children}
    </div>
  );
};

export default Card;
