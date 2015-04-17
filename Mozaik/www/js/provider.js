'use strict';
//Provider style, full blown, configurable version
App.provider('config', function() {
    // In the provider function, you cannot inject any
    // service or factory. This can only be done at the
    // "$get" method.

    this.host = '';

    this.$get = function() {
        var h = this.host;
        return {
            getConfig: function() {
                return h;
            }
        }
    };

    this.setHost = function(host) {
        this.host = host;
    };
});
