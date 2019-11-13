import React, {useState} from 'react';
import {useUser} from '../../context/user-context';
import {useUserGroups} from '../../context/user-groups-context';
import TextInput from '../../Components/Input/Text';
import Checkbox from '../../Components/Input/Checkbox';
import ButtonDefault from '../../Components/Button/Default';

function AddToolForm(onSubmit) {
	const user = useUser();
	const groups = useUserGroups();
	const newToolInitialState = {
		_id: '',
		name: '',
		owner: {_id: user._id, name: user.name},
		accessibleGroups: user.groupBelong, 
		note: ''
	}
	const [newTool, setNewTool] = useState(newToolInitialState);
	const handleInputChange = (e) => {
		let newState = Object.assign({}, newTool);
		newState[e.target.name] = e.target.value;
		setNewTool(newState);
	}
	const handleCheckboxChange = (e) => {
		let newGroups = [...newTool.accessibleGroups];
		let index = newGroups.indexOf(e.target.value);
		if (e.target.checked) {
			if (index >= 0) { console.log('already exists') }
			else { 
				let newState = Object.assign({}, newTool);
				newState.accessibleGroups.push(e.target.value);
				setNewTool(newState);
			} 
		} else {
			if (index >= 0) {
				let newState = Object.assign({}, newTool);
				newState.accessibleGroups.splice(index, 1);
				setNewTool(newState);
			} else {
				console.log('group id not found');
			}
		}
	}
	const shouldGroupBeChecked = (id) => {
		if (newTool.accessibleGroups.indexOf(id) >= 0) { return true }
		return false;
	}
	const handleSubmitNewTool = (e) => {
		e.preventDefault();
		onSubmit(newTool);
		setNewTool(newToolInitialState);
	}
	return (
		<form onSubmit={handleSubmitNewTool}>
			<TextInput placeholder='Name' name='name' value={newTool.name} onChange={handleInputChange} />	
			<TextInput placeholder='Note' name='note' value={newTool.note} onChange={handleInputChange} />	
			<ul>
				{ groups.map(group => {
					return (
						<Checkbox 
							key={group._id}
							value={group._id} 
							text={group.name} 
							onChange={handleCheckboxChange}
							checked={shouldGroupBeChecked(group._id)}
						/>		
					);
				}) }
			</ul>
			<ButtonDefault value='Add a Tool' type='submit' />
		</form>
	);
}

export default AddToolForm;
