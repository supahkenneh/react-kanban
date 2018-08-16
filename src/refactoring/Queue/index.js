// import React from 'react';
// import QueueCard from '../QueueCard';

// const Queue = props => {
//   console.log('queue: ', props);
//   return (
//     <div id="queue_container">
//       <ul>
//         {
//           props.cards.map((card, idx) => {
//             if (card.status === 'queue') {
//               //gives accessible properties to QueueCard
//               return <QueueCard 
//                 key={idx} 
//                 title={card.title} 
//                 body={card.body} 
//                 priority={card.priority} 
//                 created_by={card.created_by} 
//                 assigned_to={card.assigned_to}
//                 />
//             }
//           })
//         }
//       </ul>
//     </div>
//   );
// };

// export default Queue;