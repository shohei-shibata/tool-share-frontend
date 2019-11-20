import React from 'react';
import useUser from '../../context/user-context';

function ToolCard({ tool }) {
  const user = useUser();
  return (
    <div className='card'>
      {
	user._id === tool.owner._id ?
	  <OwnerCard />
	  :
	  <NonOwnerCard />
      }
    </div>
  );
}

function OwnerCard() {
  return (
    <div>

    </div>
  );
}

function NonOwnerCard() {
  return (
    <div>

    </div>
  );
}

export default ToolCard;
