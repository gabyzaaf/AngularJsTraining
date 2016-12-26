var scotchApp = angular.module('scotchApp',['ngRoute']);


scotchApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'home.html',
        controller:'mainController'
    })
    .when('/about',{
        templateUrl:'about.html',
        controller:'aboutController'
    })
    .when('/contact',{
        templateUrl:'contact.html',
        controller:'contactController'
    })
    .when('/Perso', {
        templateUrl: 'christian.html',
        controller: 'persoController'
    })
    .when('/gabriel', {
        templateUrl: 'gabriel.html',
        controller: 'gabrielController'
    })
});

scotchApp.controller('mainController',function($scope){
    $scope.message="everyone is good";

});

scotchApp.controller('aboutController',function($scope){
    $scope.message="i am an other page";
});

scotchApp.controller('contactController',function($scope){
    $scope.message="contact message";
});

scotchApp.controller('persoController', function($scope) {
    $scope.message = "c'est ma page";
});
/*
scotchApp.controller('gabrielController', function ($scope,$http) {
    console.log('helloooo');
    /*
    var req = {
        method: 'GET',
        url: 'http://localhost:49804/webservice.asmx/getValue',
        responseType: "json"
    }
   

    $http.get('http://localhost:49804/webservice.asmx/getValue')
    .then(function (response) {
        console.log(response);
    });
     
   
});
*/

scotchApp.controller("gabrielController", ['$scope', '$http', function ($scope, $http) {

    var req = {
        method: 'GET',
        url: 'http://localhost:49804/webservice.asmx/getValue',
        responseType: "json",
     }

    $http(req).then(function (response) {
        console.log(response);
    });
}]);


scotchApp.controller("myCtrl", ['$scope','$http', function ($scope,$http) {
    $scope.addEntry = function (persone) {
        var req = {
            method: 'POST',
            url: 'http://localhost:49804/webservice.asmx/changeValues',
             responseType: "json",
            data:{nom:persone.name, prenom:persone.firstname,age:persone.age}
        }

        $http(req).then(function (response) {
           
            
            $scope.nom = response.data.d.nom;
            $scope.prenom = response.data.d.prenom;
            $scope.age = response.data.d.age;
            
        
        });
            
    }
}]);