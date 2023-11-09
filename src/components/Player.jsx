import { useState } from 'react';

/* eslint-disable react/prop-types */
const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  return (
    <>
      <li>
        <span className='player'>
          {isEditing && <input type='text' value={name} required />}
          {!isEditing && <span className='player-name'>{name}</span>}
          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>Edit</button>
      </li>
    </>
  );
};

export default Player;
