import React from 'react';
import {useUserTools} from '../context/user-tools-context';

function Request({req}) {
	const respondToRequest = useUserTools().respondToRequest;	
	const ACCEPT = 'ACCEPT';
	const REJECT = 'REJECT';
	// should refactor to combine accept/reject functions
	const acceptRequest = () => {
		alert(`accept request for ${req.tool.name} by ${req.user.name}`);
		// add action here
		respondToRequest(req.tool._id, req._id, ACCEPT);
	}
	const rejectRequest = () => {
		alert(`reject request for ${req.tool.name} by ${req.user.name}`);
		// add action here
		respondToRequest(req.tool._id, req._id, REJECT);
	}
	if (req.pending) {
	  return (
		  <li>{req.user.name}, {req.tool.name} <button onClick={acceptRequest}>Accept</button>  <button onClick={rejectRequest}>Reject</button></li>
	  );
	} else {
	  return null;
	}
}

function RequestsList({tools}) {
	let requests = []; 
	tools.forEach(tool => {
		if (tool.requests && tool.requests.length > 0) {
			requests = [...requests, ...tool.requests.map(req => {
				return {
					_id: req._id,
					pending: req.pending,
					user: req.user,
					tool: {
						_id: tool._id,
						name: tool.name
					}
				}
			})];
		}
	});
	return (
		<ul>
			{
				requests.map(req => {
					return <Request 
						key={req._id} 
						req={req} 
					/>;
				})
			}
		</ul>
	);
}

export default RequestsList;
