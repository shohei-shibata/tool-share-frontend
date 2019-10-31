import React, {useState} from 'react';
import {useUser} from '../context/user-context';
import {useUserTools} from '../context/user-tools-context';
import {useUserGroups} from '../context/user-groups-context';
import TextInput from '../Components/Input/Text';
import Checkbox from '../Components/Input/Checkbox';
import ButtonDefault from '../Components/Button/Default';

function MyTools() {
	const tools = useUserTools();
	const user = useUser();
	const groups = useUserGroups();
	const [newTool, setNewTool] = useState({
		_id: '',
		name: '',
		owner: {_id: user._id, name: user.name},
		accessibleGroups: user.groupBelong, 
		note: ''
	});
	const handleInputChange = (e) => {
		console.log('change', e.target.name, e.target.value);
		let newState = Object.assign({}, newTool);
		newState[e.target.name] = e.target.value;
		setNewTool(newState);
	}
	const handleCheckboxChange = (e) => {
		console.log('change checkbox', e.target.value);
	}
	const addTool = (e) => {
		e.preventDefault();
		console.log('add a tool');
	}
	return (
		<div>
			<h2>My Tools</h2>
			<p>{JSON.stringify(tools)}</p>
			<ul>
			{
				tools.map(tool => {
					return <li key={tool._id}>{`${tool.name} (${tool.owner.name})`}</li>
				})
			}
			</ul>
			<form onSubmit={addTool}>
				<TextInput placeholder='Name' name='name' onChange={handleInputChange} />	
				<TextInput placeholder='Note' name='note' onChange={handleInputChange} />	
				<ul>
					{ groups.map(group => {
						console.log(JSON.stringify(group));
						return (
							<Checkbox 
								value={group._id} 
								text={group.name} 
								onChange={handleCheckboxChange}
							/>		
						);
					}) }
				</ul>
				<ButtonDefault value='Add a Tool' type='submit' />
			</form>
			<span>Tool to add: </span>
			<span>{JSON.stringify(newTool)}</span>
		</div>
	);
}

export default MyTools;
