var StarterApp = angular.module('starter', ['starter.controllers', 'ui.router', 'ui.bootstrap', 'ngCookies'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: '/www/templates/home.html',
                controller: 'HomeController'
            })


            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('contact', {
                url: '/contact',
                templateUrl: '/www/templates/contact.html',
                controller: 'ContactController'
            });


    });