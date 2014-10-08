'use strict';

define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'controllers/RootCtrl',
    'angularRoute',
], function (angular) {
    var app = angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]);

    return app;
});
