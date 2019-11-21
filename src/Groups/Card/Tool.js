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
	  <NonOwnerCard tool={tool} user={user}/>
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
      return <Requestor key={req._id} tool={tool} req={req} />
    });
  }
  let status = tool.status ? 'available' : 'not available';
  return (
    <div>
      <h1>{tool.name}</h1>
      <p>{status}</p>
      <p>Requested by {requests}</p>
      <p><Link text='Remove this tool' onClick={handleRemoveTool} /></p>
    </div>
  );
}

function NonOwnerCard({ tool, user }) {
  const { requestTool } = useUserTools();
  const handleRequestTool = () => {
    if (window.confirm(`Request to borrow?`)) {
      requestTool(tool._id, user, (success, errMsg) => {
	if (success) { 
	  alert('Request submitted successfully!'); 
	} else {
	  alert('Tool update failed', errMsg);
	}
      });  
    }
  }
  const available = (tool.status === 'available');
  return (
    <div>
      <h1>{tool.name}</h1>
      <p>Owned by {tool.owner.name}</p>
      <p>{available ? 'available' : 'not available'}</p>
      {available ?
	<p><Link text='Make a request' onClick={handleRequestTool}/></p> : null
      }
    </div>
  );
}

function Link({text, onClick}) {
  return (
    <span className='link' onClick={onClick}>{text}</span>
  );
}

function Requestor({tool, req}) {
  const respondToRequest = useUserTools().respondToRequest;	
  const ACCEPT = 'ACCEPT';
  const REJECT = 'REJECT';
  const handleClick = () => {

  }
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
      <span className='requestor-link'>
	<Link text={req.user.name} />
      </span>
    );
  } else {
    return null;
  }
}

export default ToolCard;
