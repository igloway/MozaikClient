App.controller('LoginCtrl', function ($scope, $state, Users) {

    $scope.methods = {
        openMovie: openMovie,
        goToRecoMovie: goToRecoMovie
    };

    function goToRecoMovie() {
        Users.login('test', 'test').then(function (result) {
            console.log(result);
            goToRecoMovie();
        });
    }

    angular.element(document).ready(function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 5,
            paginationClickable: true,
            //spaceBetween: 30,
            onImagesReady: function (swiper) {
                ResetImage();
            },

            onSlideChangeEnd: function (swiper) {
                ResetImage();
            }
        });

    });

    function ResetImage(){
        //$('.swiper-slide').hide();
        $('.swiper-slide-active').css({'width':'44px','height':'44px', 'margin-top':'25px'});
        $('.swiper-slide-active').next().next().next().next().css({'width':'44px','height':'44px', 'margin-top':'25px'});
        $('.swiper-slide-active').next().css({'width':'64px','height':'64px', 'margin-top':'10px'});
        $('.swiper-slide-active').next().next().next().css({'width':'64px','height':'64px', 'margin-top':'10px'});
        $('.swiper-slide-active').next().next().css({'width':'84px','height':'84px'});
    }

    function openMovie() {
        $state.transitionTo('reco_movie_mini', null, {
            'reload': true
        });
    }
    $scope.carouselIndex2 = 0;
    /**
     * Get users
     **/
    Users.getUsers().then(function (res) {
        console.log(res);
    });
});

App.controller('RecoMovieCtrl', function ($scope, LocalAPI) {

    $scope.medialist;
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

        var swiper = new Swiper('.swiper-container', {
            // pagination: '.swiper-pagination',
            slidesPerView: 6,
            paginationClickable: true,
            spaceBetween: 20,
        });


        var swiper = new Swiper('.swiper-container2', {
            //   pagination: '.swiper-pagination',
            slidesPerView: 6,
            paginationClickable: true,
            spaceBetween: 20,
        });

        var swiper = new Swiper('.swiper-container3', {
            //   pagination: '.swiper-pagination',
            slidesPerView: 6,
            paginationClickable: true,
            spaceBetween: 20,
        });
    });

    /**************************
	get list media from the API
	**************************/
    function loadlist() {
        LocalAPI.get_media('movie', 1).then(function (result) {
            console.log(result);
            if (result != undefined && result != '' && result != 'close') {
                $scope.medialist = result;
            }
        });
    }
});
