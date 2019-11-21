const fakeTools = [{
    "_id": "1",
    "name": "hammer",
    "owner": {
	    _id: "123",
	    name: 'John'
    },
    "accessibleGroups": ["9", "7"],
    "note": "hit the nail on the head",
    "status": "available",
    "requests": [
      {
	_id: "4329",
	date: 1573815730353,
	user: {_id: "123", name: "John"},
	pending: true,
	borrowing: false
      },
      {
	_id: "5829",
	date: 1573815730999,
	user: {_id: "125", name: "Matt"},
	pending: true,
	borrowing: false
      }
    ]
}, {
    "_id": "2",
    "name": "aerator",
    "owner": {
	    _id: "125",
	    name: 'Matt'
    },
    "accessibleGroups": ["9"],
    "note": "put holes in ground",
    "status": "borrowed",
    "requests": []
}, {
    "_id": "3",
    "name": "powerwash",
    "owner": {
	    _id: "126",
	    name: 'Steve'
    },
    "accessibleGroups": ["8", "7"],
    "note": "water sold separated",
    "status": "available",
    "requests": []
}];

export default fakeTools;


