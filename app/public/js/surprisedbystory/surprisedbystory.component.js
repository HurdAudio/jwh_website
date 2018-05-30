(function() {
  'use strict';


  angular.module('app')
    .component('surprisedbystory', {
      controller: SurprisedByStoryController,
      templateUrl: '/js/surprisedbystory/surprisedbystory.template.html'
    });

    SurprisedByStoryController.$inject = ['$http', '$state', '$stateParams'];

    function SurprisedByStoryController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateNovels = navigateNovels;
      vm.navigateLanding = navigateLanding;
      vm.navigateShortStories = navigateShortStories;

      function navigateShortStories() {
        $state.go('shortstories');
      }



      function navigateLanding() {
        $state.go('landing');
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function onInit() {
        console.log("SUPRISE!! is lit");




      }

    }

}());
