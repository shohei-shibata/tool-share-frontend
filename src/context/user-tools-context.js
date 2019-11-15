import React, {useState} from 'react';
import {useUser} from './user-context';
import Api from '../Helper/Api';

const UserToolsContext = React.createContext();

const UserToolsProvider = (props) => {
	const user = useUser();
	const [availableTools/*, setAvailableTools*/] = useState(() => {
		return Api.getToolsByGroupIds(user.groupBelong).filter(tool => {
		  return tool.owner._id !== user._id;
		});
	});
	const [ownTools, setOwnTools] = useState(Api.getOwnTools(user._id));

	// methods for availableTools
	const getToolById = (toolId) => {
	  const toolFound = availableTools.filter(tool => {
	    return tool._id === toolId;
	  });
	  if (toolFound.length === 1) {
	    return toolFound[0];
	  } else {
	    return null;
	  }
	}
	const requestTool = (toolId, userId, callback) => {
	  console.log('requestTool', toolId, userId);
	  let success = false;
	  let toolFound = getToolById(toolId);
	  const request = {
	    userId: userId,
	    date: Date.now()
	  };
	  if (toolFound) {
	    toolFound.requests.push(request);
	    success = true;
	    console.log('updating tool', toolFound);
	    updateTool(toolFound);
	  }
	  callback(success);
	}

	// methods for ownTools
	const addTool = (newTool) => {
	  	// add to own tools list
		// requirements
		// - must have name
		// - no duplicate names
		// - assign an id
		if (newTool.name.length < 1) { 
			console.log('New tool name must be assigned');
			return;
		} 
		const arr = ownTools.filter(item => {
			return item.name === newTool.name;
		});
		if (arr.length > 0) {
			console.log('Tool name already exists');
			return;
		}
		// temp method for setting id... will eventually get assigned in backend
		newTool._id = (Math.random() * 1000).toFixed(0) ;
		setOwnTools([...ownTools, newTool]);
	}
	const removeTool = (toolId) => {
		console.log('removeTool', toolId);
		setOwnTools(ownTools.filter(tool => {
			return tool._id !== toolId;
		}));
	}
	
	const updateTool = (updatedTool) => {
		console.log('updateTool', updatedTool);
		setOwnTools(ownTools.map(tool => {
			if (tool._id === updatedTool._id) {
			  // TO DO: Should sanitize data before updating
			  return updatedTool;
			} else {
			  return tool;
			}
		}));
	}
	return <UserToolsContext.Provider value={{
		availableTools: availableTools,
		ownTools: ownTools,
		getToolById: getToolById,
		addTool: addTool,
		removeTool: removeTool,
		requestTool: requestTool,
		updateTool: updateTool
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
