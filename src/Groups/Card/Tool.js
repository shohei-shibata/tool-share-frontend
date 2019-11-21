import React from 'react';
import { useUser } from '../../context/user-context';
import { useUserTools } from '../../context/user-tools-context';

function ToolCard({ tool }) {
  const user = useUser();
  return (
    <div className='card'>
      {
	user._id === tool.owner._id ?
	  <OwnerCard tool={tool} />
	  :
	  <NonOwnerCard tool={tool}/>
      }
    </div>
  );
}

function OwnerCard({ tool }) {
  const {getToolById, removeTool} = useUserTools();
  const handleRemoveTool = () => {
    const toolFound = getToolById(tool._id);
    if (toolFound) {
      const confirmText = `Are you sure you want to delete ${tool.name}?`;
      if (window.confirm(confirmText)) {
	removeTool(tool._id);
      } 
    } else {
      alert('error finding tool to delete');
    }
  } 

  let requests = null;
  if (tool.requests && tool.requests.length > 0) {
    requests = tool.requests.map(req => {
      return <Request key={req._id} tool={tool} req={req} />
    });
  }
  return (
    <div>
      <h1>{tool.name}</h1>
      {
	tool.status ?
	<p>available</p> :
	<p>not available</p>
      }
      {
	requests
      }
      <button onClick={handleRemoveTool}>Remove</button>
    </div>
  );
}

function NonOwnerCard({ tool }) {
  return (
    <div>
      <h1>{tool.name}</h1>
    </div>
  );
}

function Request({tool, req}) {

	const respondToRequest = useUserTools().respondToRequest;	
	const ACCEPT = 'ACCEPT';
	const REJECT = 'REJECT';
	// should refactor to combine accept/reject functions
	const acceptRequest = () => {
		alert(`accept request for ${tool.name} by ${req.user.name}`);
		respondToRequest(tool._id, req._id, ACCEPT);
	}
	const rejectRequest = () => {
		alert(`reject request for ${tool.name} by ${req.user.name}`);
		respondToRequest(tool._id, req._id, REJECT);
	}
	if (req.pending) {
	  return (
	    <div>
		  <p>{req.user.name}</p>
		  <button onClick={acceptRequest}>Accept</button>  <button onClick={rejectRequest}>Reject</button>
	    </div>
	  );
	} else {
	  return null;
	}
}

export default ToolCard;
