var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as HC'
    }).when('/frodo', {
        templateUrl: 'views/frodo.html',
        controller: 'FrodoController as FC'
    }).when('/bilbo', {
        templateUrl: 'views/bilbo.html',
        controller: 'BilboController as BC'
    }).when('/sauron', {
        templateUrl: 'views/sauron.html',
        controller: 'SauronController as SC'
    }).otherwise({redirectTo: '/'});
});
