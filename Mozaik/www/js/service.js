'use strict';
/**
 * Local server API follow document https://huntedhive.atlassian.net/wiki/display/MOZ/Local+Server+API
 * 
 * This module using for module Users
 * 1. method: Get users
 * 2. method: Login users
 **/
App.service('Users', ['$http', '$q', '$rootScope','config', function($http, $q, $rootScope,config){
    
	this.getUsers = function(callback){
		return $http.jsonrpc(config.getHost()+"/get_local_user", 'GET', [], {})
		.success(function(res){
			if (typeof callback == "function") {
				callback(res);
			};
			
		})
		.error(function(res){
			if (typeof callback == "function") {
				callback(res);
			};
		});
		
	   
	}
	this.login = function(callback){
		
	
	}
}]);
