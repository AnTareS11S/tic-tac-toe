import { useState } from 'react';

/* eslint-disable react/prop-types */
const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <>
      <li>
        <span className='player'>
          {isEditing && (
            <input
              type='text'
              value={playerName}
              onChange={handleChange}
              required
            />
          )}
          {!isEditing && <span className='player-name'>{playerName}</span>}
          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    </>
  );
};

export default Player;
