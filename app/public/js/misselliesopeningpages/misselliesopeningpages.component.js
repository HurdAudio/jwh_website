(function() {
  'use strict';


  angular.module('app')
    .component('misselliesopeningpages', {
      controller: MissElliesOpeningPgesController,
      templateUrl: '/js/misselliesopeningpages/misselliesopeningpages.template.html'
    });

    MissElliesOpeningPgesController.$inject = ['$http', '$state', '$stateParams'];

    function MissElliesOpeningPgesController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateNovels = navigateNovels;
      vm.navigateEllie = navigateEllie;
      vm.navigateEllieEssay = navigateEllieEssay;
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

      function navigateEllieEssay() {
        $state.go('ellieessay');
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
