(function() {
  'use strict';


  angular.module('app')
    .component('kateessay', {
      controller: KateEssayController,
      templateUrl: '/js/kateessay/kateessay.template.html'
    });

    KateEssayController.$inject = ['$http', '$state', '$stateParams'];

    function KateEssayController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateNovels = navigateNovels;
      vm.navigateKate = navigateKate;
      vm.navigateKateOpeningPages = navigateKateOpeningPages;
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

      function navigateKateOpeningPages() {
        $state.go('kateopeningpages');
      }

      function navigateKate() {
        $state.go('kate');
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
