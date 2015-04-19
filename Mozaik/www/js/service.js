'use strict';
/**
 * Local server API follow document https://huntedhive.atlassian.net/wiki/display/MOZ/Local+Server+API
 * 
 * This module using for module Users
 * 1. method: Get users
 * 2. method: Login users
 **/
App.factory('Users', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){
    var host = 'ws://mozaik.ddns.net';
	 return {
		 login:function(username,password)
		 {
			 var qdefer = $q.defer();
		 	 var sock = new WebSocket(host);
			 processEventSocket(sock,qdefer);
			 var jsonrpcparam = {"username":username,"password":password}; //{"jsonrpc": "2.0", "method":'get_media', "params": [type,page], "id": 1}
  			 var paramjson = JSON.stringify(jsonrpcparam);

			 //send message to server
			 sendMessage(sock,paramjson);
			 return qdefer.promise;
		 }
	}
}]);

App.factory('LocalAPI', ['$http', '$q', '$rootScope', function($http, $q, $rootScope ){
	var host = 'ws://mozaik.ddns.net';
     return {
		 get_media:function(type,page)
		 {
			 var qdefer = $q.defer();
		 	 var sock = new WebSocket(host);
			 processEventSocket(sock,qdefer);

			 var jsonrpcparam ={"method":"get_local_users","params":{},"jsonrpc":"2.0","id":1};//{"jsonrpc": "2.0", "method":'get_media', "params": {type:'movie',page:1}, "id": 1}
  			 var paramjson = JSON.stringify(jsonrpcparam);

			 //send message to server
			 sendMessage(sock,paramjson);
			 return qdefer.promise;
		 }
	}
}]);

function processEventSocket(socket,qdefer)
{
	 socket.onopen = function() {
		 console.log('open');
	 };
	 socket.onmessage = function(e) {
		 console.log(e);
		 qdefer.resolve(e.data);
	 };
	 socket.onclose = function() {
		 console.log('close');
	 };
	 socket.onerror=function(e)
	 {
		console.log("ERROR :"+e);
		qdefer.resolve(e.data);
	 };
}

function sendMessage(socket,msg) {
	waitForSocketConnection(socket, function() {
		socket.send(msg);
		socket.close();
	});
};

function waitForSocketConnection(socket, callback){
	setTimeout(
		function(){
			if (socket.readyState === 1) {
				if(callback !== undefined){
					callback();
				}
				return;
			} else {
				waitForSocketConnection(socket,callback);
			}
		}, 5);
};



