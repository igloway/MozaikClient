/**
 * The directive using cal height layout for application
 **/
App.directive('caculatorHeightApp', function ($rootScope,$timeout,$window) {
	return {
		restrict: 'A',
		link: function (s, elm, attrs) {
			var wid = $(window);
			s.$watch(function () {
				c();
			}, function (nv, ov) {
				c();
			}, true);
			function c(){
				var hMenuBar = $("#bottombar").height();
				// height mainbody equal window height - menubar and padding 10px
				$("#mainbody").css({height:wid.height()+hMenuBar-20});
				
			}
			wid.bind('resize', function () {
				s.$apply();
			});
		}
	}
});