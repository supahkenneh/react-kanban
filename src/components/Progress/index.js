import React from 'react';
import ProgressCard from '../ProgressCard';

const Progress = props => {
  return (
    <div id="progress_container">
      <ul>
        {
          props.cards.map((card, idx) => {
            if (card.status === 'progress') {
              return <ProgressCard key={idx} title={card.title} body={card.body} />
            }
          })
        }
      </ul>
    </div>
  );
};

export default Progress;