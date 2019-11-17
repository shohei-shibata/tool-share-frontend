import React from 'react';
import {useUserTools} from '../context/user-tools-context';

function Request({tool, reqId}) {
	const respondToRequest = useUserTools().respondToRequest;	
	const req = tool.requests.filter(request => {
		return request._id === reqId;
	});
	const acceptRequest = () => {
		alert(`accept request for ${tool.name} by ${req.user.name}`);
		// add action here
		respondToRequest(
	}
	const rejectRequest = () => {
		alert(`reject request for ${req.tool.name} by ${req.user.name}`);
		// add action here
	}
	return (
		<li>{req.user.name}, {req.tool.name} <button onClick={acceptRequest}>Accept</button>  <button onClick={rejectRequest}>Reject</button></li>
	);
}

function RequestsList({tools}) {
	let requests = []; 
	tools.forEach(tool => {
		if (tool.requests && tool.requests.length > 0) {
			requests = [...requests, ...tool.requests.map(req => {
				return {
					_id: req._id,
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
