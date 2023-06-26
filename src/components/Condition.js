import React from 'react';

const Condition = ({ boolean }) => {
  return (
    <div>
      {boolean ? <p>Oh yeah, ma page est ouverte :D</p> : <p>Oh noonnn, ma page est fermée :/</p>}
    </div>
  );
};

export default Condition;