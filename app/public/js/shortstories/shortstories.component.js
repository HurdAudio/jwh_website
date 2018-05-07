(function() {
  'use strict';


  angular.module('app')
    .component('shortstories', {
      controller: ShortStoriesController,
      templateUrl: '/js/shortstories/shortstories.template.html'
    });

    ShortStoriesController.$inject = ['$http', '$state', '$stateParams'];

    function ShortStoriesController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateMemoir = navigateMemoir;
      vm.navigateNovels = navigateNovels;
      vm.navigateSnakeOil = navigateSnakeOil;

      function navigateSnakeOil() {
        $state.go('snakeoil');
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function navigateMemoir() {
        $state.go('memoir');
      }

      function navigateLanding() {
        $state.go('landing');
      }

      function onInit() {
        console.log("Short Stories is lit");


      }

    }

}());
