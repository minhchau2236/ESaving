import React from 'react';
const PrivateLayout = (props) => {
  return (
    <div>
      <h2>ESaving</h2>
      {props.children}
    </div>
  );
};

export default PrivateLayout;
