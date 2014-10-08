'use strict';

require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route',
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
        text: '../bower_components/requirejs-text/text',
        modernizr: '../bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js',
        less: '../bower_components/less/dist/less-1.7.3.min',
        jquery: '../bower_components/jquery/dist/jquery.min',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'angular' : {
            deps: ['jquery'],
            'exports' : 'angular'
        },
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    priority: [
        "angular"
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'jquery',
    'angular',
    'app',
    'routes',
    'less',
    'bootstrap'
], function($, angular, app, routes) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});