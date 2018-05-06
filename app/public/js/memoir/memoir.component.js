(function() {
  'use strict';


  angular.module('app')
    .component('memoir', {
      controller: MemoirController,
      templateUrl: '/js/memoir/memoir.template.html'
    });

    MemoirController.$inject = ['$http', '$state', '$stateParams'];

    function MemoirController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateNovels = navigateNovels;
      vm.navigateLanding = navigateLanding;
      vm.navigateToSurprise = navigateToSurprise;

      function navigateToSurprise() {
        $state.go('surprisedbystory');
      }

      function navigateLanding() {
        $state.go('landing');
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function onInit() {
        console.log("Memoir is lit");




      }

    }

}());
