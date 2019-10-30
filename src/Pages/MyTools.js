import React from 'react';
import {useUserTools} from '../context/user-tools-context';

function MyTools() {
	const tools = useUserTools();
	return (
		<div>
			<h2>My Tools</h2>
			<p>{JSON.stringify(tools)}</p>
			<ul>
			{
				tools.map(tool => {
					return <li>{`${tool.name} (${tool.owner.name})`}</li>
				})
			}
			</ul>
		</div>
	);
}

export default MyTools;
