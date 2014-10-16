'use strict';

define([
    'angular',
    'app',
    'controllers/HomeCtrl'
], function(angular, app) {

    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/partials/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
});