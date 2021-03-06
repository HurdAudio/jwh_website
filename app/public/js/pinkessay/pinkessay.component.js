(function() {
  'use strict';


  angular.module('app')
    .component('pinkessay', {
      controller: PinkEssayController,
      templateUrl: '/js/pinkessay/pinkessay.template.html'
    });

    PinkEssayController.$inject = ['$http', '$state', '$stateParams'];

    function PinkEssayController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateNovels = navigateNovels;
      vm.navigatePink = navigatePink;
      vm.navigatePinkPages = navigatePinkPages;
      vm.scrollPinkToTop = scrollPinkToTop;
      vm.navigateMemoir = navigateMemoir;
      vm.navigateShortStories = navigateShortStories;

      function navigateShortStories() {
        $state.go('shortstories');
      }

      function navigateMemoir() {
        $state.go('memoir');
      }

      function scrollPinkToTop() {
        let pinkEssayContent = document.getElementById('pinkEssayContent');

        pinkEssayContent.scrollTop = 0;
      }

      function navigatePinkPages() {
        $state.go('pinkpages');
      }

      function navigatePink() {
        $state.go('pinkerton');
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function navigateLanding() {
        $state.go('landing');
      }

      function onInit() {
        console.log("Opening Pages is lit");


      }

    }

}());
