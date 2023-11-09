import { useState } from 'react';

/* eslint-disable react/prop-types */
const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <>
      <li className={isActive ? 'active' : undefined}>
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
