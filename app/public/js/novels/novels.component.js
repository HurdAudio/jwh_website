(function() {
  'use strict';


  angular.module('app')
    .component('novels', {
      controller: NovlesController,
      templateUrl: '/js/novels/novels.template.html'
    });

    NovlesController.$inject = ['$http', '$state', '$stateParams'];

    function NovlesController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateEllie = navigateEllie;
      vm.navigateKate = navigateKate;
      vm.navigatePinkerton = navigatePinkerton;
      vm.navigateMemoir = navigateMemoir;
      vm.navigateShortStories = navigateShortStories;

      function navigateShortStories() {
        $state.go('shortstories');
      }

      function navigateMemoir() {
        $state.go('memoir');
      }

      function navigatePinkerton() {
        $state.go('pinkerton');
      }

      function navigateKate() {
        $state.go('kate');
      }

      function navigateEllie() {
        $state.go('ellie');
      }

      function navigateLanding() {
        $state.go('landing');
      }

      function onInit() {
        console.log("Novels is lit");


      }

    }

}());
