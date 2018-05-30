(function() {
  'use strict';


  angular.module('app')
    .component('ellieessay', {
      controller: EllieEssayController,
      templateUrl: '/js/ellieessay/ellieessay.template.html'
    });

    EllieEssayController.$inject = ['$http', '$state', '$stateParams'];

    function EllieEssayController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateNovels = navigateNovels;
      vm.navigateEllie = navigateEllie;
      vm.navigateEllieOpeningPages = navigateEllieOpeningPages;
      vm.scrollEllieToTop = scrollEllieToTop;
      vm.navigateMemoir = navigateMemoir;
      vm.navigateShortStories = navigateShortStories;

      function navigateShortStories() {
        $state.go('shortstories');
      }

      function navigateMemoir() {
        $state.go('memoir');
      }

      function scrollEllieToTop() {
        let ellieOpeningPagesContent = document.getElementById('ellieOpeningPagesContent');

        ellieOpeningPagesContent.scrollTop = 0;
      }

      function navigateEllieOpeningPages() {
        $state.go('misselliesopeningpages');
      }

      function navigateEllie() {
        $state.go('ellie');
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
