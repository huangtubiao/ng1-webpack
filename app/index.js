let app = angular.module('app', ['ui.router', 'oc.lazyLoad',
    'app.home',
    'app.login'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('home');

    $stateProvider
    .state('home', {
        url: '/',
        template: require('./features/home/home.html'),
        controller: 'HomeController'
    })
    .state('login', {
        url: '/login',
        template: require('./features/login/login.html'),
        controller: 'LoginController'
    });
}]);

module.exports = app;
