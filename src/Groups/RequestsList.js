import React from 'react';

function Request({req}) {
	return (
		<li>{req.data.user.name}, {req.tool.name}</li>
	);
}

function RequestsList({tools}) {
	let requests = []; 
	tools.forEach(tool => {
		if (tool.requests && tool.requests.length > 0) {
			requests = [...requests, ...tool.requests.map(req => {
				return {
					data: req,
					tool: {
						_id: tool._id,
						name: tool.name
					}
				}
			})];
		}
	});
	return (
		<div>
			{
				requests.map(req => {
					return <Request key={req.data._id} req={req} />;
				})
			}
		</div>
	);
}

export default RequestsList;
