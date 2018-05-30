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
      vm.navigateSisters = navigateSisters;
      vm.navigateMadeForTelevision = navigateMadeForTelevision;
      vm.navigateCoyoteKissed = navigateCoyoteKissed;

      function navigateCoyoteKissed() {
        $state.go('coyotekissed');
      }

      function navigateMadeForTelevision() {
        $state.go('madefortelevision');
      }

      function navigateSisters() {
        $state.go('sisters');
      }

      function navigateSnakeOil() {
        $state.go('familysnakeoil');
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
