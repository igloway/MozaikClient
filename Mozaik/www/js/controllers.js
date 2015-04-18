App.controller('LoginCtrl', function ($scope, $state,Users) {
    $scope.methods = {
        openMovie: openMovie,
    };
    function openMovie() {
        $state.transitionTo('reco_movie_mini', null, {
            'reload': true
        });
    }
	
	/**
	 * Get users  
	 **/
	Users.getUsers(function(res){
		console.log(res);
	});
});

App.controller('RecoMovieCtrl', function ($scope) {

    angular.element(document).ready(function () {
        $("#floating-menu > a").click(function () {
            var $this = $(this);
            var $menu = $this.parent('div#floating-menu');
            if ($menu.hasClass('open')) {
                $menu.removeClass('open');
            } else {
                $menu.addClass('open');
            }
        });
    });

});
