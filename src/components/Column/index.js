import React from 'react';
import CardList from '../CardList';

const Column = props => {
  console.log('column ', props)
  return (
    <div className="column">
      <div className="column_header">
        {props.label}
      </div>
      <div className="column_body">
        <CardList cards={props.cards}/>
      </div>
    </div>
  );
};

function filterCards(props) {
  switch (props.status) {
    case 'queue':
      
      break;
  
    default:
      break;
  }
}

export default Column;

// import React from 'react';
// import CardList from '../CardList';

// const Column = props => {
//   return (
//     <div className="column">
//       <div className="column_header">
//         {props.label}
//       </div>
//       <div className="column_body">
//         <CardList cards={props.cards} />
//       </div>
//     </div>
//   )
// }

// export default Column;