App.factory('MozaikSocket', function ($websocket) {
  
  
  
	// Open a WebSocket connection
	var dataStream = $websocket('ws://mozaik.ddns.net');

	var collection = [];
	
	dataStream.onError(function(message) {
		console.log(message)
	});
	dataStream.onMessage(function(message) {
		collection.push(JSON.parse(message.data));
		console.log(collection)
	});

	var methods = {
		collection: collection,
		get: function() {
			
			dataStream.send(JSON.stringify({ 
				method: 'get_local_users',
				"json-rpc":"2.0",
				id:1,
				params:[]
			}));
		}
	};

	return methods;
});