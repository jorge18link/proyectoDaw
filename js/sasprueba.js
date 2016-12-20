var app = angular.module('myA', []);
app.controller('control', function($scope, $http) {
    $http.get("json/sas.json")
    .then(function(res) {
        $scope.todos = res.data.datos;
    });
});
