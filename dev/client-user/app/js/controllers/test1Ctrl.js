define(['controllers'], function(controllers) {
    controllers.controller('test1Ctrl', ['$scope',
        function ($scope) {
            $scope.bla = 'this is from CONTROLLER!';
        }
    ]);
});