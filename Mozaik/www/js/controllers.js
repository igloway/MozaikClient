App.controller('LoginCtrl', function ($scope, $state,Users) {

    $scope.methods = {
        openMovie: openMovie,
    };
    function openMovie() {
		Users.login('test','test').then(function(result){
		console.log(result);
			goToRecoMovie();
		});
    }

	function goToRecoMovie()
	{
		$state.transitionTo('reco_movie_mini', null, {
            'reload': true
        });
    }
	$scope.carouselIndex2 = 0;
	/**
	 * Get users
	 **/
	Users.getUsers(function(res){
		console.log(res);
	});
});

App.controller('RecoMovieCtrl', function ($scope,LocalAPI) {

	$scope.medialist ;
	//get list
	loadlist();
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

	/**************************
	get list media from the API
	**************************/
	function loadlist()
	{
		LocalAPI.get_media('movie',1).then(function(result){
			console.log(result);
			if(result!=undefined && result!='' && result !='close')
			{
				$scope.medialist = result;
			}
		});
	}
});
