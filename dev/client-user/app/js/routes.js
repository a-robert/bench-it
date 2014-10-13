'use strict';

define([
    'angular',
    'app',
    'controllers/HomeCtrl',
    'controllers/test1Ctrl'
], function(angular, app) {

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/partials/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/test1', {
            templateUrl: 'app/partials/test1.html',
            controller: 'test1Ctrl'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
});