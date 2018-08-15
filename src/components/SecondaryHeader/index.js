import React from 'react';
import './SecondaryHeader.css'

const SecondaryHeader = props => {
  return (
    <header className="headers">
      <div className="status_names">Queue</div>
      <div className="status_names">In Progress</div>
      <div className="status_names">Done</div>
    </header>
  )
}

export default SecondaryHeader;