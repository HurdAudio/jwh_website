(function() {
  'use strict';

  angular.module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'landing',
        url: '/',
        parent: 'app',
        component: 'landing'
      })
      .state({
        name: 'novels',
        url: '/novels',
        parent: 'app',
        component: 'novels'
      })
      .state({
        name: 'ellie',
        url: '/ellie',
        parent: 'app',
        component: 'ellie'
      })
      .state({
        name: 'misselliesopeningpages',
        url: '/misselliesopeningpages',
        parent: 'app',
        component: 'misselliesopeningpages'
      })
      .state({
        name: 'ellieessay',
        url: '/ellieessay',
        parent: 'app',
        component: 'ellieessay'
      })
      .state({
        name: 'kate',
        url: '/kate',
        parent: 'app',
        component: 'kate'
      })
      .state({
        name: 'kateopeningpages',
        url: '/kateopeningpages',
        parent: 'app',
        component: 'kateopeningpages'
      })
      .state({
        name: 'kateessay',
        url: '/kateessay',
        parent: 'app',
        component: 'kateessay'
      })
      .state({
        name: 'pinkerton',
        url: '/pinkerton',
        parent: 'app',
        component: 'pinkerton'
      })
      .state({
        name: 'pinkpages',
        url: '/pinkpages',
        parent: 'app',
        component: 'pinkpages'
      })
      .state({
        name: 'pinkessay',
        url: '/pinkessay',
        parent: 'app',
        component: 'pinkessay'
      });
      // .state({
      //   name: 'dayview',
      //   url: '/dayview/:id',
      //   parent: 'app',
      //   component: 'dayview'
      // })
      // .state({
      //   name: 'weekview',
      //   url: '/weekview/:id',
      //   parent: 'app',
      //   component: 'weekview'
      // })
      // .state({
      //   name: 'passwordreset',
      //   url: '/passwordreset/:id',
      //   parent: 'app',
      //   component: 'passwordreset'
      // })
      // .state({
      //   name: 'monthview',
      //   url: '/monthview/:id',
      //   parent: 'app',
      //   component: 'monthview'
      // })
      // .state({
      //   name: 'userprofile',
      //   url: '/userprofile/:id',
      //   parent: 'app',
      //   component: 'userprofile'
      // });



  }

}());
