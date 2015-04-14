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
        .state('home', {
            url: '/home',
            name: 'home',
            templateUrl: 'templates/reco_movie_mini.html',
            controller: 'RecoMovieCtrl'
        });
    //        .state('reco_movie_mini', {
    //            url: '/reco_movie_mini',
    //            templateUrl: 'templates/reco_movie_mini.html',
    //            controller: 'MainCtrl'
    //        });

    $urlRouterProvider.otherwise('/home');

    $ionicConfigProvider.views.swipeBackEnabled(false);
});
