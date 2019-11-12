import React, {useState} from 'react';
import {useUser} from './user-context';
import Api from '../Helper/Api';

const UserToolsContext = React.createContext();

const UserToolsProvider = (props) => {
	const user = useUser();
	const [tools, setTools] = useState(Api.getToolsByGroupIds(user.groupBelong));
	const addTool = (tool) => {
		// requirements
		// - must have name
		// - no duplicate names
		// - assign an id
		if (tool.name.length < 1) { 
			console.log('New tool name must be assigned');
			return;
		} 
		const arr = tools.filter(item => {
			return item.name === tool.name;
		});
		if (arr.length > 0) {
			console.log('Tool name already exists');
			return;
		}
		// temp method for setting id... will eventually get assigned in backend
		tool._id = (Math.random() * 1000).toFixed(0) ;
		setTools([...tools, tool]);
	}
	const removeTool = (toolId) => {
		console.log('removeTool', toolId);
		setTools(tools.filter(tool => {
			return tool._id !== toolId;
		}));
	}
	return <UserToolsContext.Provider value={{
		data: tools,
		addTool: addTool,
		removeTool: removeTool
	}} {...props} />
}

const useUserTools = () => {
	const context = React.useContext(UserToolsContext)
	if (context === undefined) {
		throw new Error('useUserTools must be used within a UserToolsProvider');
	}
	return context
}

export {UserToolsProvider, useUserTools};
