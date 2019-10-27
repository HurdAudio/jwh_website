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
      })
      .state({
        name: 'memoir',
        url: '/memoir',
        parent: 'app',
        component: 'memoir'
      })
      .state({
        name: 'surprisedbystory',
        url: '/surprisedbystory',
        parent: 'app',
        component: 'surprisedbystory'
      })
      .state({
        name: 'shortstories',
        url: '/shortstories',
        parent: 'app',
        component: 'shortstories'
      })
      .state({
        name: 'familysnakeoil',
        url: '/familysnakeoil',
        parent: 'app',
        component: 'familysnakeoil'
      })
      .state({
        name: 'sisters',
        url: '/sisters',
        parent: 'app',
        component: 'sisters'
      })
      .state({
        name: 'madefortelevision',
        url: '/madefortelevision',
        parent: 'app',
        component: 'madefortelevision'
      })
      .state({
        name: 'coyotekissed',
        url: '/coyotekissed',
        parent: 'app',
        component: 'coyotekissed'
      })
      .state({
        name: 'contact',
        url: '/contact',
        parent: 'app',
        component: 'contact'
      })
      .state({
        name: 'memoirintroduction',
        url: '/memoirintroduction',
        parent: 'app',
        component: 'memoirintroduction'
      })
      .state({
        name: 'memoirfirstchapter',
        url: '/memoirfirstchapter',
        parent: 'app',
        component: 'memoirfirstchapter'
      })
      .state({
        name: 'shortbio',
        url: '/shortbio',
        parent: 'app',
        component: 'shortbio'
      })
      .state({
        name: 'longbio',
        url: '/longbio',
        parent: 'app',
        component: 'longbio'
      })
      .state({
        name: 'publishedbooks',
        url: '/publishedbooks',
        parent: 'app',
        component: 'publishedbooks'
      })
      .state({
        name: 'funinfo',
        url: '/funinfo',
        parent: 'app',
        component: 'funinfo'
      })
      .state({
        name: 'futureprojects',
        url: '/futureprojects',
        parent: 'app',
        component: 'futureprojects'
      })
      .state({
        name: 'photowebsite',
        url: '/photowebsite',
        parent: 'app',
        component: 'photowebsite'
      })
      .state({
        name: 'shortstory',
        url: '/shortstory',
        parent: 'app',
        component: 'shortstory'
      })
      .state({
        name: 'memoirsecondchapter',
        url: '/memoirsecondchapter',
        parent: 'app',
        component: 'memoirsecondchapter'
      })
      .state({
        name: 'memoirthirdchapter',
        url: '/memoirthirdchapter',
        parent: 'app',
        component: 'memoirthirdchapter'
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
