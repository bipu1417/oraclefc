import React from 'react';
import Tournament from './Tournament';

const TournamentList = () => {
  return (
    <div className='grid grid-cols-4 bg-red-900'>
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
    </div>
  );
};

export default TournamentList;