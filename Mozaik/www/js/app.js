var App = angular.module('mozaikApp', ['ionic'])

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

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $stateProvider
        .state('app', {
            url: '/app',
            name: 'app',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .state('movie', {
            url: '/movie',
            templateUrl: 'templates/reco_movie_mini.html',
            controller: 'RecoMovieCtrl'
        });

    $urlRouterProvider.otherwise('/app');

    $ionicConfigProvider.views.swipeBackEnabled(false);
});
