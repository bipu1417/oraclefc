import React from 'react';
import GameTitle from './GameTitle';

const MainContainer = () => {
  return (
    <div>
      <GameTitle />
      <img className='w-screen aspect-video' alt='bg-img' src="./bg.jpg"/>
    </div>
  );
};

export default MainContainer;