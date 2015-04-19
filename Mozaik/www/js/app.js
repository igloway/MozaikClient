var App = angular.module('mozaikApp', ['ionic','angular-json-rpc'])

App.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider,configProvider) {
	
	configProvider.setHost('ws://mozaik.ddns.net');
	console.log("Host server:"+configProvider.host);
	
    $stateProvider
        .state('app', {
            url: '/app',
            name: 'app',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .state('reco_movie_mini', {
            url: '/reco_movie_mini',
            templateUrl: 'templates/reco_movie_mini.html',
            controller: 'RecoMovieCtrl'
        });

    $urlRouterProvider.otherwise('/app');

    $ionicConfigProvider.views.swipeBackEnabled(false);
});
